<?php

namespace App;

class SuperAdminResource extends Resource
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'rights',
        'coverage',
        'pub_date_month',
        'pub_date_day',
        'pub_date_year',
        'download_url',
        'filename',
        'isbn',
        'download_url',
        'filename',
        'how_to_obtain',
        'ok_to_share',
        'special_comments'
    ];

    protected $accept_nested_attributes = [
      'authors',
      'coverages',
      'doctypes',
      'issue_areas',
      'languages',
      'organizations',
      'universal_identifiers'
    ];
}
