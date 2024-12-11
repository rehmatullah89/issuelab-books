@include("knowledge-centers.{$headerPath}.header")

    <link rel="stylesheet" href="{{asset('css/main.css')}}">
    <link rel="stylesheet" href="{{asset('css/main-b.css')}}">
    <link rel="stylesheet" href="{{ asset('knowledge-centers/' . $customCssPath) . '/css/custom.css' }}">
    <link rel="stylesheet" href="{{ asset('css/font-awesome-4.1.0/css/font-awesome.min.css') }}">
    @if(Request::is('/*'))
    <link href="{{asset('css/bootstrap-switch.min.css')}}" media="all" type="text/css" rel="stylesheet">
    @endif
    <div class="content">
    <div class="container">
        @yield('content')
    </div>
    </div>
    
@include('scripts')
@include("knowledge-centers.{$footerPath}.footer")
