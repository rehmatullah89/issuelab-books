<div class='form-group'>
    <div class="col-lg-10 col-sm-8 col-lg-offset-2 col-sm-offset-4">
        {!! Former::checkboxes('')->label('')->checkboxes([$label => $name])->removeClass('form-control')->raw() !!}
    </div>
</div>
