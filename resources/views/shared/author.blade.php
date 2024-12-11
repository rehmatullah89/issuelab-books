<a href="{{ action('AuthorController@show', $author->identifier) }}">
    <h3>{{ $name }}</h3>
    <div class="row">
        @foreach($resources as $resource)
            <div class="col-md-6">
                @include('shared.resource', ['description' => false])
            </div>
        @endforeach
    </div>
</a>
