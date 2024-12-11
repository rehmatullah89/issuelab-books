@extends('knowledge-center') 
@section('content')
    <div class="container">
      <h2>Resource Available for {{$author}}</h2>
      <div class="list-group">
          @foreach($resources as $res)
            {{'Results Found:'.count($res)}}
          @endforeach
      </div>
    </div>
@stop
