    <!-- for Category create/edit -->
    @if(isset($kcId) && isset($pId) && $pId != 0)
    {!! Former::text('category','Category Name') !!}
    @else
    {!! Former::text('category','Category Group Name') !!}
    @endif
    
    <!-- for group create/edit -->
    @if(isset($cat) && is_null($cat->categoryGroup))
        {!! Former::hidden('kc_id')->value($kcId) !!}
        {!! Former::hidden('p_id')->value($category) !!}
    @else
        @if(isset($kcId) && isset($pId))
            {!! Former::hidden('kc_id')->value($kcId) !!}
            {!! Former::hidden('p_id')->value($pId) !!}
        @else
            {!! Former::select('kc_id','Knowledge Center')->options($knowledgeCenters,$kcId)->placeholder('Select a Knowledge Center!')->state('warning') !!}
            {!! Former::hidden('p_id')->value($category) !!}
        @endif
    @endif
    {!! Former::actions(Former::primary_submit($submitText)) !!}
