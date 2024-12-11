<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#primary-nav" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            @if(!Request::is('search'))
                <button type="button" class="search btn btn-default navbar-toggle visible-xs" data-toggle="modal" data-target="#search-modal" data-backdrop="static">
                    <span class="sr-only">Search</span>
                    <span class="glyphicon glyphicon-search">
                </button>
            @endif
            <a class="navbar-brand" href="/">Issuelab</a>
        </div>

        <div class="collapse navbar-collapse" id="primary-nav">
            <ul class="nav navbar-nav">
                <li class="{{ HTML::isActive('search') }}"><a href="/search">Search</a></li>
                @if(Auth::user() && Auth::user()->isSuperadmin())
                    <li class="{{ HTML::isActive('users') }}"><a href="/users">Users</a></li>
                    <li class="{{ HTML::isActive('admin') }}"><a href="/superadmin">Superadmin</a></li>
                @endif
                
                @if(Auth::user())
                    <li class="{{ HTML::isActive('users') }}"><a href="/resource/allResources">Resources</a></li>
                @endif
                
                @if(Auth::guest())
                    <li class="{{ HTML::isActive('register') }}"><a href="/register">Register</a></li>
                @endif
                
                @if(Auth::user() && (AuthHelper::isKcAdmin() || Auth::user()->isSuperadmin()))
                    <li class="{{ HTML::isActive('categories') }}"><a href="/categories">Categories</a></li>
                @endif

                <li class="{{ HTML::isActive('login') }}">{!! HTML::loginLogoutLink() !!}</li>
            </ul>

            @if(!Request::is('search'))
                {!! Former::inline_open()
                    ->controller('SearchController@index')
                    ->method('GET')
                    ->addClass('navbar-form navbar-right hidden-xs')
                    ->role('search')
                !!}
                    <div class="form-group has-feedback">
                        {!! Former::label('Search Resources', 'search')->addClass('sr-only') !!}
                        <div class="input-group">
                            {!! Former::text('keywords')->placeholder('Search')->id('keywords-nav')->addClass('typeahead search')->dataName('suggestedSearches')->dataRemote('/search/records?keywords=')->raw() !!}
                            <span class="glyphicon glyphicon-remove form-control-feedback hidden" aria-hidden="true"></span>
                            <div class="input-group-btn">
                                <button type="submit" class="btn btn-default" title="Submit search" value><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group has-feedback">
                        <ul class="nav navbar-nav">
                            <li class="{{ HTML::isActive('resource/create') }}"><a href="/resource/create">Add to the Collection</a></li>
                        </ul>
                    </div>
                {!! Former::close() !!}
            @endif
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
