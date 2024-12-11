{!! Former::repeater('authors', $resource->authors, ['input_name' => 'fullname']) !!}

{!! Former::repeater('funders', $resource->funders, ['label' => 'Funder(s)', 'input_name' => 'funder']) !!}

{!! Former::select2_repeater('coverages', $coverages, $resource->coverages, ['label' => 'Geography', 'input_name' => 'id']) !!}

{!! Former::select2_repeater('languages', $languages, $resource->languages, ['input_name' => 'id']) !!}

{!! Former::checkboxes('issue_areas', 'Issue Areas')->inline()->checkboxes($issueAreas) !!}

{!! Former::checkboxes('doctypes', 'Document type')->inline()->checkboxes($doctypes) !!}

{!! Former::universal_identifier_repeater($resource->isbns) !!}

{!! Former::select('status')->options($resourceStatuses) !!}
