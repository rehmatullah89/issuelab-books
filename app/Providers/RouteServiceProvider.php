<?php

namespace App\Providers;

use App\Author;
use App\IssueArea;
use App\KnowledgeCenter;
use App\Resource;
use App\User;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Routing\Router;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to the controller routes in your routes file.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function boot(Router $router)
    {
        // Limit subdomains to existing knowledge centers
        $router->pattern('subdomain', KnowledgeCenter::all()->lists('subdomain')->implode('|'));

        $router->pattern('letter', '^[A-Za-z]{1}$');

        $router->bind('author', function ($identifier) {
            return Author::whereIdentifier($identifier)->firstOrFail();
        });

        // This needs to be fixed and matched to current routes in Code Igniter
        $router->bind('issue-areas', function ($identifier) {
            return IssueArea::whereIdentifier($identifier)->firstOrFail();
        });

        $router->bind('resource', function ($identifier) {
            return Resource::whereIdentifier($identifier)->firstOrFail();
        });

        $router->bind('users', function ($identifier) {
            return User::whereIdentifier($identifier)->firstOrFail();
        });

        parent::boot($router);
    }

    /**
     * Define the routes for the application.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function map(Router $router)
    {
        $router->group(['namespace' => $this->namespace], function ($router) {
            require app_path('Http/routes.php');
        });
    }
}
