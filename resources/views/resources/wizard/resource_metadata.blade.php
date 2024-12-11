<div id="addEssentials" class="clearfix add-step-1 add-step"> 
    <div class="clearfix">
        <h3 class="pull-left">
            <strong>{{ trans('resource.headings.add_essentials') }}</strong>
        </h3>
    </div>
    <p>{{ trans('resource.description.add_essentials') }}</p>
    <hr/>
    <form action="{{URL::route('resource/upload')}}" id="frmAddEssentials" name="frmAddEssentials" method="POST" class="form-horizontal borderless" enctype="multipart/form-data" data-toggle="validator" data-duplicateaction="{{URL::route('resource/post-duplicate-find')}}" data-submitresource="{{URL::route('resource/submit')}}" data-unfinishedsubmission="{{URL::route('resource/save-unfinished')}}">
        <div id="uplaodOverlay" class="upload-overlay" style="background: #F59B30"> 
            <div class="container">
                <div class="upload-text">
                    {{ trans('resource.notifications.documents_incoming') }}
                </div>
                <div id="progress">
                    <div class="bar" style="width: 0%;"></div>
                </div>
                <div>
                    <button class="btn btn-primary" type="button">Cancel</button>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
        <div class="col-sm-12 fade well" id="dropzone">
            {{ trans('resource.labels.drop_the_document_files') }}
        </div>
        <div class="col-sm-12 fade well hidden" id="dropzone-file"></div>
        <div class="form-group required col-sm-12">
                <input id="fileupload" type="file" name="files" data-url="">
        </div>
        </div>
        <div class="col-sm-8 col-xs-8" id="basic-info">
            <div class="form-group">
                <div class="col-xs-12">
                    <input value="{{$resource->title}}" placeholder="{{ trans('resource.placeholders.title') }}" data-url="{{URL::route('resource/find-duplicate')}}" type="text" required="required" class="form-control" id="title" name="title">
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12">
                    <input value="{{$resource->download_url}}" placeholder="{{ trans('resource.placeholders.link_to_external_resource') }}" type="url" class="form-control" id="link_to_external" name="link_to_external">
                </div>
            </div>
            <div class="form-group">
                <div class="col-xs-12">
                    <input placeholder="{{ trans('resource.placeholders.pub_date') }}" type="text" value="{{($resource->pub_date_mktime!=NULL)?date('m/d/Y', $resource->pub_date_mktime):''}}" required="true" class="form-control" id="pub_date" name="pub_date">
                </div>
            </div>
            {!! Former::repeater('organizations', $resource->publishers, ['label' => '', 'input_name' => 'organization', 'data_local' => 'organizations', 'layout' => 'circular_buttons', 'placeholder' => trans('resource.placeholders.organization_name'), 'dbFieldName' => 'organization']) !!}
            <input type="hidden" class="form-control" value="1" name="step_num">
            <input type="hidden" class="form-control cur_res_id" value="{{($resource->research_id==''?0:$resource->research_id)}}" name="cur_res_id" id="cur_res_id">
            <input type="hidden" class="form-control" id="file_name" value="{{$resource->filename}}" name="file_name">
            <input type="hidden" class="form-control" id="add_as" value="" name="add_as">
            <input type="hidden" class="form-control" value="ABORT" id="user_choice_on_duplicate" name="user_choice_on_duplicate">
            <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
        </div>
        <div class="col-xs-1 buttons-final">
            <button type="button" class="btn btn-default btn-warning btn-circle btn-lg check-resorce">
                <i class="fa fa-warning"></i>
            </button>
            <button type="button" class="btn btn-default btn-circle btn-lg remove-resource">
                <i class="fa fa-minus"></i>
            </button>
        </div>
    </form>
</div>

<div id="addAdditionalInfo" class="hidden add-step-2 add-step">
    <div class="clearfix">
        <h3 class="pull-left">
            <strong>{{ trans('resource.headings.add_additional_info') }}</strong>
        </h3>
        <h4 class="pull-right" style="display: inline">
            <strong>{{ trans('resource.links.need_help') }}</strong>
        </h4>
    </div>
    <div>
        <p>{{ trans('resource.description.add_additional_info') }}</p>
    </div>

    <form id="addResourceMetaData" class="form-horizontal" method="POST" action="" data-toggle="validator" data-submitresource="{{URL::route('resource/submit')}}">
        <div class="form-group required">
            <label for="abstract" class="control-label col-lg-2 col-sm-4">{{ trans('resource.labels.abstract') }}</label>
            <div class="col-lg-10 col-sm-8">
                <textarea required="true" class="form-control" id="abstract" name="abstract">{{$resource->description}}</textarea>
            </div>
        </div>

        {!! Former::repeater('authors', $resource->authors, ['label' => trans('resource.labels.authors'), 'input_name' => 'author', 'data_local' => 'authors', 'layout' => 'circular_buttons', 'placeholder' => trans('resource.placeholders.author_name'), 'dbFieldName' => 'fullname']) !!}
        {!! Former::repeater('funders', $resource->funders, ['label' => trans('resource.labels.funders'), 'input_name' => 'funder', 'data_local' => 'funders', 'layout' => 'circular_buttons', 'placeholder' => trans('resource.placeholders.funder_name'), 'dbFieldName' => 'organization']) !!}
        {!! Former::repeater('coverages', $resource->coverages, ['label' => trans('resource.labels.geographic_focus'), 'input_name' => 'funder', 'data_local' => 'coverages', 'layout' => 'circular_buttons', 'placeholder' => trans('resource.placeholders.geographic_focus'), 'dbFieldName' => 'location']) !!}
        {!! Former::universal_identifier_repeater($resource->universalIdentifiers, ['label' => trans('resource.labels.universal_identifier')]) !!}
        
        <div class="form-group required" id="divIssueAreas">
            <label for="issue_areas" class="control-label col-lg-2 col-sm-4">{{ trans('resource.labels.issue_areas') }}</label>
            <div class="col-lg-10 col-sm-8">
                <select style="width: 100%" multiple="multiple" id="issue_areas" class="form-control" name="issue_areas[]">
                    @if(sizeof($resource->issueAreas)>0)
                        @foreach($resource->issueAreas as $issueArea)
                            <option value="{{$issueArea->id}}" selected="selected">{{$issueArea->issue_area}}</option>
                        @endforeach
                    @endif
                </select>
                <span class="help-block with-errors">
                    <ul class="list-unstyled"><li id="issueAreaError"></li></ul>
                </span>
            </div>
        </div>
        <div class="form-group">
            <label for="language" class="control-label col-lg-2 col-sm-4">{{ trans('resource.labels.language') }}</label>
            <div class="col-lg-10 col-sm-8">
                <select style="width: 100%" multiple="multiple" class="form-control" id="language" name="language[]">
                    @if(sizeof($resource->languages)>0)
                        @foreach($resource->languages as $language)
                            <option value="{{$language->id}}" selected="selected">{{$language->language}}</option>
                        @endforeach
                    @endif
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="doctype" class="control-label col-lg-2 col-sm-4">{{ trans('resource.labels.doc_types') }}</label>
            <div class="col-lg-10 col-sm-8">
                <select style="width: 100%" multiple="multiple" class="form-control" id="doctype" name="doctype[]">
                    @if(sizeof($resource->docTypes)>0)
                        @foreach($resource->docTypes as $docType)
                            <option value="{{$docType->id}}" selected="selected">{{$docType->doctype}}</option>
                        @endforeach
                    @endif
                </select>
            </div>
        </div>
        @if(Auth::user()->isSuperadmin() || AuthHelper::isKcAdmin())
            <div class="form-group"  id="divKnowledgeCenters">
                <label for="knowledgeCenters" class="control-label col-lg-2 col-sm-4">{{ trans('resource.labels.knowledge_centers') }}</label>
                <div class="col-lg-10 col-sm-8">
                    <select style="width: 100%" multiple="multiple" class="form-control" id="knowledgeCenters" name="knowledgeCenters[]">
                        @if(sizeof($resourceKcs)>0)
                            @foreach($resourceKcs as $resourceKc)
                                <option value="{{$resourceKc->id}}" selected="selected">{{$resourceKc->text}}</option>
                            @endforeach
                        @endif
                    </select>
                    @if(AuthHelper::isKcAdmin())
                        <span class="help-block with-errors">
                            <ul class="list-unstyled"><li id="knowledgeCenterError"></li></ul>
                        </span>
                    @endif
                </div>
            </div>
            @if(Auth::user()->isSuperadmin())
                <div class="form-group">
                    <label for="publish_to_issuelab" class="control-label col-lg-2 col-sm-4">{{ trans('resource.labels.publish_to_issuelab') }}</label>
                    <div class="col-lg-10 col-sm-8">
                        <input class="form-control" id="publish_to_issuelab" type="checkbox" name="publish_to_issuelab">
                    </div>
                </div>
            @endif
        @endif
        <input type="hidden" class="form-control" value="2" name="step_num">
        <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
    </form>
</div>    

<div id="choseLicenceOption" class="hidden add-step-3 add-step card wizard-card ct-wizard-azzure">
    <div class="clearfix">
        <h3 class="text-center">
            <strong>{{ trans('resource.headings.choose_license_option') }}</strong>
        </h3>
    </div>
    <form id="frmLicenceOptions" class="form-horizontal" method="POST" action="" data-toggle="validator" data-submitresource="{{URL::route('resource/submit')}}">
        <div class="row">
            <div class="col-sm-10 col-sm-offset-1">
                <div class="col-sm-3 col-sm-offset-1">
                    <div class="choice"  id="wizard-radio-custom" data-toggle="wizard-radio" rel="tooltip" title="{{ trans('resource.titles.custom_license') }}">
                        <input type="radio" name="license" value="CUSTOM" />
                        <div class="icon">
                            <i class="fa fa-edit"></i>
                        </div>
                        <h6>{{ trans('resource.labels.custom_license_radio') }}</h6>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="choice" id="wizard-radio-cc-license" data-toggle="wizard-radio" rel="tooltip" title="{{ trans('resource.titles.creative_common_license') }}">
                        <input type="radio" name="license" value="CC_LICENSE" />
                        <div class="icon">
                            <i class="fa fa-male"></i>
                        </div>
                        <h6>{{ trans('resource.labels.creative_common_license_radio') }}</h6>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="choice" id="wizard-radio-no-license" data-toggle="wizard-radio" rel="tooltip" title="{{ trans('resource.titles.no_license') }}">
                        <input type="radio" name="license" value="NO_LICENCE" />
                        <div class="icon">
                            <i class="fa fa-ban"></i>
                        </div>
                        <h6>{{ trans('resource.labels.no_license') }}</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="row form-group">
            @if($resource->rights->isCreativeCommons())
                {{-- */ $rights = $resource->rights->uri /*--}}
            @else
                {{-- */ $rights = "" /*--}}
            @endif
            <div id="CUSTOM" class="col-md-6 col-md-offset-2 license-options" style="display: none; margin-top: 20px">
                <label for="custom" class="control-label">{{ trans('resource.labels.custom_license_field') }}</label>
                <textarea required="true" class="form-control" type="text" id="custom_license" name="custom">{{$rights}}</textarea>
            </div>
            <div id="CC_LICENSE" class="col-md-6 col-md-offset-2 license-options" style="display: none; margin-top: 20px">
                <label for="cc_license" class="control-label">{{ trans('resource.labels.creative_common_license_field') }}</label>
                {{-- */ $rights = "" /*--}}
                <select required="true" class="form-control" type="text" name="cc_license">
                    <option @if($rights=="http://creativecommons.org/licenses/by/4.0/") selected="selected" @endif value="http://creativecommons.org/licenses/by/4.0/"> Attribution (CC BY) (https://creativecommons.org/licenses/by/4.0)</option>
                    <option @if($rights=="http://creativecommons.org/licenses/by-sa/4.0/") selected="selected" @endif value="http://creativecommons.org/licenses/by-sa/4.0/"> Attribution-ShareAlike (CC BY-SA) (https://creativecommons.org/licenses/by-sa/4.0)</option>
                    <option @if($rights=="http://creativecommons.org/licenses/by-nd/4.0/") selected="selected" @endif value="http://creativecommons.org/licenses/by-nd/4.0/"> Attribution-NoDerivs (CC BY-ND) (https://creativecommons.org/licenses/by-nd/4.0)</option>
                    <option @if($rights=="http://creativecommons.org/licenses/by-nc/4.0/") selected="selected" @endif value="http://creativecommons.org/licenses/by-nc/4.0/"> Attribution-NonCommercial (CC BY-NC) (https://creativecommons.org/licenses/by-nc/4.0)</option>
                    <option @if($rights=="http://creativecommons.org/licenses/by-nc-sa/4.0/") selected="selected" @endif value="http://creativecommons.org/licenses/by-nc-sa/4.0/"> Attribution-NonCommercial-ShareAlike (CC BY-NC-SA) (https://creativecommons.org/licenses/by-nc-sa/4.0)</option>
                    <option @if($rights=="http://creativecommons.org/licenses/by-nc-nd/4.0/") selected="selected" @endif value="http://creativecommons.org/licenses/by-nc-nd/4.0/"> Attribution-NonCommercial-NoDerivs (CC BY-NC-ND) (https://creativecommons.org/licenses/by-nc-nd/4.0)</option>
                </select>
            </div>
        </div>
        <input type="hidden" class="form-control" value="3" name="step_num">
        <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
    </form>
</div>

<div id="addcoverGraphic" class="hidden clearfix add-step-4 add-step">
    <div class="clearfix">
        <h3 class="pull-left">
            <strong>{{ trans('resource.headings.add_cover_image') }}</strong>
        </h3>
    </div>
    <p>{{ trans('resource.description.add_cover_image') }}</p>
    <hr/>
    <form action="{{URL::route('resource/upload-cover')}}" id="frmAddcoverGraphic" name="frmAddcoverGraphic" method="POST" class="form-horizontal borderless" enctype="multipart/form-data" data-toggle="validator" >
        <div class="row" id="rowPdfCover" style="display: none">
            <div class="col-xs-1 cover-graphy-row">
                <div class="middle-left-container">
                    <input type="radio" value="1" name="coverGraphicType" @if(!is_null($resource->cover_graphic_type)&&$resource->cover_graphic_type==1) checked="checked" @endif>
                </div>
            </div>
            <div class="col-xs-3  cover-graphy-row">
                <div class="col-xs-12 hollow-image" id="pdfCover">
                    {{-- */ $imgSrc = (!is_null($resource->research_id))?asset("resources/$resource->research_id/pdf_cover.png") :"" /*--}}
                    <img src="{{$imgSrc}}" alt="PDF cover">
                </div>
            </div>
            <div class="col-xs-8 cover-graphy-row">
                <div class="middle-left-container">
                    <h4><strong>{{ trans('resource.labels.cover_graphic_pdf_page') }}</strong></h4>
                    <p>{{ trans('resource.description.cover_graphic_pdf_page') }}</p>
                </div>
            </div>
        </div><br><br>
        <div class="row row-flex row-flex-wrap" id="rowCustomCover">
            <div class="col-xs-1 cover-graphy-row">
                <div class="middle-left-container">
                    <input type="radio" value="2" name="coverGraphicType" @if(!is_null($resource->cover_graphic_type)&&$resource->cover_graphic_type==2) checked="checked" @endif>
                </div>
            </div>
            <div class="col-xs-3 cover-graphy-row">
                <div class="col-sm-12 hollow-image" id="customCover">
                    {{-- */ $imgSrc = (!is_null($resource->research_id))?asset("resources/$resource->research_id/custom_cover.png") :"" /*--}}
                    <img src="{{$imgSrc}}" alt="Custom cover">
                </div>
            </div>
            <div class="col-xs-8  cover-graphy-row">
                <div class="middle-left-container">
                    <h4><strong>{{ trans('resource.labels.cover_graphic_custom_cover') }}</strong></h4>
                    <p>{{ trans('resource.description.cover_graphic_custom_cover') }}</p>
                    <input id="customCoverUpload" type="file" name="coverGraphic" style="display: none">
                    <div id="cover-progress">
                        <div class="cover-bar" style="width: 0%;"></div>
                    </div>
                </div>
            </div>
        </div><br><br>
        <div class="row" id="rowDefaultCover">
            <div class="col-xs-1  cover-graphy-row">
                <div class="middle-left-container">
                    <input type="radio" name="coverGraphicType" value="3" @if(!is_null($resource->cover_graphic_type) && $resource->cover_graphic_type==3) checked="checked" @elseif(is_null($resource->cover_graphic_type)) checked="checked" @endif>
                </div>
            </div>
            <div class="col-xs-3  cover-graphy-row">
                <div class="col-sm-12 hollow-image" id="defaultCover">
                    <img src="{{asset('resources/default_cover.png')}}" alt="Default cover">
                </div>
            </div>
            <div class="col-xs-8  cover-graphy-row">
                <div class="middle-left-container"> 
                    <h4><strong>{{ trans('resource.labels.cover_graphic_default_cover') }}</strong></h4>
                    <p>{{ trans('resource.description.cover_graphic_default_cover') }}</p>
                </div>
            </div>
        </div>
        <input type="hidden" class="form-control cur_res_id" value="{{($resource->research_id==''?0:$resource->research_id)}}" name="cur_res_id">
        <input type="hidden" class="form-control" value="4" name="step_num">
        <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
    </form>
</div>






<div class="modal fade" id="duplicateResources" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" style=" width: 70%;">
        <div class="modal-content">
            <div class="modal-header text-center">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Duplicates Found</h4>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" data-dismiss="modal" id="continue_adding_my_resource">Continue</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>