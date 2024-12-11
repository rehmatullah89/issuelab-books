<div id="search-modal" class="modal modal-overlay fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                {!! Former::inline_open()
                    ->controller('SearchController@index')
                    ->method('GET')
                    ->role('search')
                !!}
                    <div class="form-group has-feedback">
                        {!! Former::label('Search Resources', 'search')->addClass('sr-only') !!}
                        <div class="input-group">
                            <div class="input-group-btn">
                                <button type="button" class="btn btn-default" title="Go back" data-dismiss="modal"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></button>
                            </div>
                            {!! Former::text('keywords')->placeholder('Search')->id('keywords-modal')->addClass('typeahead search')->dataName('suggestedSearches')->dataRemote('/search/records?keywords=')->raw() !!}
                            <span class="glyphicon glyphicon-remove form-control-feedback hidden" aria-hidden="true"></span>
                            <div class="input-group-btn">
                                <button type="submit" class="btn btn-default" title="Submit search" value><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </div>
                        </div>
                    </div>
                {!! Former::close() !!}
            </div>
        </div>
    </div>
</div>
