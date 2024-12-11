@extends('app')
@section('content')
@include('shared.message')
@if($resources)
<div class="container">
    <h2>Resources</h2>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Cover Thumbnail</th>
                    <th>Title</th>
                    <th>File(s)</th>
                    <th>Added By</th>
                    <th>Publisher</th>
                    @if(Auth::user() && (Auth::user()->isSuperadmin() || AuthHelper::isKcAdmin()))
                    <th>KC(s)</th>
                    @endif
                    @if(Auth::user() && Auth::user()->isSuperadmin())
                    <th>Duplicate Found?</th>
                    @endif
                    <th>Link</th>
                    <th>Date Added</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach($resources as $resource)
                <tr>
                    <th>
                        @if($resource->cover_graphic_type==3)
                        <img src="{{asset('resources/default_cover.png')}}" width="20" height="20">
                        @elseif($resource->cover_graphic != "")
                        <img src="{{asset('resources/'.$resource->research_id.'/'.$resource->cover_graphic)}}" width="20" height="20">
                        @else
                        {{"---"}}
                        @endif
                    </th>
                    <td>{{ $resource->title }}</td>
                    <td>
                        @if($resource->filename!="")
                        <a title="{{$resource->filename}}" target="_blank" href="{{ asset('resources/'.$resource->research_id.'/'.$resource->filename) }}">View file</a>
                        @else
                        <p>No file uploaded</p>
                        @endif
                    </td>
                    <td>
                        <?php $user = \App\User::where('id', '=', $resource->creator_id)->first(); ?>
                        @if($resource->creator_id == '' )
                        {{'NOT FOUND'}}
                        @else
                        {!! link_to_action('UserController@edit', $user->full_name, $user->identifier, ['target' => '_blank']) !!}</td>
                        @endif
                    <td>
                        @foreach($resource->publishers as $publisher)
                        <p>{{ $publisher->organization }}</p>
                        @endforeach
                    </td>
                    @if(Auth::user() && (Auth::user()->isSuperadmin() || AuthHelper::isKcAdmin()))
                    <td>
                        <?php $resourceKcs = \App\Resource::resourceKnowledgeCenters($resource->research_id); ?>
                        @if(!is_null($resourceKcs))
                        @foreach($resourceKcs AS $resourceKc)
                        <p>{{$resourceKc->text}}</p>
                        @endforeach
                        @else
                        {{" --- "}}
                        @endif
                    </td>
                    @endif
                    @if(Auth::user() && Auth::user()->isSuperadmin())
                    <td>{{ $resource->duplicated_detected == 0?'No':'Yes' }}</td>
                    @endif
                    <td><a href="{{ action('ResourceController@show', $resource->identifier) }}" target="_blank">{{ $resource->title }}</a></td>
                    <td>{{ date('Y-m-d',strtotime($resource->date_added)) }}</td>
                    <td>{{ $resource->publish_status }}</td>
                    <td><div class="btn btn-group-xs" style="display: inline-table;">
                            @if($resource->publish_status == 'PENDING')
                            @if(Auth::user()->isSuperadmin())
                            <a href="{{URL::route('resource/approveResource', array('id' => $resource->research_id, 'sendEmail' => '1'))}}" class="btn btn-primary btn-xs" title="Approve & Send Email">
<!--                                <i class="fa fa-envelope"></i>-->
                                <img src="{{asset('img/lettericon.png')}}" width='16px' height='16px'>
                            </a>
                            <a href="{{URL::route('resource/approveResource', array('id' => $resource->research_id, 'sendEmail' => '0'))}}" class="btn btn-success btn-xs" title="Approve Only">
                                <i class="fa fa-check"></i>
                            </a>
                            <a href="{{URL::route('resource/rejectResource', array('id' => $resource->research_id))}}" class="btn btn-danger btn-xs" title="Reject Resource">
                               <i class="fa fa-ban"></i>
                            </a>
                            <a href="{{ URL::route('resource/draft', ['status'=>'edit', 'id'=>$resource->research_id])}}" class="btn btn-primary btn-xs" title="Edit Resource">
                               <i class="fa fa-pencil"></i>
                            </a>
                            @endif
                            @elseif($resource->publish_status == 'DRAFT') 
                            <a href="{{ URL::route('resource/draft', ['publish_status'=>'draft', 'id'=>$resource->research_id])}}" class="btn btn-primary btn-xs" title="Edit Draft">
                               <i class="fa fa-folder-open-o"></i>
                            </a>
                            @elseif($resource->publish_status == 'APPPROVED' && Auth::user()->isSuperadmin()))
                                {!! HTML::linkAction('ResourceController@create', 'Edit', array('publish_status'=>'edit', 'id'=>$resource->research_id), array('class' => 'btn btn-primary')) !!}  
                            @endif
                            @if($resource->publish_status != 'DRAFT' && ( AuthHelper::isKcAdmin() || Auth::user()->isSuperadmin()))
                                @if(($resource->publish_status == 'APPROVED' || $resource->publish_status == 'PUBLISHED') && Auth::user()->isSuperadmin())
                                <a href="{{URL::route('resource/approveResource', array('id' => $resource->research_id, 'sendEmail' => '1'))}}" class="btn btn-success btn-xs" title="Re-Send Resource Approval Email">
                                    <i class="fa fa-paper-plane"></i>
                                </a>
                                <a href="{{ URL::route('resource/draft', ['status'=>'edit', 'id'=>$resource->research_id])}}" class="btn btn-primary btn-xs" title="Edit Resource">
                                    <i class="fa fa-pencil"></i>
                                </a>
                                @endif
                                @if(sizeof($resourceKcs)>0)
                                <button type="button" class="btn btn-warning btn-xs" data-toggle="modal" data-target="#myModal4" onclick="getEditResourceOptions('{{$resource->research_id}}', '{{$resourceKcs}}')" title="Edit Resource Metadata"><i class="fa fa-edit fa-lg"></i></button>
                                @endif
                              @endif
                        </div>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>
<?php echo $resources->render(); ?>
@endif
@include('search.edit_resource')
@stop
