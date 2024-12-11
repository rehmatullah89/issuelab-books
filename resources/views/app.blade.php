<!doctype html>
<html class="no-js" lang="">
    <head>
        <title>IssueLab</title>

        @include('shared.meta')
        @section('ogtags')@show

        <link rel="stylesheet" href="{{asset('css/main.css')}}">
        <link rel="stylesheet" href="{{asset('css/main-b.css')}}">
        <link rel="stylesheet" href="{{ asset('css/font-awesome-4.1.0/css/font-awesome.min.css') }}">
        
        @if(Request::path() == 'resource/create' || Request::is('resource/create/*'))
        <link rel="stylesheet" href="{{asset('css/wizard/prettify.css')}}">
        <link rel="stylesheet" href="{{asset('css/wizard/bwizard.css')}}">
        <link href="{{asset('css/bootstrap-switch.min.css')}}" media="all" type="text/css" rel="stylesheet">
        <link href="{{asset('select2/select2.css')}}" rel="stylesheet">
        <link href="{{asset('css/wizard/jquery.qtip.min.css')}}" rel="stylesheet">
        <link href="{{asset('css/icheck/skins/flat/orange.css')}}" rel="stylesheet">
        @endif
        @if(Request::path() == 'resource/allResources' || Request::is('resource/allResources/*') || Request::is('search') || Request::is('/*'))
        <link href="{{asset('css/bootstrap-switch.min.css')}}" media="all" type="text/css" rel="stylesheet">
        @endif
        @if(Request::is('/'))
        <link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                color: #B0BEC5;
            }

            .container {
                text-align: center;
                /*display: table-cell;*/
                font-weight: 100;
                font-family: 'Lato';
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
                margin-bottom: 40px;
            }

            .quote {
                font-size: 24px;
            }
        </style>
        @endif
    </head>
    <body data-modules="{{ $modules }}">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        @include('shared.nav-primary')

        <div class="container">
            @yield('content')
        </div>

        @include('shared.search-modal')
        @include('scripts')
    </body>
</html>
