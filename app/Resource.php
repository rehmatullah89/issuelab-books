<?php

namespace App;

use App\Helpers\Copyright;
use App\Traits\MktimeTimestamps;
use App\Traits\ModelType;
use Carbon\Carbon;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;
use DB;
use Storage;

class Resource extends BaseModel implements SluggableInterface
{
//    use MktimeTimestamps, ModelType, SluggableTrait;

use ModelType,
    SluggableTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'research';

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
     * The model's attributes. Set defaults here.
     *
     * @var array
     */
    protected $attributes = [
        'pub_date_month' => '01',
        'pub_date_day' => '01',
        // Available is used to exclude a resource from the entire system (like deleting it)
        'available' => true,
        // Default to 'pending' status
        'approved' => 2,
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'pub_date_month',
        'pub_date_day',
        'pub_date_year',
        'download_url',
        'filename',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'pub_date_month' => 'string',
        'pub_date_day' => 'string',
        'pub_date_year' => 'string',
        'available' => 'boolean',
        'approved' => 'integer',
    ];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        // Leave room for identifier to append `_1` to create unique slug
//        'title' => 'required|max:297',
//        'identifier' => 'required|max:300|unique:research,identifier',
//        'description' => 'required',
//        'pub_date_year' => 'required|digits:4|date_format:Y',
//        'pub_date_month' => 'required|digits:2|date_format:m',
//        'pub_date_day' => 'digits:2|date_format:d',
//        'download_url' => 'required_without:filename',
//        'filename' => 'required_without:download_url',
    ];

    /**
     * Configuration for generating unique identifier.
     *
     * @uses \Cviebrock\EloquentSluggable/SluggableTrait
     *
     * @var array
     */
    protected $sluggable = [
        'build_from' => 'title',
    ];

    /**
     * Map status label to integer (stored in approved column)
     *
     * @var array
     */
    public static $status = [
        'rejected' => 0,
        'approved' => 1,
        'pending' => 2,
    ];

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
     * Issue area(s) that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public static function resourceKnowledgeCenters($resourceId)
    {
        $knowledgeCenters = [];
        $kcIds = DB::table('kc_listings')->select('kc_id')->where('listing_id', '=', $resourceId)->lists('kc_id');
        if(!is_null($kcIds) && sizeof($kcIds) > 0) {
            $knowledgeCenters = KnowledgeCenter::select('id', 'subdomain AS text')->whereIn('id', $kcIds)->get();
        }
        return $knowledgeCenters;
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
     * Categories that belong to a resource
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function categories()
    {
        return $this->belongsToMany('App\Category', 'category_resources', 'rescource_id', 'cat_id');
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
     * URI to cover photo
     *
     * @return string
     */
    public function getCoverPhotoAttribute()
    {
        $path = "resources/default_cover.png";
        if(!is_null($this->cover_graphic_type)) {
            if($this->cover_graphic_type==1) {
                $path = "resources/$this->research_id/pdf_cover.png";
            } else if($this->cover_graphic_type==2) {
                $path = "resources/$this->research_id/custom_cover.png";
            }
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
     * Get Draft resource
     *
     * @return Object
     */
    public function scopeDraft($query) {
        return $query->where('publish_status', '=', 'DRAFT');
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
     * check for duplicate resource
     *
     * @return string
     */
    public function checkDuplicateResource($data = array())
    {
        $title = $data['title'];
        $curResourceId = $data['curResourceId'];
        $pubDateYear = date('Y', strtotime($data['pub_date']));
        $andWhere = "";
        $orWhere = "";
        $join = "";
        if ($data['download_url'] != "") {
            $downloadUrl = $data['download_url'];
            $orWhere = ' OR download_url = "'.$downloadUrl.'" ';
        }
        if ($curResourceId != 0) {
            $andWhere .=  ' AND RES.research_id <> '.$curResourceId;
        }
        
        if (!is_null($data['organizations'])) {
            $join = 'JOIN link_resource_organization LRO ON LRO.resource_id = RES.research_id
                     JOIN organization ORG ON ORG.id = LRO.organization_id';
            $andWhere .= " AND (role = 'organization'  AND ( ";
            foreach ($data['organizations'] as $index => $organization) {
                $orgName = $organization['name'];
                if (sizeof($data['organizations']) == $index + 1) {
                    $andWhere .= ' ORG.organization LIKE "%'.$orgName.'%" ';
                } else {
                    $andWhere .= 'ORG.organization LIKE "%'.$orgName.'%" OR ';
                }
            }
            $andWhere .= ' )) ';
        }
        $resources = DB::select(DB::raw(
                                '
                     SELECT *
                     FROM `research` RES
                     '.$join.'
                     WHERE RES.title LIKE "%'.$title.'%"
                     AND RES.`pub_date_year` = "'.$pubDateYear.'"
                     AND (RES.`publish_status` = "PUBLISHED" OR RES.`publish_status` = "APPROVED")
                     '.$andWhere.'
                     '.$orWhere.'
                    '
                        ), array());
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

    /**
     * The "booting" method of the model.
     *
     * Register handler functions that responding to model events here. Be sure to call the parent's boot method;
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        // Set priority higher than `0` so that this runs before validation
        static::saving(
                function ($model) {
                    $model->setPubDate();
                    $model->sluggify();
                }, $priority = 10
        );
    }

}
