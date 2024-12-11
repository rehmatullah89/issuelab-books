<div class="repeater form-group{{ $errors->has($name) ? ' has-error' : '' }}">
    {!! Former::label($options['label'])->addClass('control-label col-lg-2 col-sm-4') !!}
    <div class="col-lg-10 col-sm-8 col-lg-offset-2 col-sm-offset-4 col-offset-after-first">
        <div class="list-group" data-repeater-list="{{ $name }}">
            @if($data && count($data) > 0)
              @foreach($data as $item)
                <div class="list-group-item" data-repeater-item>
                  {!! Former::select($options['input_name'], false)->options($select_options, $item)->dataAllowClear('true')->vSelect('author')->class('select2 form-control')->dataPlaceholder('Select a ' . str_singular($name)) !!}
                  {!! Former::default_button()->icon('remove')->dataRepeaterDelete('data-repeater-delete') !!}
                </div>
              @endforeach
            @else
              <div class="list-group-item" data-repeater-item>
                {!! Former::select($options['input_name'], false)->options($select_options)->dataAllowClear('true')->vSelect('author')->class('select2 form-control')->dataPlaceholder('Select a ' . str_singular($name)) !!}
                {!! Former::default_button()->icon('remove')->dataRepeaterDelete('data-repeater-delete') !!}
              </div>
            @endif
        </div>
        {!! $errors->first($name, '<span class="help-block">:message</span>') !!}
    </div>
    <div class="col-lg-10 col-sm-8 col-lg-offset-2 col-sm-offset-4">
        {!! Former::button('Add '.title_case(str_replace(['_', '-'], ' ' , str_singular($name))))->dataRepeaterCreate('data-repeater-create')->raw() !!}
    </div>
</div>
