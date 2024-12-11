<div class="modal fade delete-modal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="model-title" id="deleteModalLabel">Are you sure?</h4>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer">
                {!! Form::open(['method' => 'DELETE', ]) !!}
                    {!! Form::button('Cancel', ['class' => 'btn btn-default', 'data-dismiss' => 'modal']) !!}
                    {!! Form::button('Delete', ['class' => 'btn btn-danger', 'type' => 'submit']) !!}
                {!! Form::close() !!}
            </div>
        </div>
    </div>
</div>
