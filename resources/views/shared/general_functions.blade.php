<script type="text/javascript">
    function getAddToMyKcOptions(res_id){
    $('#current_resource_id2').val(res_id);
    $('#create_kc_select2').empty();
    $.ajax({
    url: "{{URL('ajax/getKnowledgeCenters')}}",
    data: {
    'res_id': res_id
    },
    success: function (data) {
    $.each(data, function(key, value){
    $('#create_kc_select2').append($("<option></option>").attr("value",key).text(value));
    });
    },
    });
    }

    function getLinkResourceOptions(res_id){
        $('#current_resource_id').val(res_id);
        $('#create_kc_select').empty();
        $('#create_cat_goup_select').empty();
        $('#create_category_select').empty();
        $.ajax({
        url: "{{URL('ajax/getKnowledgeCenters')}}",
        data: {
        'res_id': res_id
        },
        success: function (data) {
                $.each(data, function(key, value){
                    $('#create_kc_select').append($("<option></option>").attr("value",key).text(value));
                });
            },
        });
    }
    function getEditResourceOptions(res_id, kcs){
        $('#current_resource_id4').val(res_id);
        $('#create_kc_select4').empty();
        $('#create_cat_goup_select4').empty();
        $('#create_category_select4').empty();
        $.ajax({
        url: "{{URL('ajax/getMyKnowledgeCenters')}}",
        data: {
        'res_id': res_id,
        'kcs':kcs
        },
        success: function (data) {
                $.each(data.myKcs, function(key, value){
                    $('#create_kc_select4').append($("<option></option>").attr("value",key).text(value));
                });
                $('#create_kc_select4').val(data.selected_kc_id);
                $('#create_cat_goup_select4').val(data.selected_cat_group);
                $('#create_category_select4').val(data.selected_category);
                $('#description').val(data.selected_kc_desc);
                $('#tweetable').val(data.selected_kc_tweet);
                $('#switch_publish').val(data.selected_kc_publish);
                $('#switch_featured').val(data.selected_kc_feature);
            },
        });
    }

    function getAddToFeatureOptions(res_id){
    $('#current_resource_id1').val(res_id);
    $('#create_kc_select1').empty();
    $("#create_feature_check").prop( "checked", false );
    $.ajax({
    url: "{{URL('ajax/getKnowledgeCenters')}}",
    data: {
    'res_id': res_id
    },
    success: function (data) {
    $.each(data, function(key, value){
    $('#create_kc_select1').append($("<option></option>").attr("value",key).text(value));
    });
    },
    });
    }
    function getGroups(kc_id){
    $('#create_cat_goup_select').empty();
    $('#create_category_select').empty();
    $('#create_cat_goup_select4').empty();
    $('#create_category_select4').empty();
    if(kc_id != '' && kc_id != 0){
    $.ajax({
    url: "{{URL('ajax/getCategoryOptions')}}",
    data: {
    'kc_id': kc_id
    },
    success: function (data) {
    if(data != ''){
    $.each(data, function(key, value){
        $('#create_cat_goup_select').append($("<option></option>").attr("value",key).text(value));
        $('#create_cat_goup_select4').append($("<option></option>").attr("value",key).text(value));
    });
    }else{
        $('#create_cat_goup_select').empty();
        $('#create_cat_goup_select4').empty();
       }
    },
    });
    }else
    return false;
    }
    function getCategories(group_id){
        $('#create_category_select').empty();
        $('#create_category_select4').empty();
        if(group_id != '' && group_id != 0){
            $.ajax({
            url: "{{URL('ajax/getGroupCategories')}}",
            data: {
            'group_id': group_id
            },
            success: function (data) {
            if(data != ''){
                $.each(data, function(key, value){
                    $('#create_category_select').append($("<option></option>").attr("value",key).text(value));
                    $('#create_category_select4').append($("<option></option>").attr("value",key).text(value));
                });
                }else{
                    $('#create_category_select').empty();
                    $('#create_category_select4').empty();
                   }
                },
                });
        }else
         return false;
    }
    
    $('#edit_resource_for_kc').click(function(){
     var v = $("#create_category_select4 option:selected").text();
    if(v == ''){
        alert('Please fill all required fields.');
        return false;
    }else
        $('#edit_resc_form').submit();
    });
    
    $('#save_resource_for_category').click(function(){
     var v = $("#create_category_select option:selected").text();
    if(v == ''){
        alert('you need to select at least one category!');
        return false;
    }else
        $('#cat_resc_form').submit();
    });
    
    $('#save_resource_to_featured_listing').click(function(){
    var v = $("#create_kc_select1 option:selected").val();
    if(v == 0 || v == ''){
    alert('you need to select KC first!');
    return false;
    }else
    $('#feature_resc_form').submit();
    });

    $('#save_resource_to_my_kc').click(function(){
    var v = $("#create_kc_select2 option:selected").val();
    if(v == 0 || v == ''){
    alert('you need to select KC first!');
    return false;
    }else
    $('#kc_resc_form').submit();
    });
</script>
