{!! Former::inline_open()->controller('UserController@index')->method('GET')->addClass('search') !!}
    <div class="form-group has-feedback">
        {!! Former::label('Search:', 'search') !!}
        {!! Former::text('search')->addClass('search')->placeholder('Name or Email')->raw() !!}
        <span class="glyphicon glyphicon-remove form-control-feedback hidden" aria-hidden="true"></span>
    </div>
    {!! Former::default_submit('Search') !!}
{!! Former::close() !!}
