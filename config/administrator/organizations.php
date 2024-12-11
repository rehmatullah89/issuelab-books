<?php

return [

    'title'              => 'Organizations',

    'single'             => 'Organization',

    'model'              => App\Organization::class,

    'columns'            => [

        'organization' => ['title' => 'Organization'],
        'url'          => ['title' => 'URL'],
        'country'      => ['title' => 'Country'],
        'city'         => ['title' => 'City'],
        'state'        => ['title' => 'State'],

    ],

    'edit_fields'        => [

        'organization'      => ['title' => 'Organization'],

        'mission_statement' => [

            'title' => 'Mission Statement',

            'type'  => 'textarea',

        ],

        'url'               => ['title' => 'URL'],
        'mailing_address'   => ['title' => 'Mailing Address'],
        'mailing_address2'  => ['title' => 'Mailing Address 2'],
        'country'           => ['title' => 'Country'],
        'city'              => ['title' => 'City'],
        'state'             => ['title' => 'State'],
        'zip'               => ['title' => 'ZIP'],
        'ein'               => ['title' => 'EIN'],
        'gm_key'            => ['title' => 'GM Key'],
        'recipient_key'     => ['title' => 'Recipient Key'],
        'fc_name'           => ['title' => 'FC Name'],
        'fdo_url'           => ['title' => 'FDO Url'],
        'guidestar_id'      => ['title' => 'Guidestar ID'],
        'guidestar_name'    => ['title' => 'Guidestar Name'],
        'fundref'           => ['title' => 'Fundref'],

    ],

    'filters'            => [

        'organization'      => ['title' => 'Organization'],
        'mission_statement' => ['title' => 'Mission Statement'],
        'url'               => ['title' => 'URL'],
        'mailing_address'   => ['title' => 'Mailing Address'],
        'mailing_address2'  => ['title' => 'Mailing Address 2'],
        'country'           => ['title' => 'Country'],
        'city'              => ['title' => 'City'],
        'state'             => ['title' => 'State'],
        'zip'               => ['title' => 'ZIP'],

    ],

    'link'               => function ($model) {
        if ($model->isPublisher()) {
            return url('publishers/profile', [$model->identifier]);
        } else if ($model->isFunder()) {
            return url('funders/profile', [$model->identifier]);
        }

        return false;
    },

    'rules'              => (new App\Organization)->getRules('identifier'),

    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],

];
