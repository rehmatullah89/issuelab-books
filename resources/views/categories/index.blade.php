@extends('app')

@section('content')

    <div class="row">
        <div class="col-md-12">
            @include('shared.message')
            {!! link_to_action('CategoryController@create', trans('category.add_new_cat_group'), null, ['class' => 'btn btn-default']) !!}
        </div>
    </div>
                @if($kcs)
                    <div class="row">
                       <div class="col-md-8 col-md-offset-2">
                            <h3>Manage Category Groups</h3><hr/>
                            @if(empty($kcs->items()))
                                <h2 class="text-center">{{ trans("search.no_results") }}</h2>
                            @endif
                            <table class="table">
                            <thead>
                              <tr>
                                <th>Subdomain</th>
                                <th>Category Group<div class="pull-right">Actions</div></th>
                                </tr>
                            </thead>
                            <tbody>
                              @foreach($kcs as $kc)
                                  <?php $categories = \App\Category::where('kc_id','=', $kc->id)->where('p_id', '=', 0)->get(); ?>
                                  <tr>
                                    <td>{{$kc->subdomain}}</td>
                                    <td>
                                        @foreach($categories as $cat)
                                            <div class="pull-right">
                                                {!! link_to_action('CategoryController@edit', 'Edit' , $cat->identifier, ['class' => 'btn btn-primary btn-xs', 'role' => 'button']) !!}
                                                <button class="btn btn-default btn-xs" type="button" data-toggle="modal" data-target=".delete-modal" data-name="{{ $cat->category }}" data-action="{!! action('CategoryController@destroy', $cat->id) !!}">Delete</button>    
                                            </div>
                                            <h4>{!! link_to_action('CategoryController@groupCategories', $cat->category , [$cat->knowledgeCenter->subdomain,$cat->identifier]) !!}</h4>
                                            <p>
                                                @if(sizeof($cat->groupCategories) > 0)
                                                    @foreach($cat->groupCategories as $catGroup)
                                                    {{!is_null($catGroup->category)?$catGroup->category:''}}, 
                                                    @endforeach
                                                @else 
                                                    {{'No Categories!'}}
                                                @endif
                                            </p>
                                        @endforeach
                                    </td>
                                  </tr>
                              @endforeach
                            </tbody>
                          </table>
                        <div class="text-center">{!! $kcs->render() !!}</div>
                      </div>
                    </div>
                
                    @include('shared.delete-modal')
               @endif
@stop
