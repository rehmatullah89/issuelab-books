<h3><strong>{{ trans('resource.headings.help_improve_issuelab') }}</strong></h3>
<p>
    {{ trans('resource.description.help_improve_issuelab') }}
</p>
<h3><strong>{{ trans('resource.headings.check_to_acknowledge') }}</strong></h3>
<form id="frmAgreeCriteria" name="">
    <div class="btn-group" data-toggle="buttons">
        <label class="btn btn-default btn-xs">
            <input required type="checkbox" autocomplete="off">
            <span class="glyphicon glyphicon-ok"></span>
        </label>
         {{ trans('resource.description.first_agree_criteria') }}
         {{ trans('resource.links.agree_criteria_more') }}
    </div>
    <div class="btn-group" data-toggle="buttons">
        <label class="btn btn-default btn-xs">
            <input required type="checkbox" autocomplete="off">
            <span class="glyphicon glyphicon-ok"></span>
        </label>
         {{ trans('resource.description.second_agree_criteria') }}
         {{ trans('resource.links.agree_criteria_more') }}
    </div>
    <div class="btn-group" data-toggle="buttons">
        <label class="btn btn-default btn-xs">
            <input required type="checkbox" autocomplete="off">
            <span class="glyphicon glyphicon-ok"></span>
        </label>
        {{ trans('resource.description.third_agree_criteria') }}
         {{ trans('resource.links.agree_criteria_more') }}
    </div>
    <div class="btn-group" data-toggle="buttons">
        <label class="btn btn-default btn-xs">
            <input required type="checkbox" autocomplete="off">
            <span class="glyphicon glyphicon-ok"></span>
        </label>
         {{ trans('resource.description.fourth_agree_criteria') }}
         {{ trans('resource.links.agree_criteria_more') }}
    </div>
</form>