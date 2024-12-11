<section>
    <label data-toggle="collapse" class="collapsed" href="#{{ snake_case($name) }}_filter" aria-expanded="false" aria-controls="{{ $name }}_filter">
        {{ $customLabel }}
        <span class="vue-loading">{{ <?php echo e($name)?>Count }}</span>
        <span class="accordion-caret"></span>
    </label>

    <div class="panel-collapse collapse @if($isExpanded) in @endif" id="{{ snake_case($name) }}_filter" role="tabpanel">
        <div class="form-group">
            {!! Former::checkboxes($name, '')
                ->inline()
                ->checkboxes(array_slice($data, 0,5))
            !!}
            <button type="button" class="btn btn-default" v-on="click: show.{{ $name }} = true">{{ trans('search.more') }}</button>
        </div>
    </div>
</section>
