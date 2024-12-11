@extends('app') 
@section('content')
    <div class="container">
      <h2>Resource Available for {{$organization}}</h2>
      <div class="list-group">
            {{'Results Found:'.count($resources)}}
       @if($resources->count())
        <section class="author-resources">
            <ul class="list-group">
                @foreach($resources as $resource)
                    @include('shared.resource')
                @endforeach
            </ul>
        </section>
       @endif
      </div>
    </div>
@stop
