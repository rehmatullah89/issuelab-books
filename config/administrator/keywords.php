<?php

return [

    'title'              => 'Keywords',

    'single'             => 'Keyword',

    'model'              => App\Keyword::class,

    'columns'            => [

        'keyword'    => ['title' => 'Keyword'],
        'identifier' => ['identifier' => 'Identifier'],
        'stem'       => ['title' => 'Stem'],

    ],

    'edit_fields'        => [

        'keyword' => ['title' => 'Keyword'],
        'stem'    => ['title' => 'Stem'],

    ],

    'filters'            => [

        'keyword' => ['title' => 'Keyword'],
        'stem'    => ['title' => 'Stem'],

    ],

    'rules'              => (new App\Keyword)->getRules('identifier'),

    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],

];
