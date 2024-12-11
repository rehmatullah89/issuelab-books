@extends('app')

@section('content')
    <h1>New Resource</h1>

    {!! Former::open_for_files()
        ->controller('ResourceController@store')
        ->method('POST')
        ->rules($rules)
    !!}
        @include( 'resources.main-fields-form')
        @include( 'resources.resource-upload-form')
        @if(Auth::user()->isSuperAdmin())
          @include( 'resources.super-admin-fields-form')
        @endif

        {!! Former::actions(
            Former::submit('Submit Resource')->addClass('btn-primary')
        ) !!}
    {!! Former::close() !!}
@stop
