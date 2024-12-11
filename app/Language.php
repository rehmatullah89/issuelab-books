<?php

namespace App;

use App\BaseModel;

class Language extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'language';

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
    protected $fillable = ['language', 'abbrev'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        'language' => 'required|max:255',
        'abbrev'   => 'required|size:3|unique:language,abbrev',
    ];

    /**
     * Resources that belong to a language
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function resources()
    {
        return $this->belongsToMany('App\Resource', 'link_resource_keyword', 'language_id', 'resource_id');
    }
}
