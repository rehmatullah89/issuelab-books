<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Route;
use Illuminate\Auth\Guard as Auth;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use Validator;

class AuthController extends Controller
{
    protected $user;
    protected $auth;

    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
     */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    protected $loginPath    = '/login';
    protected $redirectPath = '/';

    /**
     * Create a new authentication controller instance.
     */
    public function __construct(Auth $auth, User $user)
    {
        $this->middleware('guest', ['except' => 'getLogout']);
        $this->auth = $auth;
        $this->user = $user;
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function getLogin(Request $request)
    {
        list($auth_mode, $login_form_options) = $this->readUserSession($request);

        return view('auth.login', compact('auth_mode', 'login_form_options'));
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function getRegister(Request $request)
    {
        list($auth_mode, $login_form_options) = $this->readUserSession($request);

        $rules = $this->user->getRules();

        return view('auth.register', compact('rules', 'auth_mode', 'login_form_options'));
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postRegister(Request $request)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            $this->throwValidationException(
                $request, $validator
            );
        }

        $this->auth->login($this->create($request->all()));

        return redirect($this->redirectPath());
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        $rules = array_merge(
            $this->user->getRules(),
            [
                'password'  => 'required|confirmed|min:8',
                'fake_name' => 'honeypot',
                'time'      => 'required|honeytime:5',
            ]
        );

        $messages = [
            'email.unique' => sprintf(
                'That email is already in use. Would you like to <a href="%s">log in</a>?',
                action('Auth\AuthController@getLogin', ['email' => $data['email']])
            ),
        ];

        // Don't validate time when testing, since we don't want to slow down the tests ;)
        if (app()->environment('testing')) {
            unset($rules['time']);
        }

        return Validator::make($data, $rules, $messages);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     *
     * @return User
     */
    protected function create(array $data)
    {
        return $this->user->create([
            'full_name' => $data['full_name'],
            'email'     => $data['email'],
            'password'  => bcrypt($data['password']),
            'employer'  => $data['employer'],
            'title'     => $data['title'],
        ]);
    }

    /**
     * Redirect authenticated user to specific/custom url
     *
     * @param Resquest $request, User $user
     *
     * @return \Illuminate\Http\Redirect
     */
    protected function authenticated(Request $request, User $user)
    {
        $redirect = $request->input('redirect');
        if($redirect){
          $routes  = Route::getRoutes();
          $request = Request::create($redirect);
          try {
              // check if route exists
              $routes->match($request);
              return redirect($redirect);
          }
          catch (\Symfony\Component\HttpKernel\Exception\NotFoundHttpException $e){
              return redirect($this->redirectPath);
          }
        }
        return redirect($this->redirectPath);
    }

    /**
     * Read post login/register behavior from User session
     *
     * @return array($auth_mode, $login_form_options)
     */
    private function readUserSession(Request $request){
        $auth_mode = $request->session()->get('auth_mode');
        $login_form_options = array();
        switch ($auth_mode) {
          case 'resource_creation':
              $login_form_options['redirect'] = '/resource/create';
            break;
        }
        return array($auth_mode, $login_form_options);
    }
}
