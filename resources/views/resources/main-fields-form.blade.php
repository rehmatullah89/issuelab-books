{!! Former::text('title') !!}

<div class="form-group{{ $errors->has('pub_date_year') || $errors->has('pub_date_month') || $errors->has('pub_date_day') ? ' has-error' : '' }}">
    {!! Former::label('Publication Date')->addClass('control-label col-lg-2 col-sm-4') !!}

    <div class="col-lg-10 col-sm-8">
        <div class="row">
            <div class="col-sm-4">
                {!! Former::select('pub_date_year')
                    ->options(['' => 'Year *'] + array_combine(range(date('Y'), 1900, -1), range(date('Y'), 1900, -1)), null)
                    ->addClass('col-sm-4')
                    ->raw()
                !!}
                {!! $errors->first('pub_date_year', '<span class="help-block">:message</span>') !!}
            </div>
            <div class="col-sm-4">
                {!! Former::select('pub_date_month')
                    ->options(array_build(
                        ['Month *' => ''] + range(1,12),
                        function ($key, $value) {
                            // Set labels for month values
                            if ($value) {
                                $key = Carbon\Carbon::createFromDate(null, $value, null)->format('M') . ' (' . $value . ')';
                                $value = str_pad($value, 2, '0', STR_PAD_LEFT);
                            }
                            return [$value, $key];
                        }
                    ), null)
                    ->addClass('col-sm-4')
                    ->raw()
                !!}
                {!! $errors->first('pub_date_month', '<span class="help-block">:message</span>') !!}
            </div>
            <div class="col-sm-4">
                {!! Former::select('pub_date_day')
                    ->options(array_build(
                        ['Day' => ''] + range(1, 31),
                        function ($key, $value) {
                            if ($value) {
                                $key = $value;
                                $value = str_pad($value, 2, '0', STR_PAD_LEFT);
                            }
                            return [$value, $key];
                        }
                    ), null)
                    ->addClass('col-sm-4')
                    ->raw()
                !!}
                {!! $errors->first('pub_date_day', '<span class="help-block">:message</span>') !!}
            </div>
        </div>
    </div>
</div>

{!! Former::textarea('description') !!}

{!! Former::repeater('organizations', $resource->organizations, ['label' => 'Publishing Organization(s)', 'required' => true, 'input_name' => 'organization']) !!}
