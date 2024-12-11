@extends('app')

@section('content')
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3">
            @include('shared.message')
            <h2>Forgot your password?</h2>
            {!! Former::open_vertical()->controller('Auth\PasswordController@postEmail')->method('POST') !!}
                {!! Former::email('email')->help('Submit this form to receive an email with a link to reset your password') !!}
                {!! Former::actions(Former::submit()->addClass('btn-primary')) !!}
            {!! Former::close() !!}
        </div>
    </div>
@stop
