<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ResourceMetadata extends Model {

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'resource_metadata';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['key', 'value'];

    /**
     * Get all resources metadata
     * @return \Illuminate\Database\Eloquent\Collection
     */
}
