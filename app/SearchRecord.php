<?php

namespace App;

use AppRequest;
use Request;

class SearchRecord extends BaseModel {

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'search_terms';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['sort', 'keywords', 'date_published_start', 'date_published_end', 'doctypes', 'issue_areas', 'languages', 'coverage', 'categories', 'copyrights'];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'doctypes' => 'array',
        'issue_areas' => 'array',
        'languages' => 'array',
        'categories' => 'array',
        'copyrights' => 'array',
    ];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        'domain' => 'required|string',
        'ip_address' => 'required|ip',
        'date_published_start' => 'date',
        'date_published_end' => 'date',
    ];

    /**
     * The "booting" method of the model.
     *
     * Register handler functions that responding to model events here. Be sure to call the parent's boot method;
     *
     * @return void
     */
    protected static function boot() {
        parent::boot();

        static::saving(
                function ($searchRecord) {
                    $subdomain = AppRequest::subdomain();
                    $searchRecord->ip_address = Request::ip();
                    $searchRecord->domain = $subdomain ? $subdomain : 'www';
                },
                // Set a priority higher than 0 to run this before validation
                $priority = 10
        );
    }

}
