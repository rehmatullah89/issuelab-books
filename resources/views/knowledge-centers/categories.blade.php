@extends('knowledge-center') 

@section('content')
    @include('knowledge-centers.category-layout', array("isKC" => true, 'resources' => $resources)) 
@stop

<script>
        var kc_per_page = 10;
</script>