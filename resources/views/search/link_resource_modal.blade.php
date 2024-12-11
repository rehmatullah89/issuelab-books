  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
        
    {!! Former::open()->controller('CategoryController@storeCategoryResources')->method('POST')->id('cat_resc_form') !!}
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add This Resource to Category</h4>
        </div>
        <div class="modal-body">
          
          <div class="form-group">
            <label for="create_kc_select" class="col-sm-4 control-label">Select KC</label>
            <div class="col-sm-8">
              <select class="form-control" id="create_kc_select" name="kc_select_opt" onchange="getGroups(this.value)"></select>
            </div>
          </div>
          
          <div class="form-group">
            <label for="create_cat_goup_select" class="col-sm-4 control-label">Select Category Group</label>
            <div class="col-sm-8">
              <select id="create_cat_goup_select" name="cat_goup_select_opt" class="form-control" onchange="getCategories(this.value)"></select>
            </div>
          </div>
            
          <div class="form-group">
            <label for="create_category_select" class="col-sm-4 control-label">Select Category</label>
            <div class="col-sm-8">
              <select id="create_category_select" name="category_select_opt" class="form-control"></select>
            </div>
          </div>
            
        </div>
        <div class="clearfix"></div>  
        <div class="modal-footer">
            <input type="hidden" name="current_resource_id" id="current_resource_id">
            <button type="button" class="btn btn-primary" id="save_resource_for_category">Save</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      {!! Former::close() !!}
      
    </div>
  </div>
