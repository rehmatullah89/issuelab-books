$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('input[name="_token"]').val()
        }
    });
    
    $('#resourceWizard').bootstrapWizard({
        onInit: function(tab, navigation, index) {
        },
        onNext: function(tab, navigation, index) {
            var totalNav = navigation.find('li').length;
            var stepId = $('div.add-step:visible').prop('id');
            if (typeof(stepId) !== "undefined") {
                var stepNum = $('#' + stepId + ' input[name="step_num"]').val();
                if(stepNum == 1) { //validating first form
                    $('#frmAddEssentials').validator('validate');
                    if($("#frmAddEssentials div.form-group").hasClass("has-error")) {
                        return false;
                    } else {
                        if($('#user_choice_on_duplicate').val() !== "CONTINUE") {
                            var found = checkDuplicateResource();
                            if(found) {
                                $('.buttons-final').show();
                                showQtipForDuplicateResource();
                                return false;
                            } else {
                                $('.buttons-final').hide();
                            }
                        }
                    }
                    
                    $('.add-step-' + stepNum).hide();
                    $('.add-step-' + (Number(stepNum) + Number(1))).removeClass('hidden');
                    $('ul.pager li.btn-previous').removeClass('disabled');
                    return false;
                        
                        
                } else if(stepNum == 2) {
                    $('#addResourceMetaData').validator('validate');
                    if($("#addResourceMetaData div.form-group").hasClass("has-error")) {
                        return false;
                    }
                    
                    if(!validateIssueAreas()) {
                        return false;
                    }
                    if(window.Data.kcAdmin && !validateKcs()) {
                        return false;
                    }
                    if(window.Data.superAdmin && !validateKcsForSuperUser()) {
                        return false;
                    }
                    
                    $('.add-step-' + stepNum).hide();
                    $('.add-step-' + (Number(stepNum) + Number(1))).removeClass('hidden');
                    $('ul.pager li.btn-previous').removeClass('disabled');
                    return false;
                    
                } else if(stepNum == 3) {
                    var licenceOption = $('input[name="license"]:checked', '#frmLicenceOptions').val();
                     if (typeof(licenceOption) === "undefined") {
                         alert('please select any option');
                         return false;
                     }
                    if(licenceOption !== "NO_LICENCE") {
                        $('#frmLicenceOptions').validator('validate');
                        if($("#choseLicenceOption div.form-group").hasClass("has-error")) {
                            return false;
                        }
                    }
                    
                    $('.add-step-' + stepNum).hide();
                    $('.add-step-' + (Number(stepNum) + Number(1))).removeClass('hidden');
                    $('ul.pager li.btn-previous').removeClass('disabled');
                    return false;
                } else if(stepNum == 4) {
                    var coverGraphicType = $('#addcoverGraphic input[name="coverGraphicType"]:checked').val();
                    if(coverGraphicType==2) {
                        if(typeof(window.Data.customCoverUploaded) === "undefined") {
                            alert('Please upload any custom cover graphic or choose any other option.')
                            return false;
                        }
                    }
                }
            }
            
            if ((index == 2 && navigation.find('li').length == 4) || (index == 1 && navigation.find('li').length == 3)) {
                setupPreviewForResource();
            }
            
            if ((index == 3 && navigation.find('li').length == 4) || (index == 2 && navigation.find('li').length == 3)) {
                var status;
                if(window.Data.generalUser) {
                    submitResource();
                } else {
                    return false;
                }
//                if(window.submitStatus) {
//                    alert('Your resource successfully submitted.')
//                }
//                setupPreviewForFinish();
//                return false;
            }
        },
        onPrevious: function(tab, navigation, index) {
            var stepId = $('div.add-step:visible').prop('id');
            var totalNav = navigation.find('li').length;
            if (typeof(stepId) !== "undefined") {
                var stepNum = $('#' + stepId + ' input[name="step_num"]').val();
                if (stepNum != 1) { //2//3//4
                    $('.add-step-' + stepNum).addClass('hidden');
                    $('.add-step-' + (Number(stepNum) - Number(1))).show();
                    if (totalNav === 3 && stepNum == 2) {
                        $('ul.pager li.btn-previous').addClass('disabled');
                    }
                    return false;
                }
            } else {
                setTimeout(function() {
                    $('ul.pager li.btn-previous').removeClass('disabled');
                }, 1000);
            }
        },
        onTabShow: function(tab, navigation, index) {
            if (index == 0 && navigation.find('li').length == 4) {
                $('ul.pager li.lets-begin').show();
                $('ul.pager li.btn-next').hide();
                $('ul.pager li.btn-previous').hide();
                $('ul.pager li.save-and-exit').hide();
            }
            
            //finish tab
            if ((index == 2 && navigation.find('li').length == 3) || (index == 3 && navigation.find('li').length == 4)) {
                $('ul.pager li.btn-view-status-in-dashboard').show();
                $('ul.pager li.btn-submit-resource').hide();
                $('ul.pager li.btn-next').hide();
                $('ul.pager li.btn-previous').hide();
                $('ul.pager li.save-and-exit').hide();
            }
            
            //preview tab
            if ((index == 1 && navigation.find('li').length == 3) || (index == 2 && navigation.find('li').length == 4)) {
                manageSubmitButtonText();
            } else {
                $('ul.pager li.btn-next').removeClass('sa-add-option');
                $('ul.pager li.btn-next').removeClass('ka-add-option');
                $('ul.pager li.btn-next a').html('Next');
            }
        },
        onTabClick: function(tab, navigation, index) {
            return false;
        }
    });
    
    /**
     * Just animating the wizard
     */
    $(".container #resourceWizard").animate({
        opacity: '1'
    }, 500);
    
    /**
     * Checking if all the criteria was accepted by a normal user
     */
    
    $('#frmAgreeCriteria input[type="checkbox"]').change(function(){
        var cbxLength = $('#frmAgreeCriteria input[type="checkbox"]:checked').length;
        if(cbxLength === 4) {
            $('ul.pager li.lets-begin').removeClass('disabled');
         } else {
             if(!$('ul.pager li.lets-begin').hasClass('disabled')) {
                 $('ul.pager li.lets-begin').addClass('disabled');
             }
         }
    });
    
    /**
     * Lets begin button control
     */
    $('ul.pager li.lets-begin').on('click', function(){
        if($('ul.pager li.lets-begin').hasClass('disabled')) {
            return false;
        }
        $('#resourceWizard').bootstrapWizard('show',1);
        $('ul.pager li.lets-begin').hide();
        $('ul.pager li.btn-next').show();
        $('ul.pager li.btn-previous').show();
        $('ul.pager li.save-and-exit').show();
    });
    
    /**
     * SELECT2
     */
    $('#issue_areas').select2({
         data: window.Data.issueAreas,
         maximumSelectionSize: '3'
     });
    $('#language').select2({
         data: window.Data.languages
    });
    $('#doctype').select2({
         data: window.Data.docTypes
    });
    $('#knowledgeCenters').select2({
         data: window.Data.knowledgeCenters
    });
    
    /**
     * Bootstrap switch for publishing resource to issuelab
     */
    $("#publish_to_issuelab").bootstrapSwitch({'onText':'YES', 'offText':'NO'});
     
    $('#pub_date').datetimepicker({
          format: 'MM/DD/YYYY'
    });
    
    $('#fileupload').fileupload({
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .bar').css(
                'width',
                progress + '%'
            );
        },
        dataType: 'json',
        add: function (e, data) {
            var uploadErrors = [];
            var acceptFileTypes = /(\.|\/)(jpe?g|png|pdf|vnd.ms-excel|vnd.openxmlformats-officedocument.spreadsheetml.sheet|msword|vnd.openxmlformats-officedocument.wordprocessingml.document)$/i;
            if(data.originalFiles[0]['type'].length && !acceptFileTypes.test(data.originalFiles[0]['type'])) {
                uploadErrors.push('Allowed extensions are pdf|doc|docx|xls|xlsx|png|jpg|jpeg');
            }
            if(data.originalFiles.length > 1) {
                uploadErrors.push('You can only drop a single file.');
            }
            if(data.originalFiles[0]['size'].length && data.originalFiles[0]['size'] > 5000000) {
                uploadErrors.push('Filesize is too big.');
            }
            if(uploadErrors.length > 0) {
                alert(uploadErrors.join("\n"));
            } else {
                
                $("#uplaodOverlay").css({
                    width :  $('#addEssentials').width()+"px",
                    height :  $('#addEssentials').height()+"px"
                 }).show();
                 $('.upload-overlay button').show();
                 $('.upload-text').text('Uploading...');
                 $('#progress').show();
                 data.submit();
            }
        },
        dropZone: $('#dropzone'),
        done: function (e, data) {
            $('.upload-text').text('Upload finished.');
            $('.upload-overlay button').hide();
            $('#progress').hide();
            $("#uplaodOverlay").hide();
            $("#dropzone").remove();
            $("#dropzone-file").removeClass('hidden').empty().css('color','#BECF67').html(
                    '<strong>' + data.files[0].name + '</strong> successfully uploaded.'
            );
            $("#file_name").val(data.result.fileName);
            if(data.result.coverPath!=="") {
                $("#pdfCover").empty().html('<img src="'+data.result.coverPath+'" alt="PDF Cover">'); 
            }
            if(data.result.extension==="pdf") {
                $("#rowPdfCover").show();
            } else {
                $("#rowPdfCover").hide(); 
            }
            $('.cur_res_id').val(data.result.resourceId);
        }
    });
    
    $('#customCoverUpload').fileupload({
        progressall: function (e, dataCover) {
            var progress = parseInt(dataCover.loaded / dataCover.total * 100, 10);
            $('#cover-progress .cover-bar').css(
                'width',
                progress + '%'
            );
        },
        dataType: 'json',
        add: function (e, dataCover) {
            var uploadErrorsForCover = [];
            var acceptFileTypesForCover = /(\.|\/)(gif|jpe?g|png)$/i;
            if(dataCover.originalFiles[0]['type'].length && !acceptFileTypesForCover.test(dataCover.originalFiles[0]['type'])) {
                uploadErrorsForCover.push('Only gif, jpeg, jpg or png files are allowed.');
            }
            if(dataCover.originalFiles[0]['size'].length && dataCover.originalFiles[0]['size'] > 5000000) {
                uploadErrorsForCover.push('Filesize is too big.');
            }
            if(uploadErrorsForCover.length > 0) {
                alert(uploadErrorsForCover.join("\n"));
            } else {
                $('#cover-progress').show();
                dataCover.submit();
            }
        },
        done: function (e, dataCover) {
            $('#cover-progress').hide();
            if(dataCover.result.coverPath!=="") {
                $("#customCover").empty().html('<img src="'+dataCover.result.coverPath+'" alt="Custom Cover">');
                window.Data.customCoverUploaded = "true";
            }
            $('.cur_res_id').val(dataCover.result.resourceId);
        }
    });
     
    $(document).bind('dragover', function (e) {
        var dropZone = $('#dropzone'),
            timeout = window.dropZoneTimeout;
        if (!timeout) {
            dropZone.addClass('in');
        } else {
            clearTimeout(timeout);
        }
        var found = false,
            node = e.target;
        do {
            if (node === dropZone[0]) {
                found = true;
                break;
            }
            node = node.parentNode;
        } while (node != null);
        if (found) {
            dropZone.addClass('hover');
        } else {
            dropZone.removeClass('hover');
        }
        window.dropZoneTimeout = setTimeout(function () {
            window.dropZoneTimeout = null;
            dropZone.removeClass('in hover');
        }, 100);
    }); 
     
     $(document).bind('drop dragover', function (e) {
        e.preventDefault();
    });
    
    $('.buttons-final .remove-resource').on('click', function(){
        showQtipForDeleteResource();
    });
    
    $('body').on('click', '#btnDeleteResource', function(){
        location.reload();
    });
    
    $('body').on('click', '#continue_adding_my_resource', function(){
        var whatUserLikesToDoForDuplicateResource = $('input[name="whatUserLikesToDo"]:checked').val();
        if(whatUserLikesToDoForDuplicateResource === "CONTINUE-ADDING") {
            $('#user_choice_on_duplicate').val('CONTINUE')
        }
    });
    
    /**
     * Licencing option radio/checkboxes buttons
     */
    $('[rel="tooltip"]').tooltip();

    /**
     * License screen -> radio button styles
     */
    $('[data-toggle="wizard-radio"]').click(function(){
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').prop('checked', false);
        $(this).find('[type="radio"]').prop('checked','true');
        var licenseOption = $('input[name="license"]:checked', '#frmLicenceOptions').val();
        $('.license-options').hide();
        $('#'+licenseOption).show();        
    });
    
//    $('[data-toggle="wizard-checkbox"]').click(function(){
//        if( $(this).hasClass('active')){
//            $(this).removeClass('active');
//            $(this).find('[type="checkbox"]').removeAttr('checked');
//        } else {
//            $(this).addClass('active');
//            $(this).find('[type="checkbox"]').attr('checked','true');
//        }
//    });
    
    $('#issue_areas').change(function(){
        validateIssueAreas();
    });
    
    if(window.Data.kcAdmin) {
        $('#knowledgeCenters').change(function(){
            validateKcs();
        });
    }
    
    /**
     * add cover screen -> radio button effects
     */
    $('#addcoverGraphic input[type="radio"]').iCheck({
      checkboxClass: 'icheckbox_flat-orange',
      radioClass: 'iradio_flat-orange'
    });
    
    /**
     * add cover screen -> background color effect
     */
    $('#addcoverGraphic input[name="coverGraphicType"]').on('ifChanged', function(){
        $('#addcoverGraphic .row').css('background', '#fff');
        $(this).parent().parent().parent().parent().css('background', '#FEF4E8');
        if($(this).val()==2){
            $('#customCoverUpload').show();
        } else {
            $('#customCoverUpload').hide();
        }
    });
    
    
    /**
     * save unfinished changes
     */
    $('ul.pager li.save-and-exit').on('click', function() {
        saveUnfinishedChanges();
    });
    
    $('body').on('click', function(){
        $('.sa-add-option ul').hide();
        $('.ka-add-option ul').hide();
    });
}); // end document ready

function showQtipForDuplicateResource() {
    $('.check-resorce').qtip({
        content: {
              text: '<div style="text-align:center">'+
                        '<h4>We found a duplicate listing for this resource.</h4>'+
                        '<div class="col-md-12" style="margin-top:10px">'+
                            '<button class="btn btn-default close-tip" style="margin:5px" type="button">Cancel</button>'+
                            '<button id="btnResolve" data-target="#duplicateResources" data-toggle="modal" style="cursor:pointer; margin:5px" data-keyboard="false" data-backdrop="static" class="btn btn-default close-tip" type="button">Resolve</button>'+
                        '</div>'+
                     '</div>'
          },
        style: {
              classes: 'qtip-rounded qtip-bootstrap'
          },
         hide: {
              event: false
          },
        show: {
              target: $('.check-resorce'), // Defaults to target element
              event: 'click', // Show on mouse over by default
              effect: true, // Use default 90ms fade effect
              solo: false, // Do not hide others when showing
              ready: true, // Do not show immediately
          },
        position: {
          my: 'bottom center',  // Position my top left...
          at: 'top center', // at the bottom right of...
          target: $('.check-resorce') // my target
        }
      });
      $('body').on('click', '.close-tip', function(){
          $('.check-resorce').qtip('hide');
      });
}

function showQtipForDeleteResource() {
    $('.buttons-final .remove-resource').qtip({
        content: {
              text: '<div style="text-align:center">'+
                        '<h4>Are you sure you want to delete this resource?</h4>'+
                        '<div class="col-md-12" style="margin-top:10px">'+
                            '<button class="btn btn-default close-tip" style="margin:5px" type="button">Cancel</button>'+
                            '<button id="btnDeleteResource" style="cursor:pointer; margin:5px" class="btn btn-default close-tip" type="button">Delete</button>'+
                        '</div>'+
                     '</div>'
          },
        style: {
              classes: 'qtip-rounded qtip-bootstrap'
          },
         hide: {
              event: false
          },
        show: {
              target: $('.buttons-final .remove-resource'), // Defaults to target element
              event: 'click', // Show on mouse over by default
              effect: true, // Use default 90ms fade effect
              solo: false, // Do not hide others when showing
              ready: true, // Do not show immediately
          },
        position: {
          my: 'bottom center',  // Position my top left...
          at: 'top center', // at the bottom right of...
          target: $('.buttons-final .remove-resource') // my target
        }
      });
      $('body').on('click', '.close-tip', function(){
          $('.buttons-final .remove-resource').qtip('hide');
      });
}

//function checkDuplicateResource() {
//    var $this = $('#title');
//    var found = false;
//    $.ajax({
//        url: $this.data('url')+'/'+$this.val(),
//        dataType: 'json', // JSON
//        async: false,
//        success: function(data) {
//            if(data.length > 0) {
//               found = true;
//               prepareDuplicateResourceLayout(data);
//            }
//        }
//    });
//    return found;
//}

function checkDuplicateResource() {
    var found = false;
    $('#frmAddEssentials').unbind('submit').bind('submit',function(e) {
        e.preventDefault();
        var $thisForm = $(this);
        startAjaxLoading();
        $.ajax({
            url: $thisForm.data('duplicateaction'),
            type: 'POST',
            data: $thisForm.serialize(),
            dataType: 'json', // JSON
            success: function(data) {
                if(data.length > 0) {
                    found = true;
                    prepareDuplicateResourceLayout(data);
                }
                stopAjaxLoading();
            },
            async: false,
        });
        return found;
    });
    $('#frmAddEssentials').submit();
    return found;
}

function submitResource() {
    window.submitStatus = false;
    $('#frmAddEssentials').unbind('submit').bind('submit',function(e) {
        e.preventDefault();
        startAjaxLoading();
        var $frmAddEssential = $(this);
        var $addResourceMetaData = $('#addResourceMetaData');
        var $frmLicenceOptions = $('#frmLicenceOptions');
        var $frmAddCoverGraphic = $('#frmAddcoverGraphic');
        
        var postData = {};
        postData['frmAddEssential'] = $frmAddEssential.serialize();
        postData['addResourceMetaData'] = $addResourceMetaData.serialize();
        postData['frmLicenceOptions'] = $frmLicenceOptions.serialize();
        postData['frmAddCoverGraphic'] = $frmAddCoverGraphic.serialize();
        
        $.ajax({
            url: $frmAddEssential.data('submitresource'),
            type: 'POST',
            data: postData,
            dataType: 'json', // JSON
            success: function(data) {
                if(data.response) {
                    finishResource();
                    //window.submitStatus = true;
                }
                var navLength = $('ul.bwizard-steps.clearfix.clickable.nav.nav-pills').find('li').length;
                $('#resourceWizard').bootstrapWizard('show', Number(navLength)-1);
                stopAjaxLoading();
            },
            async: false,
        });
    });
    $('#frmAddEssentials').submit();
}

function saveUnfinishedChanges() {
    var status = false;
    $('#frmAddEssentials').unbind('submit').bind('submit',function(e) {
        e.preventDefault();
        startAjaxLoading();
        var $frmAddEssential = $(this);
        var $addResourceMetaData = $('#addResourceMetaData');
        var $frmLicenceOptions = $('#frmLicenceOptions');
        var $frmAddCoverGraphic = $('#frmAddcoverGraphic');

        var postData = {};
        postData['frmAddEssential'] = $frmAddEssential.serialize();
        postData['addResourceMetaData'] = $addResourceMetaData.serialize();
        postData['frmLicenceOptions'] = $frmLicenceOptions.serialize();
        postData['frmAddCoverGraphic'] = $frmAddCoverGraphic.serialize();
        
        $.ajax({
            url: $frmAddEssential.data('unfinishedsubmission'),
            type: 'POST',
            data: postData,
            dataType: 'json', // JSON
            success: function(data) {
                if(data.response) {
                    status = true;
                    $('.cur_res_id').val(data.resourceId);
                    location.reload();
                }
                stopAjaxLoading();
            },
            async: false,
        });
    });
    $('#frmAddEssentials').submit();
    return status;
}

function prepareDuplicateResourceLayout(data) {
    var yourReourceHtml = "";
    var duplicateReourceHtml = "";
    yourReourceHtml += '<div class="row">'+
                        '<div class="col-sm-12 text-center">'+
                            '<strong>Your resource</strong>'+
                        '</div><!--end of col-12-->'+
                        '<div class="col-sm-3 text-center">'+
                            '<img alt="img" src="">'+
                        '</div><!--end of col-3-->'+
                        '<div class="col-sm-9">'+
                            '<h3 class="title">'+
                                $('#title').val()+
                            '</h3>'+
                            '<p class="date">'+formatDate($('#pub_date').val())+'</p>'+
                            '<p class="org">'+
                                $('#pub_org').val()+
                            '</p>'+
                        '</div><!--end of col-9-->'+
                    '</div>';
            
    duplicateReourceHtml += '<div class="row">'+
                                '<div class="col-sm-12 text-center">'+
                                    '<strong>'+data.length+' Duplicates Found on issueLab:</strong>'+
                                '</div><!--end of col-12-->'+
                            '</div>';
                    
    for(var d in data) { 
        var re = new RegExp('.png', 'g');
        var cover_graphic = data[d].cover_graphic;
        cover_graphic = cover_graphic.replace(re, '.jpg');
        
        duplicateReourceHtml += '<div class="row">'+
                                    '<div class="col-sm-3 text-center">'+
                                        '<img alt="img" src="http://www.issuelab.org/application/images/cover_graphics/185/'+cover_graphic+'">'+
                                    '</div><!--end of col-3-->'+
                                    '<div class="col-sm-9">'+
                                        '<h3 class="title">'+
                                            data[d].title+
                                        '</h3>'+
                                        '<p class="date">'+formatDate(data[d].date_added.substring(0, 10))+'</p>'+
                                        '<p class="org">'+
                                            data[d].title+
                                        '</p>'+
                                        '<a href="http://www.issuelab-dev.org/resource/'+data[d].identifier+'">View this Listing</a>'+
                                    '</div><!--end of col-9-->'+
                                '</div>';
    }
    
    duplicateReourceHtml += '<div class="row">'+
                                '<div class="col-sm-12 text-center">'+
                                    '<hr>'+
                                '</div><!--end of col-12-->'+
                                '<div class="col-sm-3 text-center">'+
                                '</div><!--end of col-3-->'+
                                '<div class="col-sm-9">'+
                                    '<strong>Would you like to:</strong>'+
                                    '<div class="">'+
                                        '<label class="" style="padding-right:5px">'+
                                            '<input required type="radio" name="whatUserLikesToDo" value="SUGGEST-EDIT" autocomplete="off">'+
                                        '</label>'+
                                        'Suggest an edit to existing listing'+
                                    '</div>'+
                                    '<div class="" >'+
                                        '<label class="" style="padding-right:5px">'+
                                            '<input required type="radio" name="whatUserLikesToDo" value="CONTINUE-ADDING" checked="checked" autocomplete="off">'+
                                        '</label>'+
                                        'Ignore and continue adding my resource'+
                                    '</div>'+
                                '</div><!--end of col-9-->'+
                            '</div>';
    $("#duplicateResources .modal-body").empty().html(yourReourceHtml).append(duplicateReourceHtml);
}

function formatDate(date) {
    var monthNames = new Array("January", "February", "March", 
                        "April", "May", "June", "July", "August", "September", 
                        "October", "November", "December");
    var d = new Date(date);
    var dayOfMonth = d.getDate();
    var monthOfYear = d.getMonth();
    var year = d.getFullYear();
    if(typeof(monthOfYear) === "undefined" || isNaN(dayOfMonth) || isNaN(year)) {
        return date;
    } else {
        return monthNames[monthOfYear] + " " + dayOfMonth + ", " +  year;
    }
}

function getYearFromDate(date) {
    var d = new Date(date);
    var year = d.getFullYear();
    return year;
}

function setupPreviewForResource() {
    var htmlForOrganizations="";
    var htmlForIssueAreas="";
    var htmlForLanguages="";
    var htmlForDocTypes="";
    var htmlForAuthors="";
    var htmlForFunders="";
    var htmlForGeoFocus="";
    var htmlForUniversalIdentifiers="";
    var htmlForLicenseType="";
    var htmlForKnowledgeCenters="";
    var coverGraphicType = $('#addcoverGraphic input[name="coverGraphicType"]:checked').val();
    var coverGraphic = "default-cover";
    if(coverGraphicType==1) {
        coverGraphic = $('#pdfCover img').prop('src');
    } else if(coverGraphicType==2) {
        coverGraphic = $('#customCover img').prop('src');
    } else {
        coverGraphic = $('#defaultCover img').prop('src');
    }
    $('#previewResource #preview_img').prop(
            'src', coverGraphic
    );
    $('#previewFinish #finish_preview_img').prop(
            'src', coverGraphic
    );
    $('#previewResource #preview_title').empty().html($('#addEssentials #title').val());
    $('#previewResource #preview_external_url').empty().html($('#addEssentials #link_to_external').val());
    $('#previewResource #preview_external_url').prop('href', $('#addEssentials #link_to_external').val());
    $('#previewResource #preview_pub_date').empty().html(
            '<div class="preview-row">'+
                $('#addEssentials #pub_date').val()+
            '</div>'
    );
    
    //organizations
    $('#addEssentials input[name^="organizations"]').each(function(){
        htmlForOrganizations += '<div class="preview-row">'+$(this).val()+'</div>';
    });
    $('#previewResource #preview_pub_orgs').empty().html(htmlForOrganizations);
    
    //Authors
    $('#addResourceMetaData input[name^="authors"]').each(function(){
        htmlForAuthors += '<div class="preview-row">'+$(this).val()+'</div>';
    });
    $('#previewResource #preview_authors').empty().html(htmlForAuthors);
    
    //Funders
    $('#addResourceMetaData input[name^="funders"]').each(function(){
        htmlForFunders += '<div class="preview-row">'+$(this).val()+'</div>';
    });
    $('#previewResource #preview_funders').empty().html(htmlForFunders);
    
    //Geographical focus
    $('#addResourceMetaData input[name^="coverages"]').each(function(){
        htmlForGeoFocus += '<div class="preview-row">'+$(this).val()+'</div>';
    });
    $('#previewResource #preview_geographic_focus').empty().html(htmlForGeoFocus);
    
    //Universal Identifier
    $('#addResourceMetaData input[name^="universal_identifiers"]').each(function(){
        htmlForUniversalIdentifiers += '<div class="preview-row">'+$(this).val()+'</div>';
    });
    $('#previewResource #preview_universal_identifier').empty().html(htmlForUniversalIdentifiers);
    
    //abstract
    $('#previewResource #preview_abstract').empty().html($('#addResourceMetaData #abstract').val());
    
    //issue areas
    $('select#issue_areas option:selected').each(function(){
        htmlForIssueAreas += '<div class="preview-block">'+$(this).text()+'</div>';
    });
    $('#previewResource #preview_issue_areas').empty().html(htmlForIssueAreas);
    
    //languages
    $('select#language option:selected').each(function(){
        htmlForLanguages += '<div class="preview-block">'+$(this).text()+'</div>';
    });
    $('#previewResource #preview_language').empty().html(htmlForLanguages);
    
    //doctypes
    $('select#doctype option:selected').each(function(){
        htmlForDocTypes += '<div class="preview-block">'+$(this).text()+'</div>';
    });
    $('#previewResource #preview_doctype').empty().html(htmlForDocTypes);
    
    //knowledge centers
    if(!window.Data.generalUser) {
        $('select#knowledgeCenters option:selected').each(function(){
            htmlForKnowledgeCenters += '<div class="preview-block">'+$(this).text()+'</div>';
        });
        $('#previewResource #preview_knowledge_center').empty().html(htmlForKnowledgeCenters);
        
        //publish to issuelab checkbox
        $('#previewResource #preview_publish_to_issuelab').empty().html(($('#addResourceMetaData #publish_to_issuelab').bootstrapSwitch('state')===true?'<div class="preview-row">Yes</div>':'<div class="preview-row">No</div>'));
    }
    
    //License option
    var licenceOption = $('input[name="license"]:checked', '#frmLicenceOptions').val();
    if(licenceOption === "CUSTOM") {
       htmlForLicenseType += '<div class="preview-row">CUSTOM:</div>'+
                             '<div class="preview-row">'+
                                $('.license-options #custom_license').val()+
                             '</div>';
    } else if(licenceOption === "CC_LICENSE") {
       htmlForLicenseType += '<div class="preview-row">CREATIVE COMMON:</div>'+
                             '<div class="preview-row">'+
                                $('#CC_LICENSE select').val()+
                             '</div>';
    } else {
       var publishYear = getYearFromDate($('#addEssentials #pub_date').val());
       var publishOrgForLicense = $('#addEssentials input[name^="organizations"]').first().val();
       if(typeof(publishOrgForLicense) ==="undefined") {
           publishOrgForLicense = 'No Organization';
       }
       htmlForLicenseType += '<div class="preview-row">NO LICENSE (auto generated):</div>'+
                             '<div class="preview-row">'+
                                '© '+publishYear+' by '+publishOrgForLicense+'. All rights reserved.'
                             '</div>';
    }
    //copyright
    $('#previewResource #preview_license_type').empty().html(htmlForLicenseType);    
}

    function setupPreviewForFinish() {
        var htmlForOrganizations="";
        $('#previewFinish #finish_preview_date').empty().html(formatDate($('#addEssentials #pub_date').val()));
        $('#previewFinish #finish_preview_title').empty().html($('#addEssentials #title').val());

        //organizations
        $('#addEssentials input[name^="organizations"]').each(function(){
            htmlForOrganizations += '<div class="preview-row">'+$(this).val()+'</div>';
        });
        $('#previewFinish #finish_preview_pub_orgs').empty().html(htmlForOrganizations);

        //abstract
        $('#previewFinish #finish_preview_abstract').empty().html(
                '<div class="preview-row">'+
                    $('#addResourceMetaData #abstract').val()+
                '</div>'
        );
    }

function validateIssueAreas() {
    var issueAreasLength = $('select#issue_areas option:selected').length;
    if(issueAreasLength === 0) {
        $('#divIssueAreas #issueAreaError').empty().html(window.Data.langNotifContents.minimum_issue_area).css('color', '#a94442');
        $('#divIssueAreas label').css('color', '#a94442');
        $('#divIssueAreas .select2-selection--multiple').css('border', '1px solid #a94442');
        return false;
    } else if(issueAreasLength > 3) {
        $('#divIssueAreas #issueAreaError').empty().html(window.Data.langNotifContents.maximum_issue_areas).css('color', '#a94442');
        $('#divIssueAreas label').css('color', '#a94442');
        $('#divIssueAreas .select2-selection--multiple').css('border', '1px solid #a94442');
        return false;
    } else {
        $('#divIssueAreas #issueAreaError').empty();
        $('#divIssueAreas label').css('color', '#333');
        $('#divIssueAreas .select2-selection--multiple').css('border', '1px solid #ccc');
        return true;
    }
}

function validateKcs() {
    var kcLength = $('select#knowledgeCenters option:selected').length;
    if(kcLength === 0) {
        $('#divKnowledgeCenters #knowledgeCenterError').empty().html(window.Data.langNotifContents.minimum_knowledge_center).css('color', '#a94442');
        $('#divKnowledgeCenters label').css('color', '#a94442');
        $('#divKnowledgeCenters .select2-selection--multiple').css('border', '1px solid #a94442');
        return false;
    } else {
        $('#divKnowledgeCenters #knowledgeCenterError').empty();
        $('#divKnowledgeCenters label').css('color', '#333');
        $('#divKnowledgeCenters .select2-selection--multiple').css('border', '1px solid #ccc');
        return true;
    }
}

function validateKcsForSuperUser() {
    var kcLength = $('select#knowledgeCenters option:selected').length;
    if(kcLength === 0 && $('#addResourceMetaData #publish_to_issuelab').bootstrapSwitch('state')===false) {
        alert('Please select any KC or turn on publish to issuelab box.');
        return false;
    } else {
        $('#divKnowledgeCenters #knowledgeCenterError').empty();
        $('#divKnowledgeCenters label').css('color', '#333');
        $('#divKnowledgeCenters .select2-selection--multiple').css('border', '1px solid #ccc');
        return true;
    }
}

function startAjaxLoading() {
    $('.wrapper-cover').css('height', $('body').height()+'px').show();
    $('.cssload-container').show();
}

function stopAjaxLoading() {
    $('.wrapper-cover').hide();
    $('.cssload-container').hide();
}