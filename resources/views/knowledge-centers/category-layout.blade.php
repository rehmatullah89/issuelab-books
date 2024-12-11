<div id="resource-search" class="row">

    @include('shared.message')
    {!! Former::vertical_open()->action('')->method('POST')->id('kcForm')->addClass('col-md-12') !!}
    <div class="col-md-12">
        <div class="form-group">
            {!! Former::label(trans('kcLang::lang.keywords')) !!}
            {!! Former::text('keywords')->value($keywords)->vModel('keywords')->addClass('typeahead')->dataName('suggestedSearches')->dataRemote('/search/records?keywords=')->raw() !!}
            {!! Former::primary_submit(trans('search.search'))->addClass('pull-right btn-inline') !!}
            {!! Former::hidden('category')->value(Request::segment(2)) !!}
        </div>
    </div>
       
    <div id="tabs-content" class="col-md-12 vert-offset-top-1">

            <div id="search-titles-header" class="search-header row">

                <h4 class="col-md-6">
                    {{ $count }} {{ trans('search.results_found') }}
                </h4>

                <div class="col-md-6 text-right form-inline">
                    {!! Former::select('sort', trans('search.sort'))->value($sort)->onchange("this.form.submit()")->options([
                    'Relevancy' => [
                    'id'      => "sort_0",
                    'name'    => "sort",
                    'value'   => ''
                    ],
                    'A - Z' => [
                    'id'      => "sort_1",
                    'name'    => "sort",
                    'value'   => 'title_sort asc'
                    ],
                    'Newest - Oldest' => [
                    'id'      => "sort_2",
                    'name'    => "sort",
                    'value'   => 'date_published desc'
                    ],
                    'Oldest - Newest' => [
                    'id'      => "sort_3",
                    'name'    => "sort",
                    'value'   => 'date_published asc'
                    ],
                    ])
                    !!}
                </div>

            </div>
        
        <?php echo $resources->setPath('/categories/'.Request::segment(2))->render(); ?>
            <div class="row">
              @foreach($resources->items() as $resource)
                <article class=" col-xs-12 list-view  ">
                <a href="/resource/civil_society_space_in_africa_5">
                <img src="{{@$resource->cover_graphic}}">
                <h3>{{$resource->title}}</h3>
                    <p>{{date("M d, Y",strtotime(@$resource->date_published))}}</p>
                        @if(isset($resource->publisher))
                        @foreach($resource->publisher as $publisher)
                            <p>{{@$publisher}}</p>
                        @endforeach
                        @endif
                </a>
                </article>
             @endforeach 
            </div>
         <?php echo $resources->setPath('/categories/'.Request::segment(2))->render(); ?>
    </div>

    {!! Former::close() !!}

</div><!-- .row -->
<script>

</script>
