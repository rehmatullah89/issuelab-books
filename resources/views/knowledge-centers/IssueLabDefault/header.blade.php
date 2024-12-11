<html lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>IssueLab</title>
    @include('shared.meta')
    @section('ogtags')@show
</head>
<body data-modules="{{ $modules }}">
<!-- Navigation -->
<nav role="navigation" class="navbar navbar-default">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" class="navbar-toggle" type="button" aria-expanded="true">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand">IssueLab Default</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div id="bs-example-navbar-collapse-1" class="navbar-collapse collapse in" aria-expanded="true" style="">
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a title="" data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false">Menu <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#">Sub Menu</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false"><i class="fa fa-star text-yellow"></i> Premium <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#"><i class="fa fa-fw fa-paint-brush"></i> Sub Menu</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>
<header class="">
    <div class="container">
       
    </div>
</header>
