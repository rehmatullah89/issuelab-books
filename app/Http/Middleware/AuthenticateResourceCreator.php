<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class AuthenticateResourceCreator
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if( $this->userIsNotAuthenticated($request) )
          return redirect()->action('Auth\AuthController@getRegister');

        return $next($request);
    }

    /**
     * Check if authenticated user or redirect + session management
     *
     * @return Redirect || null
     */
    private function userIsNotAuthenticated($request) {
        $request->session()->forget('auth_mode');
        if ( ! Auth::check()) {
            $request->session()->put('auth_mode', 'resource_creation');
            return true;
        }
        return false;
    }

}
