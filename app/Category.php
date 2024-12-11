<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'kc_categories';
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['category'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    public static $rules = [
        'category' => 'required|max:255|min:2',
    ];

    /**
     * Category Groups Relationship
     */
    public function categoryGroup()
    {
        return $this->belongsTo('App\Category', 'p_id', 'id');
    }
    
    /**
     * Category Groups Relationship
     */
    public function groupCategories()
    {
        return $this->hasMany('App\Category', 'p_id');
    }

    /**
     * Category Knowledgecenter Relationship
     */
    public function knowledgeCenter()
    {
        return $this->belongsTo('App\KnowledgeCenter', 'kc_id', 'id');
    }

    /**
     * Category Resources Relationship
     */
    public function categoryResources()
    {
        return $this->belongsToMany('App\Category', 'category_resources', 'cat_id', 'rescource_id')->withPivot('kc_id');
    }

}
