@extends('app')

@section('content')
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            <h2>Create a new password</h2>
            {!! Former::open_vertical()->controller('Auth\PasswordController@postReset')->method('POST') !!}
                {!! Former::hidden('token', $token) !!}
                {!! Former::email('email') !!}
                {!! Former::password('password') !!}
                {!! Former::password('password_confirmation') !!}
                {!! Former::actions(Former::submit('Reset Password')->addClass('btn-primary')) !!}
            {!! Former::close() !!}
        </div>
    </div>
@stop
