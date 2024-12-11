<?php

return [

    'title'              => 'Authors',

    'single'             => 'Author',

    'model'              => App\Author::class,

    'columns'            => [

        'fullname' => ['title' => 'Full name'],
        'first'    => ['title' => 'First name'],
        'last'     => ['title' => 'Last name'],
        'suffix'   => ['title' => 'Suffix'],
        'linkedin' => ['title' => 'LinkedIn'],

    ],

    'edit_fields'        => [

        'fullname' => [
            'title'    => 'Full name',
            'editable' => false,
        ],

        'first'    => [
            'title' => 'First name',
        ],

        'middle1'  => [
            'title' => 'Middle 1',
        ],

        'middle2'  => [
            'title' => 'Middle 2',
        ],

        'middle3'  => [
            'title' => 'Middle 3',
        ],

        'last'     => [
            'title' => 'Last name',
        ],

        'suffix'   => [
            'title' => 'Suffix',
        ],

        'linkedin' => [
            'title' => 'LinkedIn',
        ],
    ],

    'filters'            => [

        'fullname' => ['title' => 'Full name'],

        'first'    => ['title' => 'First name'],

        'middle1'  => ['title' => 'Middle 1'],

        'middle2'  => ['title' => 'Middle 2'],

        'middle3'  => ['title' => 'Middle 3'],

        'last'     => ['title' => 'Last name'],

        'suffix'   => ['title' => 'Suffix'],

    ],

    'link'               => function ($model) {
        return url('authors/profile', [$model->identifier]);
    },

    'rules'              => (new App\Author)->getRules(['fullname', 'identifier']),

    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],

];
