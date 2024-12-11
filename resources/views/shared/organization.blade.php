<h2>{{ $organization->organization }}</h2>
@if($organization->url)
    <p>
        <a href="{{ $organization->url }}">{{ $organization->url }}</a>
    </p>
@endif
