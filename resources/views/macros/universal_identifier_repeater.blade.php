<div class="repeater form-group{{ $errors->has($name) ? ' has-error' : '' }}">
    {!! Former::label($options['label'])->addClass('control-label col-lg-2 col-sm-4') !!}
    <div class="col-lg-10 col-sm-8 col-lg-offset-2 col-sm-offset-4 col-offset-after-first">
        <div class="list-group" data-repeater-list="{{ $name }}">
            @if(isset($data) && sizeof($data)>0)
                @foreach($data as $item)
                    <div class="list-group-item" data-repeater-item>
                        {!! Former::select('type', 'TYPE')->options($isbnsTypes, $item['type']) !!}
                        {!! Former::text('universal_identifier', 'VALUE', $item['universal_identifier']) !!}
                        <button class="btn-default btn" data-repeater-delete="data-repeater-delete" type="button">
                                <i class="fa fa-times"></i> 
                        </button>
                    </div>
                @endforeach
            @else
            <div class="list-group-item" data-repeater-item>
                {!! Former::select('type', 'TYPE')->options($isbnsTypes)->required(); !!}
                {!! Former::text('universal_identifier', 'VALUE')->required(); !!}
                <button class="btn-default btn" data-repeater-delete="data-repeater-delete" type="button">
                        <i class="fa fa-times"></i> 
                </button>
            </div>
            @endif
        </div>
        {!! $errors->first($name, '<span class="help-block">:message</span>') !!}
    </div>
    <div class="col-lg-10 col-sm-8  col-lg-offset-2   col-sm-offset-4">
        <button type="button" class="btn btn-default btn-circle btn-add-more" data-repeater-create="data-repeater-create" raw="true">
            <i class="fa fa-plus"></i>
        </button> <span style="margin-top: 5px">Add More</span>
    </div>
</div>
