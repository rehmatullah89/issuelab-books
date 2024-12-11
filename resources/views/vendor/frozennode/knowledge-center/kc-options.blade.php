<link href="{{asset('packages/frozennode/administrator/css/custom/bootstrap.css')}}" media="all" type="text/css" rel="stylesheet">
<link href="{{asset('css/bootstrap-switch.min.css')}}" media="all" type="text/css" rel="stylesheet">

<script src="{{asset('packages/frozennode/administrator/js/custom/jquery.js')}}"></script>
<script src="{{asset('packages/frozennode/administrator/js/custom/bootstrap.min.js')}}"></script>
<script src="{{asset('js/bootstrap-switch.min.js')}}"></script>
<script src="{{asset('packages/frozennode/administrator/js/custom/knowledge-center.js')}}"></script>
<div class="modal fade" id="kcOptions" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <form name="frm_update_kc_options" id="frm_update_kc_options" method="POST" action="{{URL::route('update/kc-options')}}">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Manage KC Options</h4>
                </div>

                <div class="modal-body">
                    <ul class="nav nav-tabs" id="tabContent">
                        <li class="active"><a href="#searchData" data-toggle="tab">Search Options</a></li>
                        <li><a href="#resourceData" data-toggle="tab">Resource Options</a></li>
                        <li><a href="#kcDisplayData" data-toggle="tab">KC Display Options</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="searchData">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Filter</th>
                                            <th>Show in Search</th>
                                            <th>Expanded</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php $resourceMetadata = \App\ResourceMetadata::all()->toArray(); ?>
                                        @if(!is_null($resourceMetadata))
                                        @foreach($resourceMetadata as $mData)
                                           @if($mData['is_search_option'] == 1) 
                                            <tr id="tr_{{$mData['id']}}">
                                                <td>
                                                    {{$mData['value']}}
                                                    <input type="hidden" id="resource_metadata_id_{{$mData['id']}}" value="{{$mData['id']}}" name="search_metadata_ids[{{$mData['id']}}]">
                                                </td>
                                                <td><input type="checkbox" id="show_in_search_{{$mData['id']}}" data-size="mini" data-on-color="success" name="show_in_search_{{$mData['id']}}" class="cbx-switch" checked></td>
                                                 <td><input type="checkbox" id="is_expanded_{{$mData['id']}}" data-size="mini" data-on-color="success" name="is_expanded_{{$mData['id']}}" class="cbx-switch" checked></td>
                                            </tr>
                                           @endif
                                        @endforeach
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane" id="resourceData">
                             <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Filter</th>
                                            <th>Show in Resource</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php $resourceMetadata = \App\ResourceMetadata::all()->toArray(); ?>
                                        @if(!is_null($resourceMetadata))
                                        @foreach($resourceMetadata as $mData)
                                            @if($mData['is_resource_option'] == 1)
                                            <tr id="tr_{{$mData['id']}}">
                                                <td>
                                                    {{$mData['value']}}
                                                    <input type="hidden" id="resource_metadata_id_{{$mData['id']}}" value="{{$mData['id']}}" name="resource_metadata_ids[{{$mData['id']}}]">
                                                </td>
                                                 <td><input type="checkbox" id="show_in_resources_{{$mData['id']}}" data-size="mini" data-on-color="success" name="show_in_resources_{{$mData['id']}}" class="cbx-switch" checked></td>
                                            </tr>
                                            @endif
                                            @endforeach
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div> 
                         <div class="tab-pane" id="kcDisplayData">
                             <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Show in Kc</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php $resourceMetadata = \App\ResourceMetadata::all()->toArray(); ?>
                                        @if(!is_null($resourceMetadata))
                                        @foreach($resourceMetadata as $mData)
                                            @if($mData['is_kc_option'] == 1)
                                            <tr id="tr_{{$mData['id']}}">
                                                <td>
                                                    {{$mData['value']}}
                                                    <input type="hidden" id="resource_metadata_id_{{$mData['id']}}" value="{{$mData['id']}}" name="kc_opt_metadata_ids[{{$mData['id']}}]">
                                                </td>
                                                 <td><input type="checkbox" id="show_in_kcopt_{{$mData['id']}}" data-size="mini" data-on-color="success" name="show_in_kcopt_{{$mData['id']}}" class="cbx-switch" checked></td>
                                            </tr>
                                            @endif
                                            @endforeach
                                        @endif
                                    </tbody>
                                </table>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
                    <input type="hidden" id="kcid" name="kcid" value="0" />
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </form>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>