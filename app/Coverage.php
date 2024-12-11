<?php

namespace App;

use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

class Coverage extends BaseModel implements SluggableInterface {

    use SluggableTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'coverage';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     * @todo match timestamps to original db scheme, which uses `date_added`, `date_added_mktime`, `date_modified`, and `date_modified_mktime`
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['location', 'continent', 'continent_region', 'country', 'country_region', 'state', 'state_region', 'county', 'county_region', 'city', 'city_region', 'other', 'longitude', 'latitude'];

    /**
     * Configuration for generating unique identifier.
     *
     * @uses Cviebrock\EloquentSluggable/SluggableTrait
     *
     * @var array
     */
    protected $sluggable = [
        'build_from' => 'location',
    ];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        'location' => 'required',
    ];

    /**
     * Authors that belong to a resource
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function resources() {
        return $this->belongsToMany('App\Resource', 'link_resource_coverage', 'coverage_id', 'resource_id');
    }

    /**
     * Set location from other place attributes
     *
     * @return string
     */
    public function setLocation() {
        $locationPlaces = [
            $this->continent,
            $this->continent_region,
            $this->country,
            $this->country_region,
            $this->state,
            $this->state_region,
            $this->county,
            $this->county_region,
            $this->city,
            $this->city_region,
        ];
        $location = [];

        for ($i = 0; $i <= count($locationPlaces) - 1; $i += 2) {
            $part = "";
            if (trim($locationPlaces[$i]) != "") {
                $part .= $locationPlaces[$i];

                if (trim($locationPlaces[$i + 1]) != "") {
                    $part .= " ({$locationPlaces[$i + 1]})";
                }

                $location[] = $part;
            }
        }

        if (trim($this->other) != "") {
            $location[] = $this->other;
        }

        return $this->location = implode('-', $location);
    }

    /**
     * The "booting" method of the model.
     *
     * Register handler functions that responding to model events here. Be sure to call the parent's boot method;
     *
     * @return void
     */
    protected static function boot() {
        parent::boot();

        // Set priority higher than `0` so that this runs before validation
        static::saving(
                function ($model) {
                    $model->setLocation();
                    $model->sluggify();
                }, $priority = 10
        );
    }

}
