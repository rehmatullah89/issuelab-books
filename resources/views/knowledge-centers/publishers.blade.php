@extends('knowledge-center') 
@section('content')
    <div class="container">
      <h2>Publishing Organizations</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Organization</th>
        <th>Mission statement</th>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      @foreach($organiztions as $org)  
      <tr>
        <td><a href="http://{{AppRequest::host()}}/organizations/publisher/{{$org->identifier}}" class="list-group-item" target = "_blank">{{$org->organization}}</a></td>
        <td>{{$org->mission_statement}}</td>
        <td>{{$org->city}}</td>
        <td>{{$org->state}}</td>
        <td>{{$org->country}}</td>
      </tr>
      @endforeach
     </tbody>
  </table>
      <?php echo $organiztions->render(); ?>
    </div>
@stop