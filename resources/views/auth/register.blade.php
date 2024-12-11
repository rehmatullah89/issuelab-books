@extends('app')

@section('content')

    @if($auth_mode)
      @include("auth.{$auth_mode}")
    @endif

    {!! Former::open()->controller('Auth\AuthController@postRegister', $login_form_options)->method('POST')->rules($rules) !!}
        {!! Former::input('full_name') !!}
        {!! Former::email('email') !!}
        {!! Former::password('password') !!}
        {!! Former::password('password_confirmation') !!}
        {!! Former::text('employer') !!}
        {!! Former::text('title') !!}
        {!! Former::actions(Former::submit('Register')->addClass('btn-primary')->disabled('')) !!}
        {!! Honeypot::generate('fake_name', 'time') !!}
    {!! Former::close() !!}
@stop
