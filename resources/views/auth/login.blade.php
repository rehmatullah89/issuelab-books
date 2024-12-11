@extends('app')

@section('content')

  @if($auth_mode)
    @include("auth.{$auth_mode}")
  @endif

  {!! Former::open()->controller('Auth\AuthController@postLogin', $login_form_options)->method('POST') !!}
    {!! Former::email('email') !!}
    {!! Former::password('password') !!}
    {!! Former::checkbox_single('remember', 'Remember me') !!}
    {!! Former::actions(
        Former::submit('Log In')->addClass('btn-primary'),
        link_to_action('Auth\PasswordController@getEmail', 'Forgot Password')
    ) !!}
  {!! Former::close() !!}
@stop
