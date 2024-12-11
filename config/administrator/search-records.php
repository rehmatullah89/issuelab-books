<?php

return [

    'title'              => 'Search History',

    'single'             => 'Search Record',

    'model'              => App\SearchRecord::class,

    'columns'            => [

        'domain'               => ['title' => 'Domain'],
        'ip_address'           => ['title' => 'IP'],
        'created_at'           => ['title' => 'Search date'],
        'sort'                 => ['title' => 'Sort'],
        'keywords'             => ['title' => 'Keywords'],
        'date_published_start' => ['title' => 'After date'],
        'date_published_end'   => ['title' => 'Before date'],

        'doctypes'             => [

            'title'  => 'Doctypes',

            'output' => function ($value) {
                return is_array($value) ? implode(', ', $value) : $value;
            },

        ],

        'issue_areas'          => [

            'title'  => 'Issue areas',

            'output' => function ($value) {
                return is_array($value) ? implode(', ', $value) : $value;
            },

        ],

        'languages'            => [

            'title'  => 'Languages',

            'output' => function ($value) {
                return is_array($value) ? implode(', ', $value) : $value;
            },

        ],

        'coverage'             => ['title' => 'Geography'],

        'copyrights'           => [

            'title'  => 'Copyright',

            'output' => function ($value) {
                return is_array($value) ? implode(', ', $value) : $value;
            },

        ],

        'authors'              => ['title' => 'Authors'],

        'organizations'        => ['title' => 'Organizations'],

        'funders'              => ['title' => 'Funders'],

        'categories'           => [

            'title'  => 'Categories',

            'output' => function ($value) {
                return is_array($value) ? implode(', ', $value) : $value;
            },

        ],

    ],

    'edit_fields'        => [

        'domain'               => [
            'title'    => 'Domain',
            'editable' => false,
        ],

        'ip_address'           => [
            'title'    => 'IP',
            'editable' => false,
        ],

        'created_at'           => [
            'title'    => 'Search date',
            'editable' => false,
        ],

        'sort'                 => [
            'title'    => 'Sort',
            'editable' => false,
        ],

        'keywords'             => [
            'title'    => 'Keywords',
            'editable' => false,
        ],

        'date_published_start' => [
            'title'    => 'After date',
            'editable' => false,
        ],

        'date_published_end'   => [
            'title'    => 'Before date',
            'editable' => false,
        ],

        'doctypes'             => [
            'title'    => 'Doctypes',
            'editable' => false,
        ],

        'issue_areas'          => [
            'title'    => 'Issue areas',
            'editable' => false,
        ],

        // For some reason, this field causes a JS error
        // 'languages'            => [
        //     'title'    => 'Languages',
        //     'editable' => false,
        // ],

        'coverage'             => [
            'title'    => 'Geography',
            'editable' => false,
        ],

        'copyrights'           => [
            'title'    => 'Copyright',
            'editable' => false,
        ],

        // authors, organizations, and funders, we aren't using as filters in the new system
        // 'authors'              => [
        //     'title'    => 'Authors',
        //     'editable' => false,
        // ],

        // 'organizations'        => [
        //     'title'    => 'Organizations',
        //     'editable' => false,
        // ],

        // 'funders'              => [
        //     'title'    => 'Funders',
        //     'editable' => false,
        // ],

        'categories'           => [
            'title'    => 'Categories',
            'editable' => false,
        ],

    ],

    'filters'            => [

        'domain'               => ['title' => 'Domain'],

        'sort'                 => ['title' => 'Sort'],

        'keywords'             => ['title' => 'Keywords'],

        'date_published_start' => [

            'title' => 'After (range)',
            'type'  => 'date',

        ],

        'date_published_end'   => [

            'title' => 'Before (range)',
            'type'  => 'date',

        ],

        'doctypes'             => ['title' => 'Doctype'],

        'issue_areas'          => ['title' => 'Issue Area'],

        'languages'            => ['title' => 'Language'],

        'coverage'             => ['title' => 'Geography'],

    ],

    // Remove create/update permissions, this is a view only interface
    'action_permissions' => [

        'create' => function ($model) {
            return false;
        },

        'update' => function ($model) {
            return false;
        },
    ],

];
