<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\KnowledgeCenter;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class KnowledgeCenter extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'knowledge_centers';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['subdomain', 'title', 'description'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    public static $rules = [
        'subdomain' => 'required|min:3|max:252|regex:/^[a-zA-Z\d.-]+$/|unique:knowledge_centers,subdomain',
        'title' => 'required|min:3|max:252',
        'description' => 'required|min:3',
        'results_per_page' => 'required|numeric|min:1|max:9999',
    ];
    protected $appends = array(
        'filter_funders',
        'filter_keywords',
        'filter_dates',
        'filter_doctypes',
        'filter_issue_areas',
        'filter_languages',
        'filter_geography',
        'filter_copyrights',
        'filter_categories',
    );
    protected $defaultFilters = array(
        'funders' => 1,
        'keywords' => 1,
        'dates' => 1,
        'doctypes' => 1,
        'issue_areas' => 1,
        'languages' => 1,
        'geography' => 1,
        'copyrights' => 1,
        'categories' => 1,
    );

    public function getSearchFormSelectsAttribute($value)
    {
        if (is_array($value)) {
            return $value;
        }
        if (is_string($value) && is_object(json_decode($value))) {
            return json_decode($value, true);
        }
        return $this->defaultFilters;
    }

    public function setSearchFormSelectsAttribute($value)
    {
        $this->attributes['search_form_selects'] = json_encode($value);
    }

    /*
      Get filter attributes
     */

    public function getFilterFundersAttribute($value)
    {
        return $this->getFilter('funders');
    }

    public function getFilterKeywordsAttribute($value)
    {
        return $this->getFilter('keywords');
    }

    public function getFilterDatesAttribute($value)
    {
        return $this->getFilter('dates');
    }

    public function getFilterDoctypesAttribute($value)
    {
        return $this->getFilter('doctypes');
    }

    public function getFilterIssueAreasAttribute($value)
    {
        return $this->getFilter('issue_areas');
    }

    public function getFilterLanguagesAttribute($value)
    {
        return $this->getFilter('languages');
    }

    public function getFilterGeographyAttribute($value)
    {
        return $this->getFilter('geography');
    }

    public function getFilterCopyrightsAttribute($value)
    {
        return $this->getFilter('copyrights');
    }

    public function getFilterCategoriesAttribute($value)
    {
        return $this->getFilter('categories');
    }

    /*
      Set filter attributes
     */

    public function setFilterFundersAttribute($value)
    {
        return $this->setFilter('funders', $value);
    }

    public function setFilterKeywordsAttribute($value)
    {
        return $this->setFilter('keywords', $value);
    }

    public function setFilterDatesAttribute($value)
    {
        return $this->setFilter('dates', $value);
    }

    public function setFilterDoctypesAttribute($value)
    {
        return $this->setFilter('doctypes', $value);
    }

    public function setFilterIssueAreasAttribute($value)
    {
        return $this->setFilter('issue_areas', $value);
    }

    public function setFilterLanguagesAttribute($value)
    {
        return $this->setFilter('languages', $value);
    }

    public function setFilterGeographyAttribute($value)
    {
        return $this->setFilter('geography', $value);
    }

    public function setFilterCopyrightsAttribute($value)
    {
        return $this->setFilter('copyrights', $value);
    }

    public function setFilterCategoriesAttribute($value)
    {
        return $this->setFilter('categories', $value);
    }

    public function getFilter($filter)
    {
        if (isset($this->search_form_selects[$filter])) {
            return $this->search_form_selects[$filter];
        }
        return isset($this->defaultFilters[$filter]) ? $this->defaultFilters[$filter] : 1;
    }

    public function setFilter($filter, $value)
    {
        $filters = $this->search_form_selects;
        $filters[$filter] = $value;
        $this->search_form_selects = $filters;
    }

    /**
     * Knowledge Centers that belong to a client
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function knowledgecenterclient()
    {

        return $this->belongsTo('App\KnowledgeCenterClient', 'client_id');
    }

    /**
     * Get KC Admins Knowledge Centers
     */
    public static function getKcAdminKCs()
    {
        $kcIds = DB::table('kc_administrators')->select('kc_id')->where('user_id', '=', Auth::user()->id)->lists('kc_id');
        $knowledgeCenters = KnowledgeCenter::select('id', 'subdomain AS text')->whereIn('id', $kcIds)->get()->toArray();
        return $knowledgeCenters;
    }

    /**
     * Kc Categories Relationship
     */
    public function kcCategories()
    {
        return $this->hasMany('App\Category', 'kc_id', 'id');
    }

    /**
     * Kc Categories Relationship
     */
    public function kcSubCategories()
    {
        return $this->hasMany('App\CategoryResources', 'kc_id', 'id');
    }

    /**
     * User KC belongs to many Knowledge Centers
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
//    public function users()
//    {
//        return $this->belongsToMany('App\User', 'kc_administrators', 'kc_id', 'user_id');
//    }
}
