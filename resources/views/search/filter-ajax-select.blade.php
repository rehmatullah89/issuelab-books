<section>
    <label data-toggle="collapse" class="collapsed" href="#{{ snake_case($name) }}_filter" aria-expanded="false" aria-controls="{{ $name }}_filter">
        {{ $customLabel }}
        <span class="accordion-caret"></span>
    </label>

    <div class="panel-collapse collapse @if($isExpanded) in @endif" id="{{ snake_case($name) }}_filter" role="tabpanel">
        <div class="form-group">
        {!! Former::select($name, '')
            ->dataPlaceholder($placeholder)
            ->dataAllowClear('true')
            ->dataAjaxUrl($url)
            ->vSelect($name)
        !!}
        </div>
    </div>
</section>
