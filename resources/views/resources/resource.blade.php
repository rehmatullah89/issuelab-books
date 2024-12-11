@include('shared.message')
@include('search.link_resource_modal')
@include('search.add_to_featured')
@include('search.add_to_kc')
<style>
    .download-links ul{
        border: 1px solid #CCC;
        margin: 35px -136px 0 0;
        float: right;
        padding: 0;
        width: 136px;
        display: none;
    }
    /*.sa-add-option:hover ul, .ka-add-option:hover ul{
        display: block;
    }*/
    .download-links li, .download-links li a {
        display: block;
        width: 100%;
    }
    .download-links .fa-caret-down {
        position: absolute;
        margin-top: -8px;
        margin-left: -4px;
    }
    .pager  {
        float: left;
    }
    .pager li > a {
        border-radius: 0px; 
    }
</style>
<div class="row">
    <header class="col-md-12">
        <div class="col-sm-4">
            @if(!empty($resource->filename))
            <?php
            $path = asset('resources/' . $resource->research_id . '/' . $resource->filename);
            $info = new SplFileInfo($path);
            ?>
            @if($info->getExtension() == 'pdf')
            <object type="application/pdf" width="370" height="400" style="border: 2px solid #eee; padding: 15px" data="{{asset('resources/'.$resource->research_id.'/'.$resource->filename.'')}}"> <param name="view" value="FitH" /></object>
            @elseif($info->getExtension() != 'pdf' && !empty($resource->cover_graphic))
            <img src="{{asset('resources/'.$resource->research_id.'/'.$resource->cover_graphic)}}" width="250" height="300"><br/>
            @else
            {!! HTML::image($resource->cover_image, $resource->title) !!}
            @endif
            @elseif(!empty($resource->cover_graphic))
            <img src="{{asset('resources/'.$resource->research_id.'/'.$resource->cover_graphic)}}" width="250" height="300"><br/>
            @else
            {!! HTML::image($resource->cover_image, $resource->title) !!}
            @endif
            @if(!is_null(Auth::user()) && (AuthHelper::isKcAdmin() || Auth::user()->isSuperadmin()))
            <div class="btn-group btn_group_style_detail">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="getLinkResourceOptions('{{ $resource->research_id }}')" title="Link to Category"><i class="fa fa-link fa-lg"></i></button>
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModal1" onclick="getAddToFeatureOptions('{{ $resource->research_id }}')" title="Mark Featured"><i class="fa fa-star fa-lg"></i></button>
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal2" onclick="getAddToMyKcOptions('{{ $resource->research_id }}')" title="Add to my kc"><i class="fa fa-plus fa-lg"></i></button>
                @if(Auth::user()->isSuperadmin())
                <a href="{{URL::to('/resource/create/edit')}}/{{ $resource->research_id }}" class="btn btn-primary"  title="Edit" >
                    <i class="fa fa-edit fa-lg"></i>
                </a>
                @endif
            </div>
            @endif
            <div class="clearfix"></div>
            @if($resource->rights->isCreativeCommons())
                {!! HTML::image($resource->rights->image['src'], $resource->rights->image['alt']) !!}
            @endif
            <ul class="pager">
                <li class="btn-next next download-links">
                    <a id="download-from" href="#!">Download from ..</a>
                    <ul class="download-options">
                        <i class="fa fa-caret-down"></i>
                        @if($resource->filename != "")
                        <li><a target="_blank" download href="{{$path}}">Issuelab</a></li>
                        @endif
                        @if(isset($resource->doi_link))
                        <li><a target="_blank" href="{{$resource->doi_link}}">DOI Link</a></li>
                        @endif
                        @if($resource->download_url != "")
                        <li><a target="_blank" href="{{$resource->download_url}}">External Link</a></li>
                        @endif
                    </ul>
                </li>
            </ul>
            <div class="clearfix"></div>
        </div>
        <div class="col-sm-8">
            <h1>{{ $resource->title }}</h1>
            @if(isset($kcOptions[1]->show_in_resourse) && $kcOptions[1]->show_in_resourse)
                <p>{{ $resource->pub_date->format('M j, Y') }}</p>
            @endif
            <hr>
            <section class="meta-information col-md-12">
                @if(isset($kcOptions[2]->show_in_resourse) && $kcOptions[2]->show_in_resourse)
                <p><strong>{{ trans('kcLang::lang.author') }}:</strong> {{ $resource->authors->implode('fullname', ', ') }}</p>
                @endif
                @if(isset($kcOptions[4]->show_in_resourse) && $kcOptions[4]->show_in_resourse)
                <p><strong>{{ trans('kcLang::lang.publisher') }}:</strong> {{ $resource->publishers->implode('organization', ', ') }}</p>
                @endif
                @if(isset($kcOptions[3]->show_in_resourse) && $kcOptions[3]->show_in_resourse)
                <p><strong>{{ trans('kcLang::lang.funder') }}:</strong> {{ $resource->funders->implode('organization', ', ') }}</p>
                @endif
                @if(isset($kcOptions[10]->show_in_resourse) && $kcOptions[10]->show_in_resourse)
                <p><strong>{{ trans('kcLang::lang.geographical_focus') }}:</strong> {{ $resource->coverages->implode('location', ', ') }}</p>
                @endif
                <p><strong>{{ trans('resource.date_modified') }}:</strong> @if($resource->date_modified) {{ $resource->date_modified->format('M j, Y') }} @endif</p>
                <p><strong>{{ trans_choice('names.universal_identifier', $resource->universalIdentifiers->count()) }}:</strong>
                    @if($resource->universalIdentifiers->count())
                    {{ $resource->universalIdentifiers
                    ->lists('universal_identifier', 'type')
                    ->map(function($item, $key) {
                    return "{$key}: {$item}"; }
                    )->implode(', ')
                    }}
                    @endif
                </p>
                <p><strong>{{ trans_choice('names.languages', $resource->languages->count()) }}:</strong> {{ $resource->languages->implode('language', ', ') }}</p>
                <p><strong>{{ trans_choice('kcLang::lang.keywords_display', $resource->keywords->count()) }}:</strong> {{ $resource->keywords->implode('keyword', ', ') }}</p>
            </section>

            @if(isset($kcOptions[13]->show_in_resourse) && $kcOptions[13]->show_in_resourse && $resource->keyFindings->count())
            <section class="col-md-12">
                <h2>{{ trans('resource.key_findings') }}</h2>
                <ul class="key-findings">
                    <div class="col-md-6">
                        @foreach($resource->keyFindings()->orderBy('sort_order', 'asc')->get() as $i => $keyFinding)
                        <li>{{ $keyFinding->key_finding }}</li>

                        {{-- Split the key findings into two columns, with the first half in th left column --}}
                        @if(($i + 1) == ceil($resource->keyFindings->count()/2))
                    </div><!-- .col-md-6 -->
                    <div class="col-md-6">
                        @endif
                        @endforeach
                    </div><!-- .col-md-6 -->
                </ul>
            </section>
            @endif

            @if(isset($kcOptions[11]->show_in_resourse) && $kcOptions[11]->show_in_resourse)
            <section class="abstract col-md-12">
                <h2>{{ trans('kcLang::lang.abstract') }}</h2>
                <p>{{ $resource->description }}</p>
            </section>
            @elseif(!is_null(Auth::user()) && !is_null(AuthHelper::isKcAdmin()))
            <section class="abstract col-md-12">
                <?php
                $rsc = \App\Resource::where('identifier', '=', $resource->identifier)->first();
                $kcl = \App\KcListing::where('listing_id', '=', $rsc->research_id)->orderBy('date_added_mktime', 'desc')->orderBy('id', 'desc')->first();
                echo "<h2>Description</h2>";
                if (!empty($kcl->description)) {
                    echo '<p>' . $kcl->description . '</p>';
                } else {
                    echo '<p>' . $resource->description . '</p>';
                }
                ?>
            </section>
            @endif

            <section class="col-md-12">
                <h2>{{ trans_choice('names.issue_areas', $resource->issueAreas->count()) }}</h2>
                <ul class="issue-areas list-unstyled list-inline">
                    @foreach($resource->issueAreas as $issueArea)
                    <li class="issue-area">
                        <a href="{{ action('IssueAreaController@show', $issueArea->identifier) }}" class="btn btn-default">
                            {{ $issueArea->issue_area }}
                        </a>
                    </li>
                    @endforeach
                </ul>
            </section>

            <section class="col-md-12">
                <h2>{{ trans('resource.usage') }}</h2>

                @if($resource->rights->isCreativeCommons())
                <a href="{{ $resource->rights->uri }}" rel="license" target="_blank">
                    {!! HTML::image($resource->rights->image['src'], $resource->rights->image['alt']) !!}
                </a>

                <br>

                This work is licensed under a {!! HTML::link($resource->rights->uri, $resource->rights->license, ['rel' => 'license', 'target' => '_blank']) !!}
                @else
                <p>{{ $resource->rights }}</p>
                @endif
            </section>

            <hr>

            <section class="col-md-12">
                <h2>{{ trans('resource.recommended') }}</h2>
                <ul class="recommended list-group">
                    <li class="list-group-item"></li>
                </ul>
            </section>

            @if(isset($kcOptions[12]->show_in_resourse) && $kcOptions[12]->show_in_resourse)
            @if($resource->byPublisher->count())
            <section class="col-md-12">
                <h2>{{ trans('kcLang::lang.publisher_resources') }}</h2>
                <ul class="list-group">
                    @foreach($resource->byPublisher->take(5) as $resource)
                    @include('shared.resource')
                    @endforeach
                </ul>
            </section>
            @endif
            @endif
        </div>
    </header>
</div><!-- .row -->
