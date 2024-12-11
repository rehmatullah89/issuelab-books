@extends('knowledge-center')

@section('ogtags')
    @include('shared.og_tags', ['title' => 'Issuelab resource', 'type' => 'article', 'image' => $resource->cover_photo])
@stop

@section('content')
    @include('resources.resource')
@stop