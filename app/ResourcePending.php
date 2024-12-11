<?php

namespace App;

use App\Helpers\Copyright;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use DB;
use Storage;

class ResourcePending extends Model
{
   /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'research_pending';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'research_id';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * The name of the "created at" column.
     *
     * @var string
     */

    const CREATED_AT = 'date_added';

    /**
     * The name of the "updated at" column.
     *
     * @var string
     */
    const UPDATED_AT = 'date_modified';

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    
    /**
     * Author(s) who belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function authors()
    {
        return $this->belongsToMany('App\Author', 'link_resource_author', 'resource_id', 'author_id');
    }

    /**
     * Coverage that belongs to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function coverages()
    {
        return $this->belongsToMany('App\Coverage', 'link_resource_coverage', 'resource_id', 'coverage_id');
    }

    /**
     * Doctype(s) that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function doctypes()
    {
        return $this->belongsToMany('App\Doctype', 'link_resource_doctype', 'resource_id', 'doctype_id');
    }

    /**
     * Funder(s) who belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function funders()
    {
        return $this->organizations()->wherePivot('role', 'funder');
    }

    /**
     * Issue area(s) that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function issueAreas()
    {
        return $this->belongsToMany('App\IssueArea', 'link_resource_issue_area', 'resource_id', 'issue_area_id');
    }

    /**
     * Keywords that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function keywords()
    {
        return $this->belongsToMany('App\Keyword', 'link_resource_keyword', 'resource_id', 'keyword_id');
    }

    /**
     * Languages that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function languages()
    {
        return $this->belongsToMany('App\Language', 'link_resource_language', 'resource_id', 'language_id');
    }

    /**
     * Organizations that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function organizations()
    {
        return $this->belongsToMany('App\Organization', 'link_resource_organization', 'resource_id', 'organization_id')->withPivot('role');
    }

    /**
     * Publishing organizations that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function publishers()
    {
        return $this->organizations()->wherePivot('role', 'organization');
    }

    /**
     * Key findings that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function keyFindings()
    {
        return $this->hasMany('App\KeyFinding', 'resource_id');
    }

    /**
     * Universal identifiers that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function universalIdentifiers()
    {
        return $this->belongsToMany('App\UniversalIdentifier', 'link_resource_universal_identifier', 'resource_id', 'universal_identifier_id');
    }

    /**
     * Pad the month attribute of publish date with a leading 0
     *
     * @param string $value Month of publish date
     * @return string       Month of publish date that is always 2 digits
     */
    public function getPubDateMonthAttribute($value)
    {
        return $value ? str_pad((string) $value, 2, '0', STR_PAD_LEFT) : '01';
    }

    /**
     * Pad the day attribute of publish date with a leading 0
     *
     * @param string $value Day of publish date
     * @return string       Day of publish date that is always 2 digits
     */
    public function getPubDateDayAttribute($value)
    {
        return $value ? str_pad((string) $value, 2, '0', STR_PAD_LEFT) : '01';
    }

    /**
     * Pad the month attribute of publish date with a leading 0
     *
     * @param string $value Month of publish date
     */
    public function setPubDateMonthAttribute($value)
    {
        $this->attributes['pub_date_month'] = $value ? str_pad((string) $value, 2, '0', STR_PAD_LEFT) : '01';
    }

    /**
     * Pad the day attribute of publish date with a leading 0
     *
     * @param string $value Day of publish date
     */
    public function setPubDateDayAttribute($value)
    {
        $this->attributes['pub_date_day'] = $value ? str_pad((string) $value, 2, '0', STR_PAD_LEFT) : '01';
    }

    /**
     * The publication date as a Carbon date instance
     *
     * @return \Carbon\Carbon
     */
    public function getPubDateAttribute()
    {
        return Carbon::parse("{$this->pub_date_year}-{$this->pub_date_month}-{$this->pub_date_day} 00:00:00");
    }

    /**
     * URI to cover image
     *
     * @return string
     */
    public function getCoverImageAttribute()
    {
        $path = "/application/images/cover_graphics/185/{$this->research_id}.jpg";

        if (!Storage::exists($path)) {
            return asset('img/generic_book.png'); //TODO: change this asset
        }

        return asset($path);
    }

    /**
     * Download uri for resource file
     *
     * @return string
     */
    public function getFileAttribute()
    {
        return "//issuelab.org/click/download2/{$this->identifier}";
    }

    /**
     * Get rights attribute
     *
     * @return string
     */
    public function getRightsAttribute($rights)
    {
        return new Copyright($rights);
    }

    /**
     * Get by publish attribute
     *
     * @return string
     */
    public function getByPublisherAttribute()
    {
        // Get publisher ids
        $publishers = $this->publishers->lists('id');
        $resource_ids = $publishers->count() ? DB::table('link_resource_organization')->whereIn('organization_id', $publishers->toArray())->where('resource_id', '!=', $this->research_id)->lists('resource_id') : [];

        return $this->find($resource_ids);
    }

    /**
     * Get by title
     *
     * @return string
     */
    public function getByTitle($title)
    {
        $resources = Resource::where('title', 'like', "%$title%")->take(3)->get();
        return $resources;
    }

    /**
     * Set a resource as approved
     *
     * @return boolean if the approved status was saved
     */
    public function setApproved()
    {
        $this->approved = true;
        return $this->save();
    }

    /**
     * Set a resource as available
     *
     * @return boolean if the available setting was saved
     */
    public function setAvailable()
    {
        $this->available = true;
        return $this->save();
    }

    /**
     * Set pub date related attributes
     *
     * @return void
     */
    public function setPubDate()
    {
        $this->pub_date_mktime = mktime(0, 0, 0, (int) $this->pub_date_month, (int) $this->pub_date_day, (int) $this->pub_date_year);
    }
}
