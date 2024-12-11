<?php

return [
        'endpoint' => [
            'localhost' => [
                'host'      => env('SOLR_HOST', '198.50.161.7'),
                'port'      => env('SOLR_PORT', '8080'),
                'path'      => env('SOLR_PATH', '/solr/issuelab'),
            ],
        ]
    ];

?>