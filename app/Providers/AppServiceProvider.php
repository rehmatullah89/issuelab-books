<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /**
         * Custom validator for repeater fields.
         *
         * Parameters indicate which fields within each repeater instance are required
         *
         * Ex: 'organizations' => 'repeater:name' means that for every organization, the name field is required
         */
        Validator::extend('repeater', function ($attribute, $value, $parameters) {
            foreach ($value as $field) {
                if ($parameters) {
                    // Check each repeater for the list of required fields
                    foreach ($parameters as $required) {
                        if (!isset($field[$required]) || '' === $field[$required]) {
                            return false;
                        }
                    }
                } else {
                    // All values within the repeater need to be set
                    foreach ($field as $value) {
                        if ('' === $value) {
                            return false;
                        }
                    }
                }
            }
            return true;
        });

        /*
        * Custom validator for skipping spaces and special chars
        */
        Validator::extend('alpha_spaces', function($attribute, $value)
        {
            return preg_replace("/[^a-zA-Z]+/", "", $value);
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment() == 'local') {
            $this->app->register('Laracasts\Generators\GeneratorsServiceProvider');
        }

        // Decorate request with our custom methods
        $this->app->bind('App\Http\Requests\RequestInterface', 'App\Http\Requests\LaravelRequest');
        $this->app->bind('app.request', 'App\Http\Requests\RequestInterface');
    }
}
