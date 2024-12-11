@extends('knowledge-center') 
@section('content')
    <div class="container">
      <h2>Authors</h2>
      <div class="list-group">
          @foreach($authors as $author)
              <a href="http://{{AppRequest::host()}}/authors/profile/{{$author->identifier}}" class="list-group-item" target = "_blank">
                  {{$author->fullname}}
              </a>
          @endforeach
      </div>
      <?php echo $authors->render(); ?>
    </div>
@stop
