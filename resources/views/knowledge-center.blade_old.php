<!doctype html>
<html class="no-js" lang="">
    <head>
        <title>{{ $title }}</title>

        @include('shared.meta')

        <link rel="stylesheet" href="{{asset('css/main.css')}}">
        <link rel="stylesheet" href="{{asset('css/main-b.css')}}">
    </head>
    <body data-modules="{{ $modules }}">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        @include("knowledge-centers.{$data['headerPath']}.header")

        <div class="container">
            @yield('content')
        </div>

        @include("knowledge-centers.{$data['footerPath']}.footer")

        @include('scripts')
    </body>
</html>
