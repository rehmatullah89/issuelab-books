<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;

class RequiredForLoggedInUsers
{
    /**
     * The Guard implementation.
     *
     * @var Guard
     */
    protected $auth;

    /**
     * The current request
     *
     * @var Illuminate\Http\Request
     */
    protected $request;

    /**
     * Required actions for logged in users
     *
     * @var array
     */
    protected $requirements = [];

    /**
     * Create a new filter instance.
     *
     * @param  Guard  $auth
     * @return void
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Add a required action
     *
     * @param boolean $complete If requirement is complete, or not
     * @param string  $path     Where user can fulfill the action
     * @param string  $redirect Where to go if the user has already completed the action
     */
    protected function addRequirement($complete, $path, $redirect)
    {
        $this->requirements[] = [
            'complete' => $complete,
            'path'     => $path,
            'redirect' => $redirect,
        ];
    }

    /**
     * Check if user still needs to do any required actions
     *
     * @return string|false The redirect path to complete the action or if the action is already completed, or false to continue the request
     */
    protected function checkRequirements()
    {
        if ($this->requirements) {
            $currentPath = $this->request->path();
            foreach ($this->requirements as $requirement) {
                // Check to see if the required action is needed
                if (!$requirement['complete']) {
                    // Redirect to the page where we can fulfill the requirement
                    if ($currentPath !== $requirement['path']) {
                        return $requirement['path'];
                    } else {
                        // we're on the page we need to be on to fulfill the this required action, don't check any more requirements
                        return false;
                    }
                } else {
                    // We don't need to see that page again, since we already met the requirement
                    if ($currentPath === $requirement['path']) {
                        return $requirement['redirect'];
                    }
                }
            }
        }

        // all requirements are passed, no need to redirect
        return false;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // These required actions are only for logged in users
        if ($this->auth->check()) {
            $this->request = $request;
            $user          = $this->auth->user();

            // Add required actions
            $this->addRequirement(!$user->organizations->isEmpty(), 'select-organization', '/');

            // Check if there are any unfulfilled actions and redirect, if needed
            if ($requirement = $this->checkRequirements()) {
                return redirect($requirement);
            }
        }

        return $next($request);
    }
}
