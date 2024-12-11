@extends('app')

@section('content')
    <div class="row">
        {!! link_to_action('CategoryController@index', '&#8592;'.trans('category.back_cat_group')) !!}

        @include('shared.message')
        <div class="col-lg-10 col-sm-8 col-lg-offset-2 col-sm-offset-4">
            <h1>Edit: {{ $cat->category }}</h1>
        </div>

        {!! Former::open()->controller('CategoryController@update', $cat->identifier)->method('PATCH')->populate($cat)->addClass('repeater') !!}
            @include( 'categories.form', ['submitText' => trans('category.update_cat_group')])
        {!! Former::close() !!}
    </div>
@stop
