@extends('app')

@section('content')
    <h1>{{ trans_choice('names.authors', null) }}</h1>
    <h2>{{ ucwords($letter) }}</h2>
    @if($authors->count())
        <ul class="list-group">
            @foreach($authors as $author)
                <li class="list-group-item">
                    <a href="{{ action('AuthorController@show', $author->identifier) }}">
                        {{ $author->last }}, {{ $author->first }}
                    </a>
                </li>
            @endforeach
        </ul>
    @endif

@stop
