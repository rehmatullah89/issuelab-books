@extends('app')

@section('content')
    @if($resources)
        <ul class="list-unstyled">
        @foreach($resources as $resource)
            <li>
                <a href="{{ action('ResourceController@show', $resource->identifier) }}">{{ $resource->title }}</a>
            </li>
        @endforeach
        </ul>
    @endif
@stop
