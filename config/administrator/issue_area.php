<?php

return [

    'title'              => 'Issue Areas',

    'single'             => 'Issue Area',

    'model'              => App\IssueArea::class,

    'columns'            => [

        'issue_area' => ['title' => 'Issue Area'],
        'identifier' => ['identifier' => 'Identifier'],

    ],

    'edit_fields'        => [

        'issue_area' => ['title' => 'Issue Area'],

    ],

    'filters'            => [

        'issue_area' => ['title' => 'Issue Area'],

    ],

    'link'               => function ($model) {
        return url('issues/profile', [$model->identifier]);
    },

    'rules'              => (new App\IssueArea)->getRules('identifier'),

    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],

];
