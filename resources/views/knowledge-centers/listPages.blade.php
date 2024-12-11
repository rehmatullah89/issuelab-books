@if(!empty($kcPages))
<li class="dropdown">
  <a data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false"> Pages <b class="caret"></b></a>
     <ul class="dropdown-menu">
        @foreach($kcPages as $opt)
         @if($opt == '20')
         <li>
          {!! link_to_action('KnowledgeCenterController@listPublishers','Publishers' ,[$subdomain], ["class" => "list-group-item", "target"=>"_blank"]) !!}
         </li>
        @endif
        @if($opt == '21')
        <li>
         {!! link_to_action('KnowledgeCenterController@listFunders','Funders' ,[$subdomain], ["class" => "list-group-item", "target"=>"_blank"]) !!}
        </li>
        @endif
        @if($opt == '22')
        <li>
         {!! link_to_action('KnowledgeCenterController@listAuthors','Authors' ,[$subdomain], ["class" => "list-group-item", "target"=>"_blank"]) !!}
        </li>
        @endif
        @endforeach
     </ul>
 </li>
 @endif