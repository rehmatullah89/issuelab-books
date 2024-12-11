<?php

return [

    'title'              => 'Doctypes',

    'single'             => 'Doctype',

    'model'              => App\Doctype::class,

    'columns'            => [

        'doctype'    => ['title' => 'Doctype'],

        'identifier' => ['identifier' => 'Identifier'],

    ],

    'edit_fields'        => [

        'doctype' => ['title' => 'Doctype'],

    ],

    'filters'            => [

        'doctype' => ['title' => 'Doctype'],

    ],

    'rules'              => (new App\Doctype)->getRules('identifier'),

    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],

];
