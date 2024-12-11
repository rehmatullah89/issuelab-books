@extends('app')

@section('content')
    <h1>Edit Resource</h1>

    {!! Former::open_for_files()
        ->controller('ResourceController@update', $resource->identifier)
        ->populate($resource)
        ->method('PATCH')
        ->rules($rules)
    !!}
        @include( 'resources.main-fields-form')
        @include( 'resources.resource-upload-form')
        {!! Former::actions(
            Former::submit('Update Resource')->addClass('btn-primary')
        ) !!}
    {!! Former::close() !!}
@stop
