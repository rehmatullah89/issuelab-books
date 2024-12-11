<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class StorageServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $repositories = [
            'Author',
            'Coverage',
            'Doctype',
            'IssueArea',
            'Language',
            'Resource',
            'SearchRecord',
            'User',
            'KnowledgeCenter',
            'Organization',
            'Funder',
        ];

        foreach ($repositories as $repository) {
            $this->app->bind(
                "\\App\\Repositories\\{$repository}RepositoryInterface",
                "\\App\\Repositories\\Eloquent\\{$repository}Repository"
            );
        }
    }
}
