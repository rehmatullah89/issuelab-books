@extends('app')

@section('content')
    <h1>{{ $author->fullname }}</h1>

    @if($author->coauthors->count())
        <h2>{{ trans('author.coauthors') }}</h2>
        <section class="co-authors">
            <ul class="list-group">
                @foreach($author->coauthors as $coauthor)
                    @include('shared.author', ['name' => $coauthor->fullname, 'resources' => $coauthor->resources])
                @endforeach
            </ul>
        </section>
    @endif

    @if($author->resources->count())
        <h2>{{ trans('author.titles') }}</h2>
        <section class="author-resources">
            <ul class="list-group">
                @foreach($author->resources as $resource)
                    @include('shared.resource')
                @endforeach
            </ul>
        </section>
    @endif

@stop
