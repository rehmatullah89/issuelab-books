@extends('app')

@section('content')
    <div class="row">
        {!! link_to_action('UserController@index', '&#8592; Back to Users') !!}

        @include('shared.message')

        {!! Former::inline_open()->controller('Auth\PasswordController@postEmail')->method('POST')->addClass('pull-right') !!}
            {!! Former::hidden('email', $user->email) !!}
            Send password reset link to user by email:&nbsp;
            {!! Former::default_submit('Reset Password') !!}
        {!! Former::close() !!}

        <div class="col-lg-10 col-sm-8 col-lg-offset-2 col-sm-offset-4">
            <h1>Edit: {{ $user->full_name }}</h1>
        </div>

        {!! Former::open()->controller('UserController@update', $user->identifier)->method('PATCH')->populate($user)->addClass('repeater')->rules($rules) !!}
            @include( 'users.form', ['submitText' => 'Update User'])
        {!! Former::close() !!}
    </div>
@stop
