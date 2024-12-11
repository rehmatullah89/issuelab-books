@extends('app')

@section('content')
    {!! link_to_action('UserController@index', '&#8592; Back to Users') !!}

    <h1>New User</h1>

    {!! Former::open()
        ->controller('UserController@store')
        ->method('POST')
        ->rules($rules)
    !!}
        @include( 'users.form', ['submitText' => 'Add User'])
    {!! Former::close() !!}
@stop
