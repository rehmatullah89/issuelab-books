@extends('app')

@section('content')
    {!! link_to_action('CategoryController@index', '&#8592;'.trans('category.back_cat_group')) !!}
    @include('shared.message-danger')
    <h1>{{trans('category.add_new_cat_group')}}</h1>

    {!! Former::open()->controller('CategoryController@store')->method('POST') !!}
        @include( 'categories.form', ['submitText' => trans('category.add_new_cat_group')])
    {!! Former::close() !!}
@stop
