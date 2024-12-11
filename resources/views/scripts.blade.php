<script>
    var kc_per_page = 12;
    var kc_name = '{{Route::current()->getParameter("subdomain")}}';
</script>
<script src="//cdn.polyfill.io/v1/polyfill.min.js"></script>
<script src="{{ elixir('js/modernizr.js') }}"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!--<script>window.jQuery || document.write('<script src="{{ asset('js/jquery.min.js') }}"><\/script>')</script>-->
<script src="{{ elixir('js/bundle.js') }}"></script>
<!-- included select2 for only users -->
@if(Request::segment(1) == 'users' || Request::segment(1) == 'categories')
<script src="{{asset('select2/select2.js')}}"></script>
<link href="{{asset('select2/select2.css')}}" rel="stylesheet">
<script type="text/javascript">
    $('#knowledge_centers').select2();
    $('#rescource_id').select2();
</script>
@endif
@include('shared.general_functions')
@if(Request::path() == 'resource/create' || Request::is('resource/create/*'))
<script src="{{asset('js/wizard/bootstrap.min.js') }}"></script>
<script src="{{asset('js/wizard/jquery.bootstrap.wizard.js') }}"></script>
<script src="{{asset('js/bootstrap-switch.min.js')}}"></script>
<script src="{{asset('js/wizard/prettify.js')}}"></script>
<script src="{{asset('select2/select2.js')}}"></script>
<script src="{{asset('blueimp-file-upload/js/vendor/jquery.ui.widget.js')}}"></script>
<script src="{{asset('blueimp-file-upload/js/jquery.iframe-transport.js')}}"></script>
<script src="{{asset('blueimp-file-upload/js/jquery.fileupload.js')}}"></script>
<script src="{{asset('js/validator.min.js')}}"></script>
<script src="{{asset('js/wizard/jquery.qtip.min.js')}}"></script>
<script src="{{asset('js/icheck/icheck.min.js')}}"></script>

{{-- put this in last --}}
<script src="{{ asset('js/wizard/resource-wizard.js') }}"></script>
@include('shared.edit_resource_script')
@endif
@if(Request::path() == 'resource/allResources' || Request::is('resource/allResources/*') || Request::is('search') || Request::is('/*'))
<script src="{{asset('js/bootstrap-switch.min.js')}}"></script>
<script>
    $(document).ready(function(){
    $('#tweetable').bootstrapSwitch({'onText':'YES', 'offText':'NO'});
    $('#switch_publish').bootstrapSwitch({'onText':'YES', 'offText':'NO'});
    $('#switch_featured').bootstrapSwitch({'onText':'YES', 'offText':'NO'});
    });
</script>
@endif
@if(Request::is('resource/*'))
    <script>
        $(document).ready(function() {
            $('body').on('click', function(){
                $('.download-links ul').hide();
            });
            $('#download-from').on('mouseover', function(){
                $('.download-options').show();
            });
        });
    </script>    
@endif
<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='https://www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X','auto');ga('send','pageview');
</script>
