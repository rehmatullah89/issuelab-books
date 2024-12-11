<?php

return [

    'title'              => 'Universal Identifiers',

    'single'             => 'Universal Identifier',

    'model'              => App\UniversalIdentifier::class,

    'columns'            => [

        'universal_identifier' => ['title' => 'Universal Identifier'],
        'type'                 => ['identifier' => 'Type'],

    ],

    'edit_fields'        => [

        'universal_identifier' => ['title' => 'Universal Identifier'],

        'type'                 => [

            'type'    => 'enum',

            'title'   => 'Type',

            'options' => App\UniversalIdentifier::$types,

        ],

    ],

    'filters'            => [

        'universal_identifier' => ['title' => 'Universal Identifier'],

        'type'                 => [

            'type'    => 'enum',

            'title'   => 'Type',

            'options' => App\UniversalIdentifier::$types,

        ],

    ],

    'rules'              => (new App\UniversalIdentifier)->getRules(),

    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],

];
