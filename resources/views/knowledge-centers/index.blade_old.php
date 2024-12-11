@extends('knowledge-center') 

@section('content')

    <div class="hidden">

        @foreach($resources as $resource)
            <article class="">
                <a href="/resource/{{ $resource->id }} }}">
                    <h3>{{ $resource->title }}</h3>
                    <p>{{ $resource->date_published }}</p>
                    <p>{{ join(",", $resource->publisher) }}</p>
                </a>
            </article>
        @endforeach

    </div>

    @include('search.search-layout', array("isKC" => true, "kc" => $kc ))

@stop
