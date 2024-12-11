<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<!-- If you delete this tag, the sky will fall on your head -->
<meta name="viewport" content="width=device-width" />

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Issuelab-dev.org</title>

</head>
 
<body bgcolor="#FFFFFF">

<!-- BODY -->
<table class="body-wrap">
	<tr>
		<td></td>
		<td class="container" bgcolor="#FFFFFF">

			<div class="content">
			<table>
				<tr>
					<td>
						
						<h3>{{trans('resource.email_notifaction_header')}}</h3>	
						<p>{{trans('resource.email_notifaction_detail')}}</p>
						<article class=" col-xs-12 list-view  ">
                                                    <a href="http://issuelab-dev.org/resource/{{$resource->identifier}}">
							<div class="img">
                                                          @if(empty($resource->cover_graphic) || $resource->cover_graphic == 'default_cover.jpg')
                                                            <img src="http://issuelab-dev.org/resources/default_cover.png" width="200" height="250">
                                                            @elseif($resource->cover_graphic != "")
                                                            <img src="http://issuelab-dev.org/resources/{{$resource->research_id}}/{{$resource->cover_graphic}}" width="200" height="250">
                                                          @endif
                                                        </div>
							<h3>{{$resource->title}}</h3>
								<p>{{date('d F Y')}}</p>
                                                                @foreach($resource->publishers as $publisher)
								<p title="{{$publisher->organization}}">{{$publisher->organization}}</p>
                                                                @endforeach
                                                                <p>{{$resource->license}}</p>
							</a>
						</article>					
						<br/>
						<br/>							
												
						<!-- social & contact -->
						<table class="social" width="100%">
							<tr>
								<td>
									
									<!--- column 2 -->
									<table align="left" class="column">
										<tr>
											<td>				
																			
												<h4>Contact Info:</h4>												
												<p>Phone: <strong>###.###.###</strong><br/>
                Email: <strong><a href="emailto:hseldon@trantor.com">administrator@issuelab.org</a></strong></p>
                
											</td>
										</tr>
									</table><!-- /column 2 -->
									
									<span class="clear"></span>	
									
								</td>
							</tr>
						</table><!-- /social & contact -->
					
					
					</td>
				</tr>
			</table>
			</div>
									
		</td>
		<td></td>
	</tr>
</table><!-- /BODY -->

</body>
</html>