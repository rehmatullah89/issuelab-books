<?php

namespace App;

use App\Traits\ModelType;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

class IssueArea extends BaseModel implements SluggableInterface
{
    use ModelType, SluggableTrait;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'issue_area';

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
    protected $fillable = ['issue_area'];

    /**
     * Configuration for generating unique identifier.
     *
     * @uses Cviebrock\EloquentSluggable/SluggableTrait
     *
     * @var array
     */
    protected $sluggable = [
        'build_from' => 'issue_area',
    ];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        'issue_area' => 'required|max:252',
        'identifier' => 'required|max:255|unique:issue_area,identifier',
    ];

    /**
     * Resources that belong to an author
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function resources()
    {
        return $this->belongsToMany('App\Resource', 'link_resource_doctype', 'issue_area_id', 'resource_id');
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
                $model->sluggify();
            },
            $priority = 10
        );
    }
}
