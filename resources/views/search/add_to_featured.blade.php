  <div class="modal fade" id="myModal1" role="dialog">
    <div class="modal-dialog">
        
    {!! Former::open()->controller('CategoryController@addToFeaturedResources')->method('POST')->id('feature_resc_form') !!}
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add Resource to Featured Listing</h4>
        </div>
        <div class="modal-body">
          
          <div class="form-group">
            <label for="create_kc_select" class="col-sm-4 control-label">Select KC</label>
            <div class="col-sm-8">
              <select class="form-control" id="create_kc_select1" name="kc_select_opt"></select>
            </div>
          </div>
          
          <div class="form-group">
            <label for="create_feature_check" class="col-sm-4 control-label">Mark as Featured</label>
            <div class="col-sm-2">
              <input type="checkbox" id="create_feature_check" name="create_feature_check" class="form-control"></select>
            </div>
          </div>
            
        </div>
        <div class="clearfix"></div>  
        <div class="modal-footer">
            <input type="hidden" name="current_resource_id" id="current_resource_id1">
            <button type="button" class="btn btn-primary" id="save_resource_to_featured_listing">Save</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      {!! Former::close() !!}
      
    </div>
  </div>
