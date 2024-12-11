@extends('app')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('shared.message')
            {!! link_to_action('CategoryController@createCategory',trans('category.add_new_category'), array('kc_id'=>$kcId, 'p_id' => $pId), ['class' => 'btn btn-default']) !!}

        </div>
    </div>
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <h3 style="color:#337ab7;">Manage {{$categoryName}} Categories</h3><hr/>
                            @if(empty($categories->items()))
                                <h2 class="text-center">{{ trans("search.no_results") }}</h2>
                            @else
                            <ul class="list-unstyled">
                                @foreach($categories as $cat)
                                    <li>
                                        <div class="pull-right">
                                            {!! link_to_route('categories/editCategory', 'Edit' , [$cat->categoryGroup->identifier,$cat->identifier], ['class' => 'btn btn-primary', 'role' => 'button']) !!}
                                            <button class="btn btn-default" type="button" data-toggle="modal" data-target=".delete-modal" data-name="{{ $cat->category }}" data-action="{!! action('CategoryController@destroy', $cat->id) !!}">Delete</button>
                                        </div>
                                        <h3>{{$cat->category}}</h3>
                                        <p>{{!is_null($cat->knowledgeCenter)?$cat->knowledgeCenter->subdomain:''}}</p>
                                    </li>
                                @endforeach
                            </ul>
                            <div class="text-center">{!! $categories->render() !!}</div>
                            @include('shared.delete-modal')
                            @endif
                        </div>
                    </div>
              
@stop
