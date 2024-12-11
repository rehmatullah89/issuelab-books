<div id="resource-search" class="row">

    @include('shared.message')
    {!! Former::vertical_open()->method('GET')->vOn('submit: submit')->addClass('col-md-12') !!}
    @if(!$isKC || (isset($kcOptions[0]->show_in_search) && $kcOptions[0]->show_in_search))
    <div class="col-md-12">
        <div class="form-group">
            {!! Former::label(trans('kcLang::lang.keywords')) !!}
            {!! Former::text('keywords')->vModel('keywords')->addClass('typeahead')->dataName('suggestedSearches')->dataRemote('/search/records?keywords=')->raw() !!}
            {!! Former::primary_submit(trans('search.search'))->addClass('pull-right btn-inline') !!}
        </div>
    </div>
    @endif

    @if( !$isKC )

    <div class="col-md-12 vert-offset-top-1">
        <div class="btn-group" role="group" >
            <button type="button" class="btn btn-default" v-class="active : currentView == 'titles'" v-on="click: switchView('titles') ">{{ trans('search.title_results') }}</button>
            <button type="button" class="btn btn-default" v-class="active : currentView == 'related'" v-on="click: switchView('related') ">{{ trans('search.related_results') }}</button>
        </div>
    </div>

    @endif

    <div id="tabs-content" class="col-md-12 vert-offset-top-1">

        <div class="tab-content" id="titles_tab" v-if="currentView == 'titles'">

            <div id="search-titles-header" class="search-header row">

                <h4 class="col-md-6 vue-loading">
                    @{{ numFound }} {{ trans('search.results_found') }}
                </h4>
                <div class="col-md-6 text-right form-inline">
                    {!! Former::select('sort', trans('search.sort'))
                    ->vModel('sort')
                    ->options([
                    'Relevancy' => [
                    'id'      => "sort_0",
                    'name'    => "sort",
                    'value'   => ''
                    ],
                    'A - Z' => [
                    'id'      => "sort_1",
                    'name'    => "sort",
                    'value'   => 'title_sort+asc'
                    ],
                    'Newest - Oldest' => [
                    'id'      => "sort_2",
                    'name'    => "sort",
                    'value'   => 'date_published+desc'
                    ],
                    'Oldest - Newest' => [
                    'id'      => "sort_3",
                    'name'    => "sort",
                    'value'   => 'date_published+asc'
                    ],
                    ])
                    !!}
                </div>
         
            </div>

            <div class="row">
                @if(!$isKC || (isset($kc->show_advance_search) && $kc->show_advance_search))
                    <div id="search-filters" class="filters col-md-3">
                        <input href="#all-sections" type="button" value="Advance Search" class="btn-primary btn pull-right btn-inline advance-search" data-toggle="collapse" aria-expanded="false" aria-controls="all-sections">
                        <div id="all-sections" class="form-group all-sections date-range-filter panel-collapse collapse 
                             @if(!$isKC)
                                in
                             @elseif($kc->advance_search_expanded)
                                in
                             @endif
                             ">

                            @if(!$isKC || (isset($kcOptions[1]->show_in_search) && $kcOptions[1]->show_in_search))
                            <section>
                                <label data-toggle="collapse" class="collapsed" href="#publish_date_filter" aria-expanded="false" aria-controls="publish_date_filter">
                                    {{ trans('kcLang::lang.pubdate') }}
                                    <span class="accordion-caret"></span>
                                </label>

                                <div id="publish_date_filter" class="form-group date-range-filter panel-collapse collapse @if(isset($kcOptions[1]->is_expanded) && $kcOptions[1]->is_expanded) in @endif" role="tabpanel">
                                    <fieldset>
                                        {!! Former::label(trans('search.after'))->addClass('control-label') !!}
                                        @include('search.pubdate', ['name' => 'pubdate_start', 'class' => 'date-range-start'])
                                        {!! Former::label(trans('search.before'))->addClass('control-label vert-offset-top-1') !!}
                                        @include('search.pubdate', ['name' => 'pubdate_end', 'class' => 'date-range-end'])
                                    </fieldset>
                                </div>
                            </section>
                            @endif

                            @if($isKC && (isset($kcOptions[2]->show_in_search) && $kcOptions[2]->show_in_search))
                            @include('search.filter-ajax-select', [
                            'name' => 'author',
                            'placeholder' => trans('search.author_placeholder'),
                            'customLabel' => trans('kcLang::lang.author'),
                            'isExpanded' => $kcOptions[2]->is_expanded,
                            'url'=>'/authors/list'
                            ])
                            @endif

                            @if($isKC && (isset($kcOptions[3]->show_in_search) && $kcOptions[3]->show_in_search))
                            @include('search.filter-ajax-select', [
                            'name' => 'funder',
                            'placeholder' => trans('search.funder_placeholder'),
                            'customLabel' => trans('kcLang::lang.funder'),
                            'isExpanded' => $kcOptions[3]->is_expanded,
                            'url'=>'/search/funders/list'
                            ])
                            @endif

                            @if($isKC && (isset($kcOptions[4]->show_in_search) && $kcOptions[4]->show_in_search))
                            @include('search.filter-ajax-select', [
                            'name' => 'publisher',
                            'placeholder' => trans('search.publisher_placeholder'),
                            'customLabel' => trans('kcLang::lang.publisher'),
                            'isExpanded' => $kcOptions[4]->is_expanded,
                            'url'=>'/organizations/list'
                            ])
                            @endif

                            @if(!$isKC || (isset($kcOptions[5]->show_in_search) && $kcOptions[5]->show_in_search))
                            @include('search.filter', [
                            'name' => 'doctypes',
                            'data' => $doctypes,
                            'customLabel' => trans('kcLang::lang.doctypes'),
                            'isExpanded' => (isset($kcOptions[5]->is_expanded)?$kcOptions[5]->is_expanded:0),
                            ])
                            @endif

                            @if(!$isKC || (isset($kcOptions[6]->show_in_search) && $kcOptions[6]->show_in_search))
                            @include('search.filter', [
                            'name' => 'issueAreas',
                            'data' => $issueAreas,
                            'customLabel' => trans('kcLang::lang.issueArea'),
                            'isExpanded' => (isset($kcOptions[6]->is_expanded)?$kcOptions[6]->is_expanded:0),
                            ])
                            @endif

                            @if(!$isKC || (isset($kcOptions[7]->show_in_search) && $kcOptions[7]->show_in_search))
                            @include('search.filter', [
                            'name' => 'languages',
                            'data' => $languages,
                            'customLabel' => trans('kcLang::lang.languages'),
                            'isExpanded' => (isset($kcOptions[7]->is_expanded)?$kcOptions[7]->is_expanded:0),
                            ])
                            @endif

                            @if(!$isKC || (isset($kcOptions[8]->show_in_search) && $kcOptions[8]->show_in_search))
                            <section>
                                <label data-toggle="collapse" class="collapsed" href="#geography_filter" aria-expanded="false" aria-controls="geography_filter">
                                    {{ trans('kcLang::lang.geography') }} 
                                    <span class="accordion-caret"></span>
                                </label>

                                <div class="panel-collapse collapse {{ (isset($kcOptions[8]->is_expanded) && $kcOptions[8]->is_expanded)?'in':'' }}" id="geography_filter" role="tabpanel">
                                    <div class="form-group">
                                        {!! Former::select('coverage', '')
                                        ->options($coverage)
                                        ->dataPlaceholder('Select a geographical region')
                                        ->dataAllowClear('true')
                                        ->vSelect('coverage')
                                        !!}
                                    </div>
                                </div>
                            </section>
                            @endif
                            @if(!$isKC || (isset($kcOptions[9]->show_in_search) && $kcOptions[9]->show_in_search))
                            <section>
                                <label data-toggle="collapse" class="collapsed" href="#copyright_filter" aria-expanded="false" aria-controls="copyright_filter">
                                    {{ trans('kcLang::lang.copyright') }} 
                                    <span class="accordion-caret"></span>
                                </label>

                                <div class="panel-collapse collapse {{ (isset($kcOptions[9]->is_expanded) && $kcOptions[9]->is_expanded)?'in':'' }}" id="copyright_filter" role="tabpanel">
                                    <div class="form-group">
                                        {!! Former::checkboxes('copyrights', '')
                                        ->inline()
                                        ->checkboxes($copyright)
                                        !!}
                                    </div>
                                </div>
                            </section>
                            @endif
                           @if($isKC && (isset($kcOptions[10]->show_in_search) && $kcOptions[10]->show_in_search))
                            @if($kc->switch_category_view == 'select_view')
                              <?php $i=0;?>
                              @foreach($category_options as $key => $cat_val)
                                  <section>
                                    <label data-toggle="collapse" class="collapsed category_filter" href="#category_filter{{$i}}" aria-expanded="false" aria-controls="category_filter{{$i}}">
                                        {{ $key }} 
                                        <span class="accordion-caret"></span>
                                    </label>
                                    <div class="panel-collapse collapse category_filter" id="category_filter{{$i}}" role="tabpanel">
                                        <div class="form-group">
                                           {!! Former::select('categories[]', '')
                                            ->options($cat_val)
                                            ->dataPlaceholder('Select a Category')
                                            ->dataAllowClear('true')
                                            ->id('categories_'.$i)
                                            ->vSelect('categories_'.$i)
                                    !!}
                                    <?php $i++;?>
                                        </div>
                                    </div>
                                </section>  
                               @endforeach
                           @else 
                           <section>
                                <label data-toggle="collapse" class="collapsed" href="#category_filter" aria-expanded="false" aria-controls="category_filter">
                                    {{ trans('kcLang::lang.category') }} 
                                    <span class="accordion-caret"></span>
                                </label>

                                <div class="panel-collapse collapse {{ (isset($kcOptions[10]->is_expanded) && $kcOptions[10]->is_expanded)?'in':'' }}" id="category_filter" role="tabpanel">
                                    <div class="form-group">
                                        <?php $i=0;?>
                                        {!! Former::select('categories[]', '')
                                            ->options($category_options)
                                            ->dataPlaceholder('Select a Category')
                                            ->dataAllowClear('true')
                                            ->vSelect('categories')
                                            !!}
                                    </div>
                                </div>
                            </section>
                            @endif
                            @endif
                            <section class="action-section">
                                {!! Former::actions(
                                Former::primary_submit(trans('search.apply')),
                                Former::reset(trans('search.clear'))->vOn('click: reset')
                                ) !!}
                            </section>
                        </div>
                        <span class="vue-loading">
                            @include('search.filter-modal', ['name' => 'doctypes', 'data' => $doctypes])

                            @include('search.filter-modal', ['name' => 'issueAreas', 'data' => $issueAreas])

                            @include('search.filter-modal', ['name' => 'languages', 'data' => $languages])
                        </span>
                    </div>
                @endif
                <div class="
                    @if(isset($kc->show_advance_search) && !$kc->show_advance_search)
                        col-md-12 
                    @else
                        col-md-9
                    @endif
                    col-xs-12 vue-loading
                ">

                    <pagination
                        class="col-xs-12 text-center"
                        current-page='@{{@ currentPage}}'
                        total-items='@{{numFound}}'
                        per-page='@{{perPage}}'>
                    </pagination>

                    <template v-if="!searchLoading">

                        <resource v-repeat="resource in resources"></resource>

                        <h2 class="text-center" v-if="resources.length == 0">{{ trans("search.no_results") }}</h2>

                    </template>

                    <div class="loading" v-if="searchLoading">{!! HTML::image(asset('img/loading.gif'), trans("search.loading"), ['class' => 'spinner']) !!}</div>

                    <pagination
                        class="col-xs-12 text-center"
                        current-page='@{{@ currentPage}}'
                        total-items='@{{numFound}}'
                        per-page='@{{perPage}}'>
                    </pagination>

                </div>

            </div>

        </div>

        @if( !$isKC )

        <div class="tab-content vue-loading" id="related_tab" v-if="currentView == 'related'">

            <div v-if="!isFiltered()">
                <h2>{{ trans('search.filter_to_see_related') }}</h2>
            </div>

            <div v-if="isFiltered()">

                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" v-class="active : currentRelatedView == 'overview'"
                            v-on="click: switchRelatedView('overview') ">
                        {{ trans('search.overview') }}
                    </button>

                    <button type="button" class="btn btn-default" v-class="active : currentRelatedView == 'authors'"
                            v-on="click: switchRelatedView('authors') ">
                        {{ trans_choice('names.authors', 0) }}
                    </button>

                    <button type="button" class="btn btn-default" v-class="active : currentRelatedView == 'funders'"
                            v-on="click: switchRelatedView('funders') ">
                        {{ trans_choice('names.funders', 0) }}
                    </button>

                    <button type="button" class="btn btn-default" v-class="active : currentRelatedView == 'publishers'"
                            v-on="click: switchRelatedView('publishers') ">
                        {{ trans_choice('names.publishers', 0) }}
                    </button>

                    <button type="button" class="btn btn-default" v-class="active : currentRelatedView == 'special_collections'"
                            v-on="click: switchRelatedView('special_collections') ">
                        {{ trans_choice('names.special_collections', 0) }}
                    </button>
                </div>

                <div class="vert-offset-top-1 vert-offset-bottom-3">

                    <div v-if="currentRelatedView == 'overview'">

                        <div class="row search-header">
                            <h4 class="col-md-6">
                                @{{ relatedNumFound }} {{ trans('search.related_results_found') }}
                            </h4>
                        </div>

                        <h2>
                            {{ trans_choice('names.authors', 0) }} (@{{ related.authors.items.length }})
                            <button v-if="related.authors.items.length" v-on="click: switchRelatedView('authors')" class="btn btn-primary pull-right">{{ trans('search.see_all') }}</button>
                        </h2>
                        <related v-repeat="related in relatedAuthorsPaged"></related>
                        <div class="clearfix"></div>

                        <h2>
                            {{ trans_choice('names.funders', 0) }} (@{{ related.funders.items.length }})
                            <button v-if="related.funders.items.length" v-on="click: switchRelatedView('funders')" class="btn btn-primary pull-right">{{ trans('search.see_all') }}</button>
                        </h2>
                        <related v-repeat="related in relatedFundersPaged"></related>
                        <div class="clearfix"></div>

                        <h2>
                            {{ trans_choice('names.publishers', 0) }} (@{{ related.publishers.items.length }})
                            <button v-if="related.publishers.items.length" v-on="click: switchRelatedView('publishers')" class="btn btn-primary pull-right">{{ trans('search.see_all') }}</button>
                        </h2>
                        <related v-repeat="related in relatedPublishersPaged"></related>
                        <div class="clearfix"></div>

                        <h2>
                            {{ trans_choice('names.special_collections', 0) }}
                            (@{{ related.special_collections.items.length }})
                            <button v-if="related.special_collections.items.length" v-on="click: switchRelatedView('special_collections')" class="btn btn-primary pull-right">{{ trans('search.see_all') }}</button>
                        </h2>
                        <related v-repeat="related in relatedSpecialCollectionsPaged"></related>
                        <div class="clearfix"></div>
                    </div>

                    <div v-if="currentRelatedView == 'authors'">

                        <div class="row search-header">
                            <h4 class="col-md-6">
                                @{{ related.authors.items.length }} {{ trans('search.related_authors_found') }}
                            </h4>
                        </div>

                        <pagination
                            class="col-md-12 text-center"
                            current-page='@{{@ related.authors.currentPage}}'
                            total-items='@{{related.authors.items.length}}'
                            per-page='@{{relatedPerPage}}'>
                        </pagination>

                        <related v-repeat="related in relatedAuthorsPaged"></related>

                        <pagination
                            class="col-md-12 text-center"
                            current-page='@{{@ related.authors.currentPage}}'
                            total-items='@{{related.authors.items.length}}'
                            per-page='@{{relatedPerPage}}'>
                        </pagination>
                    </div>

                    <div v-if="currentRelatedView == 'publishers'">

                        <div class="row search-header">
                            <h4 class="col-md-6">
                                @{{ related.publishers.items.length }} {{ trans('search.related_publishers_found') }}
                            </h4>
                        </div>

                        <pagination
                            class="col-md-12 text-center"
                            current-page='@{{@ related.publishers.currentPage}}'
                            total-items='@{{related.publishers.items.length}}'
                            per-page='@{{relatedPerPage}}'>
                        </pagination>

                        <related v-repeat="related in relatedPublishersPaged"></related>

                        <pagination
                            class="col-md-12 text-center"
                            current-page='@{{@ related.publishers.currentPage}}'
                            total-items='@{{related.publishers.items.length}}'
                            per-page='@{{relatedPerPage}}'>
                        </pagination>
                    </div>

                    <div v-if="currentRelatedView == 'special_collections'">

                        <div class="row search-header">
                            <h4 class="col-md-6">
                                @{{ related.special_collections.items.length }} {{ trans('search.related_special_collections_found') }}
                            </h4>
                        </div>

                        <pagination
                            class="col-md-12 text-center"
                            current-page='@{{@ related.special_collections.currentPage}}'
                            total-items='@{{related.special_collections.items.length}}'
                            per-page='@{{relatedPerPage}}'>
                        </pagination>

                        <related v-repeat="related in relatedSpecialCollectionsPaged"></related>

                        <pagination
                            class="col-md-12 text-center"
                            current-page='@{{@ related.special_collections.currentPage}}'
                            total-items='@{{related.special_collections.items.length}}'
                            per-page='@{{relatedPerPage}}'>
                        </pagination>
                    </div>

                    <div v-if="currentRelatedView == 'funders'">

                        <div class="row search-header">
                            <h4 class="col-md-6">
                                @{{ related.funders.items.length }} {{ trans('search.related_funders_found') }}
                            </h4>
                        </div>

                        <pagination
                            class="col-md-12 text-center"
                            current-page='@{{@ related.funders.currentPage}}'
                            total-items='@{{related.funders.items.length}}'
                            per-page='@{{relatedPerPage}}'>
                        </pagination>

                        <related v-repeat="related in relatedFundersPaged"></related>

                        <pagination
                            class="col-md-12 text-center"
                            current-page='@{{@ related.funders.currentPage}}'
                            total-items='@{{related.funders.items.length}}'
                            per-page='@{{relatedPerPage}}'>
                        </pagination>
                    </div>
                </div>

            </div>

        </div>

        @endif

    </div>

    {!! Former::close() !!}

</div><!-- .row -->
@include('search.link_resource_modal')
@include('search.add_to_featured')
@include('search.add_to_kc')
@include('search.edit_resource')
<?php
    if(isset($kc->subdomain))
        $feature = 'resource_listing_feature_'.$kc->subdomain;
    else
        $feature = 'mainRepo';
?>
<script type="text/x-template" id="resource-template">
    <template v-if="($index) % 3 === 0">
        <div class="clearfix"></div>
    </template>
    @if($feature != 'mainRepo')
    <article v-if="resource.{{$feature}} == 1" class="@if(isset($kc->kc_display) && $kc->kc_display =='list_view') col-xs-12 list-view @else col-xs-4 @endif feature-wrapper">
            <div class="ribbon-wrapper-green"> 
               <div class="ribbon-green">Featured</div>
            </div>
            <a href="/resource/@{{ resource.id.replace('issuelab_', '') }}">
                <div class="img"><img src="@{{ resource.cover_graphic }}"></div>
                <h3>@{{ resource.title }}</h3>
                @if(isset($kcOptions[1]->show_in_resourse) && $kcOptions[1]->show_in_resourse)
                    <p>@{{ resource.date_published | date 'MMM Do, YYYY' }}</p>
                @endif
                @if(isset($kcOptions[4]->show_in_resourse) && $kcOptions[4]->show_in_resourse)
                    <p title="@{{ resource.publisher }}">@{{ resource.publisher }}</p>
                @endif
             </a>
             @if(Auth::user() && (AuthHelper::isKcAdmin() || Auth::user()->isSuperadmin()))
                 <div class="btn-group add_to_kc">
                    <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal" onclick="getLinkResourceOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Link to Category"><i class="fa fa-link fa-lg"></i></button>
                    <button type="button" class="btn btn-success btn-xs" data-toggle="modal" data-target="#myModal2" onclick="getAddToMyKcOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Add to my kc"><i class="fa fa-plus fa-lg"></i></button>
                    @if(Auth::user()->isSuperadmin())
                        <a href="{{URL::to('/resource/create/edit')}}/@{{ resource.id }}" class="btn btn-primary"  title="Edit">
                           <i class="fa fa-edit fa-lg"></i>
                        </a>
                    @elseif(AuthHelper::isKcAdmin())
                    <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal4" onclick="getEditResourceOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Edit Resource"><i class="fa fa-edit fa-lg"></i></button>
                    @endif
                 </div>
             @endif
      </article>
      <article v-if="resource.{{$feature}} == 0" class="@if(isset($kc->kc_display) && $kc->kc_display =='list_view') col-xs-12 list-view @else col-xs-4 @endif ">
           <a href="/resource/@{{ resource.id.replace('issuelab_', '') }}">
                <div class="img"><img src="@{{ resource.cover_graphic }}"></div>
                <h3>@{{ resource.title }}</h3>
                @if(isset($kcOptions[1]->show_in_resourse) && $kcOptions[1]->show_in_resourse)
                    <p>@{{ resource.date_published | date 'MMM Do, YYYY' }}</p>
                @endif
                @if(isset($kcOptions[4]->show_in_resourse) && $kcOptions[4]->show_in_resourse)
                    <p title="@{{ resource.publisher }}">@{{ resource.publisher }}</p>
                @endif
             </a>
              @if(Auth::user() && (AuthHelper::isKcAdmin() || Auth::user()->isSuperadmin()))
                 <div class="btn-group add_to_kc">
                    <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal" onclick="getLinkResourceOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Link to Category"><i class="fa fa-link fa-lg"></i></button>
                    <button type="button" class="btn btn-warning btn-xs" data-toggle="modal" data-target="#myModal1" onclick="getAddToFeatureOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Mark Featured"><i class="fa fa-star fa-lg"></i></button>
                    <button type="button" class="btn btn-success btn-xs" data-toggle="modal" data-target="#myModal2" onclick="getAddToMyKcOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Add to my kc"><i class="fa fa-plus fa-lg"></i></button>
                    @if(Auth::user()->isSuperadmin())
                        <a href="{{URL::to('/resource/create/edit')}}/@{{ resource.id }}" class="btn btn-primary"  title="Edit">
                           <i class="fa fa-edit fa-lg"></i>
                        </a>
                    @elseif(AuthHelper::isKcAdmin())
                    <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal4" onclick="getEditResourceOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Edit Resource"><i class="fa fa-edit fa-lg"></i></button>
                    @endif
                 </div>
             @endif
      </article>
      @else
      <article class="@if(isset($kc->kc_display) && $kc->kc_display =='list_view') col-xs-12 list-view @else col-xs-4 @endif feature-wrapper">  
         <a href="/resource/@{{ resource.id.replace('issuelab_', '') }}">
             <div class="img"><img src="@{{ resource.cover_graphic }}"></div>
             <h3>@{{ resource.title }}</h3>
             @if(isset($kcOptions[1]->show_in_resourse) && $kcOptions[1]->show_in_resourse)
                 <p>@{{ resource.date_published | date 'MMM Do, YYYY' }}</p>
             @endif
             @if(isset($kcOptions[4]->show_in_resourse) && $kcOptions[4]->show_in_resourse)
                 <p>@{{ resource.publisher }}</p>
             @endif
             </a>
             @if(Auth::user() && (AuthHelper::isKcAdmin() || Auth::user()->isSuperadmin()))
                 <div class="btn-group btn_group_style">
                    <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal" onclick="getLinkResourceOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Link to Category"><i class="fa fa-link fa-lg"></i></button>
                    <button type="button" class="btn btn-warning btn-xs" data-toggle="modal" data-target="#myModal1" onclick="getAddToFeatureOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Mark Featured"><i class="fa fa-star fa-lg"></i></button>
                    <button type="button" class="btn btn-success btn-xs" data-toggle="modal" data-target="#myModal2" onclick="getAddToMyKcOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Add to my kc"><i class="fa fa-plus fa-lg"></i></button>
                    @if(Auth::user()->isSuperadmin())
                        <a href="{{URL::to('/resource/create/edit')}}/@{{ resource.id }}" >
                            <button type="button" class="btn btn-success btn-xs" title="Edit">                            
                                    <i class="fa fa-edit fa-lg"></i>
                            </button>
                        </a>
                    @elseif(AuthHelper::isKcAdmin())
                    <button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal4" onclick="getEditResourceOptions('@{{ resource.id.replace('issuelab_', '') }}')" title="Edit Resource"><i class="fa fa-edit fa-lg"></i></button>
                    @endif
                </div>
             @endif
      </article>
      @endif
</script>

<script type="text/x-template" id="related-template">
    <template v-if="($index) % 2 === 0">
    <div class="clearfix"></div>
    </template>
    <article class="@{{ class }}">
    <a href="@{{ related.url }}">
    <h3>@{{ related.name }}</h3>
    </a>
    <p>@{{ related.description | truncate 30 }}</p>
    <span v-if="related.loaded < 2">Loading</span>
    <div v-if="related.loaded == 2">
    <resource class="col-xs-6" v-repeat="resource in related.resources"></resource>
    </div>
    </article>
</script>
