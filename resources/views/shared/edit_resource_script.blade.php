<script type="text/javascript">
    $(document).ready(function(){
        @if(!is_null($resource->research_id))
            var licenseType = "{{$resource->license_type}}";
            
            if(licenseType === "CUSTOM") {
                $("#wizard-radio-custom").trigger('click');
            } else if(licenseType === "CC_LICENSE") {
                $("#wizard-radio-cc-license").trigger('click');
            } else {
                $("#wizard-radio-no-license").trigger('click');
            }
        @endif
        
        @if(!is_null($resource->research_id) && !is_null($resource->cover_graphic_type))
            var savedCoverGraphicType = "{{$resource->cover_graphic_type}}";
        
            if(savedCoverGraphicType==1) {
                $('#rowPdfCover').css('background', '#FEF4E8');
            } else if(savedCoverGraphicType==2) {
                $('#rowCustomCover').css('background', '#FEF4E8');
                $('#customCoverUpload').show();
            } else {
                $('#rowDefaultCover').css('background', '#FEF4E8');
            }
        @endif
        
        @if(!is_null($resource->filename) && $resource->filename!=="")
            var filename = "{{$resource->filename}}";
            $("#dropzone").remove();
            $("#dropzone-file").removeClass('hidden').empty().css('color','#BECF67').html(
                    '<strong>' + filename + '</strong> was successfully uploaded.'
            );
        @endif
        
        @if(Auth::user()->isSuperadmin() && !is_null($resource->publish_status) && ($resource->publish_status=="APPROVED" || $resource->publish_status=="PENDING"))
            setupPreviewForResource();
            $('#resourceWizard').bootstrapWizard('show', 1);
        @endif
    });
    
    function manageSubmitButtonText() {
        @if(Auth::user()->isSuperadmin())
            $('ul.pager li.btn-next').addClass('sa-add-option');
            $('ul.pager li.btn-next a').html('Add as ..');
            $('ul.pager li#sa-pending a').html('Pending');
            $('ul.pager li#sa-approved a').html('Approved');
            $('.sa-add-option').on('mouseover', function(){
                $('.sa-add-option ul').show();
            });
            $('li#sa-pending').on('click', function() {
                $('#addEssentials #add_as').val('PENDING');
                submitResource();
            });
            $('li#sa-approved').on('click', function() {
                $('#addEssentials #add_as').val('APPROVED');
                submitResource();
            });
        @elseif(AuthHelper::isKcAdmin())            
            $('ul.pager li.btn-next').addClass('ka-add-option');
            $('ul.pager li.btn-next a').html('Done & ..');
            $('ul.pager li#sa-pending a').html('Publish Later');
            $('ul.pager li#sa-approved a').html('Publish Now');
            $('.ka-add-option').on('mouseover', function(){
                $('.ka-add-option ul').show();
            });
            $('li#sa-pending').on('click', function() {
                $('#addEssentials #add_as').val('DRAFT');
                submitResource();
            });
            $('li#sa-approved').on('click', function() {
                $('#addEssentials #add_as').val('PUBLISHED');
                submitResource();
            });
        @else
            $('ul.pager li.btn-next a').html('Submit');
        @endif
    }
    
    function finishResource() {
        alert('Your resource successfully submitted.')
        setupPreviewForFinish();
    }
    
</script>