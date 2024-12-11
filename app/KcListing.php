<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KcListing extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'kc_listings';

    /**
     * @var string
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['kc_id', 'listing_id', 'feature', 'description', 'date_added', 'include', 'date_added_mktime'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    public static $rules = [
        'kc_id' => 'required',
        'listing_id' => 'required',
        'feature' => 'required',
    ];

}
