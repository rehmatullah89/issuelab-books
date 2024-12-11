  <div class="modal fade" id="myModal2" role="dialog">
    <div class="modal-dialog">
        
    {!! Former::open()->controller('CategoryController@addToFeaturedResources')->method('POST')->id('kc_resc_form') !!}
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add Resource to My Kc</h4>
        </div>
        <div class="modal-body">
          
          <div class="form-group">
            <label for="create_kc_select" class="col-sm-4 control-label">Select KC</label>
            <div class="col-sm-6">
              <select class="form-control" id="create_kc_select2" name="kc_select_opt"></select>
            </div>
          </div>
          
        </div>
        <div class="clearfix"></div>  
        <div class="modal-footer">
            <input type="hidden" name="current_resource_id" id="current_resource_id2">
            <button type="button" class="btn btn-primary" id="save_resource_to_my_kc">Save</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      {!! Former::close() !!}
      
    </div>
  </div>
