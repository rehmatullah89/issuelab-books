@extends('app')
@section('content')
<?php //dd($resources);?>
@if($resources)
  <div class="container">
  <h2>Pending Resources</h2>
  <div class="table-responsive">          
  <table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Publisher</th>
        <th>Creator</th>
        <th>Duplicate Found?</th>
        <th>Link</th>
        <th>Date Added</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    @foreach($resources as $resource)
       <tr>
          <td>{{ $resource->title }}</td> 
          <td>
              @foreach($resource->publishers as $publisher)
                <p>{{ $publisher->organization }}</p>
              @endforeach
          </td>
          <td>{{ $resource->resourceCreator->user_id }}</td>
          <td>{{ $resource->title }}</td>
          <td><a href="{{ action('ResourceController@show', $resource->identifier) }}" target="_blank">{{ $resource->title }}</a></td>
          <td>{{ date('Y-m-d',strtotime($resource->date_added)) }}</td>
          <td><div class="btn btn-group-xs" style="display: inline-table;"><input class="btn btn-success" type="button" value="Approve"/><input class="btn btn-danger" type="button" value="Rejact"/></div></td>
       </tr>
    @endforeach
    </tbody>
  </table>
  </div>
</div>
        <?php echo $resources->render(); ?>
    @endif
@stop
