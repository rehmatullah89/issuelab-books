<div class="modal fade" id="editKcResource" role="dialog">
    <div class="modal-dialog">

        {!! Former::open()->controller('ResourceController@editResources')->method('POST')->id('kc_resource_edit') !!}
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Edit Resource Metadata</h4>
            </div>
            <div class="modal-body">

                <div class="form-group required">
                    <label for="abstract" class="control-label col-lg-2 col-sm-4">ABSTRACT</label>
                    <div class="col-lg-10 col-sm-8">
                        <textarea required="true" class="form-control" id="abstract" name="abstract"></textarea>
                    </div>
                </div>

            </div>
            <div class="clearfix"></div>  
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="edit_kc_resource_metadata">Save</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
        {!! Former::close() !!}

    </div>
</div>
