<?php

return [

    'title'              => 'Languages',

    'single'             => 'Language',

    'model'              => App\Language::class,

    'columns'            => [

        'language' => ['title' => 'Language'],
        'abbrev'   => ['title' => 'Abbreviation'],

    ],

    'edit_fields'        => [

        'language' => ['title' => 'Language'],
        'abbrev'   => ['title' => 'Abbreviation'],

    ],

    'filters'            => [

        'language' => ['title' => 'Language'],
        'abbrev'   => ['title' => 'Abbreviation'],

    ],

    'rules'              => (new App\Language)->getRules(),

    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],

];
