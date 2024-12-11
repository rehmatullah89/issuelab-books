<?php

return [

    'title' => 'Resource Logs',
    'single' => 'Resource Log',
    'model' => App\ActivityLog::class,
    'columns' => [

        'id' => ['title' => "ID"],
        'listing_id' => ['title' => 'Resource Title', 'relationship' => 'resource', 'select' => '(:table).title'],
        'user_id' => ['title' => 'User (Creator?)', 'relationship' => 'user', 'select' => '(:table).full_name'],
        'user_role' => ['title' => 'User Role'],
        'kc_id' => ['title' => 'Knowledge Center', 'relationship' => 'knowledgeCenter', 'select' => '(:table).subdomain'],
        'action_date' => ['title' => 'Created Date'],
    ],
    'edit_fields' => [
        'id' => ['title' => "ID"],
    ],
    'filters' => [

        'id' => ['title' => "ID"],
        'user' => ['title' => 'User', 'type' => 'relationship', 'name_field' => 'full_name'],
        'user_role' => ['title' => 'User Role'],
        'knowledgeCenter' => ['title' => 'Knowledge Center', 'type' => 'relationship', 'name_field' => 'subdomain'],
        'action_date' => ['title' => 'Created Date (range)', 'type' => 'date', 'editable' => false, 'date_format' => 'yy-mm-dd'],
    ],
    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
        'create' => function($model)
        {
            return false;
        },
        'update' => function($model)
        {
            return false;
        }
    ],
    'query_filter' => function($query) {
        $query->where('activity', '=', 'add_listing');
    },
];
