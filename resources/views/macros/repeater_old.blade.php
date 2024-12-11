<div class="repeater form-group{{ $errors->has($name) ? ' has-error' : '' }}">
    {!! Former::label($options['label'])->addClass('control-label col-lg-2 col-sm-4') !!}
    <div class="col-lg-10 col-sm-8 col-lg-offset-2 col-sm-offset-4 col-offset-after-first">
        <div class="list-group" data-repeater-list="{{ $name }}">
            @if($data && count($data) > 0)
                @foreach($data as $item)
                    <div class="list-group-item" data-repeater-item>
                        {!! Former::text($options['input_name'], '', $item['name'])->addClass('typeahead')->dataLocal($name)->raw() !!}
                        {!! Former::default_button()->icon('remove')->dataRepeaterDelete('data-repeater-delete') !!}
                        @if($options['include_contact'])
                          {!! Former::checkboxes('')->label('')->checkboxes(['Contact' => 'contact'])->check(['contact' => $item['contact']])->removeClass('form-control')->raw() !!}
                        @endif
                    </div>
                @endforeach
            @else
                <div class="list-group-item" data-repeater-item>
                    {!! Former::text($options['input_name'], '')->addClass('typeahead')->dataLocal($name)->raw() !!}
                    {!! Former::default_button()->icon('remove')->dataRepeaterDelete('data-repeater-delete') !!}
                    @if($options['include_contact'])
                      {!! Former::checkboxes('')->label('')->checkboxes(['Contact' => 'contact'])->removeClass('form-control')->raw() !!}
                    @endif
                </div>
            @endif
        </div>
        {!! $errors->first($name, '<span class="help-block">:message</span>') !!}
    </div>
    <div class="col-lg-10 col-sm-8 col-lg-offset-2 col-sm-offset-4">
        {!! Former::button('Add '.title_case(str_replace(['_', '-'], ' ' , str_singular($name))))->dataRepeaterCreate('data-repeater-create')->raw() !!}
    </div>
</div>
