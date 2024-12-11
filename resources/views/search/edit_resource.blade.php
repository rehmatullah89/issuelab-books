<head>
    <style>
        .bootstrap-switch-container {
            height:31px;
        }
    </style>
</head>
<div class="modal fade" id="myModal4" role="dialog">
    <div class="modal-dialog">

        {!! Former::open()->controller('ResourceController@editKcResources')->method('POST')->id('edit_resc_form') !!}
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Edit Kc Resource</h4>
            </div>
            <div class="modal-body">

                <div class="form-group">
                    <label for="create_kc_select" class="col-xs-4 control-label">Select KC</label>
                    <div class="col-sm-8">
                        <select class="form-control col-xs-4" id="create_kc_select4" name="kc_select_opt" onchange="getGroups(this.value)"></select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="create_cat_goup_select" class="col-xs-4 control-label">Select Category Group</label>
                    <div class="col-sm-8">
                        <select id="create_cat_goup_select4" name="cat_goup_select_opt" class="form-control col-xs-4" onchange="getCategories(this.value)"></select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="create_category_select" class="col-xs-4 control-label">Select Category</label>
                    <div class="col-sm-8">
                        <select id="create_category_select4" name="category_select_opt" class="form-control col-xs-4"></select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="description" class="col-xs-4 control-label">Custom Abstract</label>
                    <div class="col-sm-8">
                        <textarea class="form-control col-xs-4" rows="4" id="description" name="description"></textarea>
                    </div>
                </div>

                <div class="form-group">
                    <label for="tweetable" class="col-xs-4 control-label">Tweetable?</label>
                    <div class="col-sm-2 checkbox">
                        <input type="checkbox" id="tweetable" name="tweetable" class="form-control col-xs-4" >
                    </div>
                </div>

                <div class="form-group">
                    <label for="switch_publish" class="col-xs-4 control-label">Published?</label>
                    <div class="col-sm-2 checkbox">
                        <input type="checkbox" id="switch_publish" name="switch_publish" class="form-control col-xs-4" data-toggle="toggle">
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="switch_publish" class="col-xs-4 control-label">Featured?</label>
                    <div class="col-sm-2 checkbox">
                        <input type="checkbox" id="switch_featured" name="switch_featured" class="form-control col-xs-4" data-toggle="toggle">
                    </div>
                </div>

            </div>
            <div class="clearfix"></div>  
            <div class="modal-footer">
                <input type="hidden" name="current_resource_id" id="current_resource_id4">
                <button type="button" class="btn btn-primary" id="edit_resource_for_kc">Save</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
        {!! Former::close() !!}

    </div>
</div>