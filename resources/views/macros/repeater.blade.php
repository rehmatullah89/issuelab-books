<div class="repeater form-group{{ $errors->has($name) ? ' has-error' : '' }}">
    @if($options['label'] != "")
        {!! Former::label($options['label'])->addClass('control-label col-lg-2 col-sm-4') !!}
    @endif
    <div class="@if($options['label'] == "") col-lg-12 @else col-lg-10 @endif col-sm-8 col-lg-offset-2 col-sm-offset-4 col-offset-after-first">
    <div class="list-group" data-repeater-list="{{ $name }}">
            @if(isset($data) && sizeof($data)>0)
                @foreach($data as $item)
                    <div class="list-group-item" data-repeater-item>
                        {!! Former::text('name', '', $item[$options['dbFieldName']])->addClass('typeahead')->dataLocal($options['data_local'])->required()->raw() !!}
                        @if($options['layout'] == 'circular_buttons')
                            <button type="button" data-repeater-delete="data-repeater-delete" class="btn-default btn">
                                    <i class="fa fa-times"></i> 
                            </button>
                        @else
                            {!! Former::default_button()->icon('remove')->dataRepeaterDelete('data-repeater-delete') !!}
                        @endif
                        @if($options['include_contact'])
                          {!! Former::checkboxes('')->label('')->checkboxes(['Contact' => 'contact'])->check(['contact' => $item['contact']])->removeClass('form-control')->raw() !!}
                        @endif
                    </div>
                @endforeach
            @else
                <div class="list-group-item" data-repeater-item>
                    {!! Former::text('name', '')->addClass('typeahead')->dataLocal($options['data_local'])->placeholder($options['placeholder'])->required()->raw() !!}
                    @if($options['layout'] == 'circular_buttons')
                        <button type="button" data-repeater-delete="data-repeater-delete" class="btn-default btn">
                                <i class="fa fa-times"></i> 
                        </button>
                    @else
                        {!! Former::default_button()->icon('remove')->dataRepeaterDelete('data-repeater-delete') !!}
                    @endif
                    @if($options['include_contact'])
                      {!! Former::checkboxes('')->label('')->checkboxes(['Contact' => 'contact'])->removeClass('form-control')->raw() !!}
                    @endif
                </div>
            @endif
        </div>
        {!! $errors->first($name, '<span class="help-block">:message</span>') !!}
    </div>
    @if($options['layout'] == 'circular_buttons')
        <div class="col-lg-10 col-sm-8 @if($options['label'] == "") col-lg-offset-0 @else col-lg-offset-2 @endif  col-sm-offset-4">
            <button raw="true" data-repeater-create="data-repeater-create" class="btn btn-default btn-circle btn-add-more" type="button">
                <i class="fa fa-plus"></i>
            </button> <span style="margin-top: 5px">{{ trans('resource.labels.repeater_add_more') }}</span>
        </div>
    @else
        <div class="col-lg-10 col-sm-8 col-lg-offset-2 col-sm-offset-4">
            {!! Former::button('Add '.title_case(str_replace(['_', '-'], ' ' , str_singular($name))))->dataRepeaterCreate('data-repeater-create')->raw() !!}
        </div>
    @endif
</div>

