<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * @var array
     */
    protected $middleware = [
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
        \App\Http\Middleware\RequiredForLoggedInUsers::class,
    ];

    /**
     * The application's route middleware.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth'                  => \App\Http\Middleware\Authenticate::class,
        'auth.basic'            => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'auth.resource_creator' => \App\Http\Middleware\AuthenticateResourceCreator::class,
        'guest'                 => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'guest.superadmin'      => \App\Http\Middleware\RedirectIfAuthenticatedAndNotSuperadmin::class,
        'superadmin'            => \App\Http\Middleware\AuthenticateSuperadmin::class,
    ];
}
