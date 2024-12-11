<div class="form-inline {{ $class }}" data-key="{{ $class }}">
    {!! Former::select("{$name}_year")
        ->options(array_combine(range(date('Y'), $earliestPubdate->year, -1), range(date('Y'), $earliestPubdate->year, -1)), null)
        ->addClass("pubdate-filter year")
        ->vModel(str_replace('_', '.', $name) . '.year')
        ->style('width:32%;')
        ->raw()
    !!}
    {!! Former::select("{$name}_month")
        ->options(array_build(
            range(1,12),
            function ($key, $value) {
                $key = Carbon\Carbon::createFromDate(2000, $value, 1)->format('M');
                $value = str_pad($value, 2, '0', STR_PAD_LEFT);
                return [$value, $key];
            }
        ), null)
        ->addClass("pubdate-filter month")
        ->vModel(str_replace('_', '.', $name) . '.month')
        ->style('width:32%;')
        ->raw()
    !!}
    {!! Former::select("{$name}_day")
        ->options(array_build(
            range(1, 31),
            function ($key, $value) {
                $key = $value;
                $value = str_pad($value, 2, '0', STR_PAD_LEFT);
                return [$value, $key];
            }
        ), null)
        ->addClass("pubdate-filter day")
        ->vModel(str_replace('_', '.', $name) . '.day')
        ->style('width:32%;')
        ->raw()
    !!}
</div>
