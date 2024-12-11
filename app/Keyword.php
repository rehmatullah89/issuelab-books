<?php

namespace App;

use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;

class Keyword extends BaseModel implements SluggableInterface
{
    use SluggableTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'keyword';

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
    protected $fillable = ['keyword', 'stem'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        'keyword'    => 'required|max:252',
        'identifier' => 'required|max:255|unique:keyword,identifier',
        'stem'       => 'required|max:300',
    ];

    /**
     * Configuration for generating unique identifier.
     *
     * @uses \Cviebrock\EloquentSluggable/SluggableTrait
     *
     * @var array
     */
    protected $sluggable = [
        'build_from' => 'keyword',
    ];

    /**
     * Resources that belong to an author
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function resources()
    {
        return $this->belongsToMany('App\Resource', 'link_resource_keyword', 'keyword_id', 'resource_id');
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
