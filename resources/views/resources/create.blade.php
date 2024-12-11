@extends('app')

@section('content')
@if(Auth::user() && (Auth::user()->isSuperAdmin() || AuthHelper::isKcAdmin()))
    <h1 id="submit-resource" class="text-center"><strong>{{ trans('resource.headings.submit_a_resource') }}</strong></h1>
@else
    <h1 id="add-to-collection" class="text-center"><strong>{{ trans('resource.headings.add_to_collection') }}</strong></h1>
@endif
<h4 class="text-center">{{ trans('resource.headings.join_collaborative_effort') }}</h4>
<div id="preloader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
<div class="wrapper-cover"></div>
<div class="cssload-container">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
<div id="resourceWizard" class="resource-wizard">
    <div class="navbar">
        <div class="navbar-inner">
            <div class="container">
                <ul class="bwizard-steps clearfix clickable" role="tab-list">
                    @if(Auth::user() && !Auth::user()->isSuperAdmin() && !AuthHelper::isKcAdmin())
                        <li><a href="#intro" data-toggle="tab"  style="z-index: 4;" aria-selected="false">Intro</a></li>
                    @endif
                    <li><a href="#add" data-toggle="tab"  style="z-index: 3;" aria-selected="false">Add</a></li>
                    <li><a href="#previewResource" data-toggle="tab"  style="z-index: 2;" aria-selected="false">Review</a></li>
                    <li><a href="#previewFinish" data-toggle="tab"  style="z-index: 1;" aria-selected="false">Finish</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="tab-content">
        <div class="tab-pane" id="intro">
            @include('resources.wizard.agree_criteria')
        </div>
        <div class="tab-pane" id="add">
            @include('resources.wizard.resource_metadata')
        </div>
        <div class="tab-pane" id="previewResource">
            <div class="clearfix">
                <h3 class="pull-left">
                    <strong>{{ trans('resource.headings.preview') }}</strong>
                </h3>
                <h4 class="pull-right" style="display: inline">
                    <strong>{{ trans('resource.links.need_help') }}</strong>
                </h4>
            </div>
            <div>
                <p>{{ trans('resource.description.thankyou_for_submission_preview') }}</p>
            </div>

            <form id="" class="form-horizontal" method="POST" action="" data-toggle="validator">
                <div class="form-group">
                    <label class="control-label col-lg-3 col-sm-4">
                        <div class="pull-right" style="min-height: 150px; min-width: 185px; background: #ccc;">
                            <img id="preview_img" alt="img" src="">
                        </div>
                    </label>
                    <div class="col-lg-9 col-sm-8">
                        <h3 class="title" id="preview_title"></h3>
                        <a href="" id="preview_external_url"></a>
                    </div><!--end of col-9-->
                </div>
                <div class="form-group required">
                    <label for="preview_pub_date" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_pub_date') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_pub_date"></div>
                </div>
                <div class="form-group required">
                    <label for="preview_pub_orgs" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_pub_orgs') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_pub_orgs">
                    </div>
                </div>
                <div class="form-group required">
                    <label for="preview_abstract" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_abstract') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_abstract"></div>
                </div>
                <div class="form-group required">
                    <label for="preview_authors" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_authors') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_authors"></div>
                </div>
                <div class="form-group required">
                    <label for="preview_funders" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_funders') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_funders"></div>
                </div>
                <div class="form-group required">
                    <label for="preview_geographic_focus" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_geographic_focus') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_geographic_focus"></div>
                </div>
                <div class="form-group required">
                    <label for="preview_universal_identifier" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_universal_identifier') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_universal_identifier"></div>
                </div>
                <div class="form-group required">
                    <label for="preview_issue_areas" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_issue_areas') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_issue_areas"></div>
                </div>
                <div class="form-group required">
                    <label for="preview_language" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_language') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_language"></div>
                </div>
                <div class="form-group required">
                    <label for="preview_doctype" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_doc_types') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_doctype"></div>
                </div>
                @if(Auth::user()->isSuperAdmin() || AuthHelper::isKcAdmin())
                    <div class="form-group required">
                        <label for="preview_knowledge_center" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_knowledge_centers') }}</label>
                        <div class="col-lg-9 col-sm-8" id="preview_knowledge_center"></div>
                    </div>
                    @if(Auth::user()->isSuperAdmin())
                        <div class="form-group required">
                            <label for="preview_publish_to_issuelab" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_publish_to_issuelab') }}</label>
                            <div class="col-lg-9 col-sm-8" id="preview_publish_to_issuelab"></div>
                        </div>
                    @endif
                @endif
                <div class="form-group required">
                    <label for="preview_license_type" class="control-label col-lg-3 col-sm-4">{{ trans('resource.labels.preview_license_type') }}</label>
                    <div class="col-lg-9 col-sm-8" id="preview_license_type"></div>
                </div>
            </form>
        </div>
        <div id="previewFinish" class="tab-pane">
            <div class="clearfix">
                <h3 class="pull-left">
                    <strong>{{ trans('resource.headings.finish') }}</strong>
                </h3>
                <h4 class="pull-right" style="display: inline">
                    <strong>{{ trans('resource.links.need_help') }}</strong>
                </h4>
            </div>
            <div>
                <p>{{ trans('resource.description.thankyou_for_submission_finish') }}</p>
            </div>

            <form class="form-horizontal" method="GET" name="frmFinishScreen" id="frmFinishScreen" action="">
                <div class="form-group">
                    <label class="control-label col-lg-3 col-sm-4">
                        <div class="pull-right" style="min-height: 150px; min-width: 185px; background: #ccc;">
                            <img id="finish_preview_img" alt="img" src="">
                        </div>
                    </label>
                    <div class="col-lg-9 col-sm-8">
                        <h3 class="date" id="finish_preview_date"></h3>
                        <h3 class="title" id="finish_preview_title"></h3>

                        <div class="form-group required">
                            <div class="col-lg-9 col-sm-8" id="finish_preview_pub_orgs"></div>
                        </div>
                        <div class="form-group required">            
                            <div class="col-lg-9 col-sm-8" id="finish_preview_abstract"></div>
                        </div>
                    </div><!--end of col-9-->
                </div>
            </form>
        </div>
        <ul class="pager wizard">
            <li class="previous first" style="display:none;"><a href="#">First</a></li>
            <li class="btn-previous previous" @if(Auth::user() && !Auth::user()->isSuperAdmin() && !AuthHelper::isKcAdmin()) style="display:none;" @endif><a href="#!">Previous</a></li>
            @if(Auth::user() && !Auth::user()->isSuperAdmin() && !AuthHelper::isKcAdmin())
            <li class="lets-begin text-center disabled"><a href="#!">Lets Begin</a></li>
            @endif
            @if($resource->editType != "edit")
            <li class="save-and-exit text-center"><a href="#!">Save & Exit</a></li>
            @endif
            <li class="btn-view-status-in-dashboard text-center" style="display:none;"><a href="#!">View Status in Dashboard</a></li>
            <li class="btn-submit-resource next text-center" style="display:none;"><a href="#!">Submit</a></li>
            <li class="next last" style="display:none;"><a href="#">Last</a></li>
            <li class="btn-next next sa-add-option" @if(Auth::user() && !Auth::user()->isSuperAdmin() && !AuthHelper::isKcAdmin()) style="display:none;" @endif>
                <a href="#!">Next</a>
                <ul>
                    <li id="sa-pending"><a href="#">Pending</a></li>
                    <li id="sa-approved"><a href="#">Approved</a></li>
                    <i class="fa fa-caret-down"></i>
                </ul>
            </li>
        </ul>
    </div>
</div>
@stop
