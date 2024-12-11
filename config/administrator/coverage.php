<?php

return [

    'title'              => 'Coverages',

    'single'             => 'Coverage',

    'model'              => App\Coverage::class,

    'columns'            => [

        'location'   => ['title' => 'Location'],
        'identifier' => ['title' => 'Identifier'],
        'continent'  => ['title' => 'Continent'],
        //'continent_region' => ['title' => 'Continent Region'],
        'country'    => ['title' => 'Country'],
        //'country_region'   => ['title' => 'Country Region'],
        'state'      => ['title' => 'State'],
        //'state_region'     => ['title' => 'State Region'],
        'county'     => ['title' => 'County'],
        //'county_region'    => ['title' => 'County Region'],
        'city'       => ['title' => 'City'],
        //'city_region'      => ['title' => 'City Region'],
        // 'longitude'        => ['title' => 'Longitude'],
        // 'latitude'         => ['title' => 'Latitude'],

    ],

    'edit_fields'        => [

        'location'         => [
            'title'    => 'Location',
            'editable' => false,
        ],

        'continent'        => ['title' => 'Continent'],
        'continent_region' => ['title' => 'Continent Region'],
        'country'          => ['title' => 'Country'],
        'country_region'   => ['title' => 'Country Region'],
        'state'            => ['title' => 'State'],
        'state_region'     => ['title' => 'State Region'],
        'county'           => ['title' => 'County'],
        'county_region'    => ['title' => 'County Region'],
        'city'             => ['title' => 'City'],
        'city_region'      => ['title' => 'City Region'],
        'longitude'        => ['title' => 'Longitude'],
        'latitude'         => ['title' => 'Latitude'],
        'other'            => ['title' => 'Other'],

    ],

    'filters'            => [

        'location'         => ['title' => 'Location'],
        'continent'        => ['title' => 'Continent'],
        'continent_region' => ['title' => 'Continent Region'],
        'country'          => ['title' => 'Country'],
        'country_region'   => ['title' => 'Country Region'],
        'state'            => ['title' => 'State'],
        'state_region'     => ['title' => 'State Region'],
        'county'           => ['title' => 'County'],
        'county_region'    => ['title' => 'County Region'],
        'city'             => ['title' => 'City'],
        'city_region'      => ['title' => 'City Region'],
        'other'            => ['title' => 'Other'],

    ],

    // Remove delete permissions, for data integrity
    'action_permissions' => [

        'delete' => function ($model) {
            return false;
        },
    ],

];
