<?php

return [

    'title'              => 'Knowledge Centers',

    'single'             => 'Knowledge Center',

    'model'              => App\KnowledgeCenter::class,

    'columns'            => [

        'id'          => ['title' => "ID"],
        'subdomain'   => ['title' => 'Subdomain'],
        'title'       => ['title' => 'Title'],
        'description' => ['title' => 'Description'],

    ],

    'edit_fields'        => [

        'subdomain'          => ['title' => 'Subdomain'],
        'title'              => ['title' => 'Title'],
        'description'        => ['title' => 'Description', 'type' => 'textarea'],
        'results_per_page'   => ['title' => 'Results Per Page'],
//        'filter_funders'     => ['title' => 'Show Funders Filter', 'type' => 'bool'],
//        'filter_keywords'    => ['title' => 'Show Keywords Filter', 'type' => 'bool'],
//        'filter_dates'       => ['title' => 'Show Publish Date Filter', 'type' => 'bool'],
//        'filter_doctypes'    => ['title' => 'Show Doctypes Filter', 'type' => 'bool'],
//        'filter_issue_areas' => ['title' => 'Show Issue Areas Filter', 'type' => 'bool'],
//        'filter_languages'   => ['title' => 'Show Languages Filter', 'type' => 'bool'],
//        'filter_geography'   => ['title' => 'Show Geography Filter', 'type' => 'bool'],
//        'filter_copyrights'  => ['title' => 'Show Copyrights Filter', 'type' => 'bool'],
//        'filter_categories'  => ['title' => 'Show Categories Filter', 'type' => 'bool'],
        'advance_search_expanded'  => ['title' => 'Expand Advance Search', 'type' => 'bool'],
        'switch_category_view'  => ['title' => 'Select Category View', 'type' => 'enum','options' => array('optgroup_view'=>'Opt-Group View', 'select_view'=>'Select By Group Lists')],
        'kc_display'  => ['title' => 'Select View Type', 'type' => 'enum','options' => array('grid_view'=>'Grid View', 'list_view'=>'List View')],
        'knowledgecenterclient' => [ 'title'=> 'KC Client', 'type'=> 'relationship', 'name_field' => 'name'],
    ],

    'filters'            => [

        'id'          => ['title' => "ID"],
        'subdomain'   => ['title' => 'Subdomain'],
        'title'       => ['title' => 'Title'],
        'description' => ['title' => 'Description'],

    ],
                    
    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],

];
