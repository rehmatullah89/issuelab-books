<?php

namespace App;

use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

class Doctype extends BaseModel implements SluggableInterface
{
    use SluggableTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'doctype';

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
    protected $fillable = ['doctype'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        // Leave room for identifier to append `_1` to create unique slug
        'doctype'    => 'required|max:252',
        'identifier' => 'required|max:255|unique:doctype,identifier',
    ];

    /**
     * Configuration for generating unique identifier.
     *
     * @uses \Cviebrock\EloquentSluggable/SluggableTrait
     *
     * @var array
     */
    protected $sluggable = [
        'build_from' => 'doctype',
    ];

    /**
     * Resources that belong to an author
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function resources()
    {
        return $this->belongsToMany('App\Resource', 'link_resource_doctype', 'doctype_id', 'resource_id');
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
