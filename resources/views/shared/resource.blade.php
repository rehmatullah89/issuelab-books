<a href="{{ action('ResourceController@show', $resource->identifier) }}" title="{{ $resource->title }}"
    <li class="list-group-item row">
        <div class="col-md-2">
            {!! HTML::image($resource->cover_image, $alt = null, ['class' => 'img-responsive']) !!}
        </div>
        <div class="col-md-10">
            <p>{{ $resource->pub_date->format('M j, Y') }}</p>
            <h3>{{ $resource->title }}</h3>
            <p>{{ $resource->publishers->implode('organization', ', ') }}</p>
        </div>
    </li>
</a>
