@extends('app')

@section('content')

    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            @include('shared.message')
            {!! link_to_action('UserController@create', 'Add User', null, ['class' => 'btn btn-default pull-left']) !!}

            <div class="pull-right">
                @include('shared.search-form')
            </div>
        </div>
    </div>

    @if($users)
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <ul class="list-unstyled">
                @foreach($users as $user)
                    <li>
                        <div class="pull-right">
                            {!! link_to_action('UserController@edit', 'Edit', $user->identifier, ['class' => 'btn btn-primary', 'role' => 'button']) !!}
                            <button class="btn btn-default" type="button" data-toggle="modal" data-target=".delete-modal" data-name="{{ $user->full_name }}" data-action="{!! action('UserController@destroy', $user->identifier) !!}">Delete</button>
                        </div>
                        <h3>{{ $user->full_name }}</h3>
                        <p>{{ $user->email }}</p>
                    </li>
                @endforeach
                </ul>

                <div class="text-center">{!! $users->appends(['search' => $search])->render() !!}</div>
            </div>
        </div>

        @include('shared.delete-modal')
    @endif
@stop
