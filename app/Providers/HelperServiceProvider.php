<?php

namespace App\Providers;

use App\Helpers\ApplicationHelper;
use Illuminate\Support\ServiceProvider;

class HelperServiceProvider extends ServiceProvider
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
        $this->app->bind(App\Helpers\ApplicationHelper::class, function () {
            return new ApplicationHelper;
        });
    }
}
