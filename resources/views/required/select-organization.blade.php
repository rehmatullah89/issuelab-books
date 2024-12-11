@extends('app')

@section('content')
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <h2>Choose an Organization</h2>
            <p>Please choose an organizational affiliation, below. If your organization doesn't exist yet, we'll create it for you.</p>
            {!! Former::vertical_open()->controller('RequiredActionController@addOrganization')->method('POST') !!}
                {!! Former::text('organization')->addClass('typeahead')->dataLocal('organizations') !!}
                {!! Former::primary_submit('Next')->addClass('pull-right') !!}
            {!! Former::close() !!}
        </div>
    </div>
@stop
