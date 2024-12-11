<modal show="<?php echo e("{{@ show.{$name}}}")?>">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on="click: show.{{ $name }} = false"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">{{ trans_choice('names.' . snake_case($name), 0) }}</h4>
    </div>
    <div class="modal-body">
        <div class="row">
        @for($i = 0, $perColumn = ceil(count($data) / 3); $i < 3; $i++)
            <div class="col-md-4">
                {!! Former::checkboxes($name, '')
                    ->inline()
                    ->checkboxes(array_slice($data, $i * $perColumn, $perColumn));
                !!}
            </div>
        @endfor
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" v-on="click: resetFilter('{{ $name }}')">{{ trans('search.reset') }}</button>
        <button type="button" class="btn btn-primary" v-on="click: submit">{{ trans('search.apply') }}</button>
    </div>
</modal>
