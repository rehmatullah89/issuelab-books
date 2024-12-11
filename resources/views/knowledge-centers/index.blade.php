@extends('knowledge-center') 

@section('content')
    @include('search.search-layout', array("isKC" => true, "kc" => $kc ,'resources' => $resources, "kcOptions" => $kcOptions)) 
@stop

<script>
        var kc_per_page = {{$kc->results_per_page}};
</script>