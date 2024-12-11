<?php

return [

    'title' => 'KC Clients',
    'single' => 'KC Client',
    'model' => App\KnowledgeCenterClient::class,
    'columns' => [

        'id' => ['title' => "ID"],
        'name' => ['title' => 'Name'],
        'city' => ['title' => 'City'],
        'state' => ['title' => 'State'],
        'zip' => ['title' => 'Zip'],
        'country' => ['title' => 'Country'],
    ],
    'edit_fields' => [

        'name' => ['title' => 'Name'],
        'city' => ['title' => 'City'],
        'state' => ['title' => 'State'],
        'zip' => ['title' => 'Zip'],
        'country' => ['title' => 'Country'],
        'knowledgecenter' => [ 'title' => 'Knowledge Centers', 'type' => 'relationship', 'name_field' => 'subdomain'],
    ],
    'filters' => [

        'id' => ['title' => "ID"],
        'name' => ['title' => 'Name'],
        'city' => ['title' => 'City'],
        'state' => ['title' => 'State'],
        'zip' => ['title' => 'Zip'],
        'country' => ['title' => 'Country'],
    ],
    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],
];
