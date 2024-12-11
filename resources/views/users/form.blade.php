{!! Former::text('full_name') !!}
{!! Former::email('email') !!}
{!! Former::text('employer') !!}
{!! Former::text('title', 'Job title') !!}
{!! Former::repeater('organizations', $organizations, array('include_contact' => true, 'data_local' => 'organizations', 'placeholder' => 'Start typing organization name ...', 'dbFieldName' => 'name')) !!} 
{!! Former::multiselect('knowledge_centers')->options($AllKnowledgeCenters, $knowledgeCenters)->help('Select knowledge centers to make user kc-admin for selected domains!') !!}
{!! Former::checkboxes('roles')->checkboxes(['Superadmin' => 'superadmin']) !!}
{!! Former::actions(Former::primary_submit($submitText)) !!}
