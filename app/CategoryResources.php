<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryResources extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'category_resources';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['kc_id', 'cat_id', 'rescource_id'];
    
    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    public static $rules = [
        'kc_id'     => 'required',
        'cat_id'     => 'required',
        'rescource_id'     => 'required',
    ];
}
