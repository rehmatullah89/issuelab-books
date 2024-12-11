<?php

namespace App\Http\Controllers;

use DB;
use App\Resource;
use App\KcListing;
use App\Organization;
use App\Http\Controllers\Controller;
use App\Repositories\OrganizationRepositoryInterface;
use Illuminate\Http\Request;
use Input;
use Response;

class OrganizationController extends Controller
{

    /**
     * Return publisher(s) list found by a query
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function organizationsList(OrganizationRepositoryInterface $repository, Request $request)
    {
        $publishers = $repository->searchList($request->q);

        if (Input::has('callback')) {
            return Response::json($publishers)->setCallback(Input::get('callback'));
        }

        return $publishers;
    }

    /**
     * @var identifier
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function funderProfile($identifier)
    {
        $org = Organization::where('identifier', '=', $identifier)->first();
        $orgResourceIds = DB::table('link_resource_organization')->where('organization_id', '=', $org->id)->where('role', '=', 'funder')->lists('resource_id');
        $resourceIds = KcListing::whereIn('listing_id', $orgResourceIds)->lists('listing_id');
        $resources = Resource::whereIn('research_id', $resourceIds)->get();

        $data = array(
            'resources' => $resources,
            'organization' => $org->organization
        );
        return view('organizations/funder_profile')->with($data);
    }

    /**
     * @var identifier
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function publisherProfile($identifier)
    {
        $org = Organization::where('identifier', '=', $identifier)->first();
        $orgResourceIds = DB::table('link_resource_organization')->where('organization_id', '=', $org->id)->where('role', '=', 'organization')->lists('resource_id');
        $resourceIds = KcListing::whereIn('listing_id', $orgResourceIds)->lists('listing_id');
        $resources = Resource::whereIn('research_id', $resourceIds)->get();

        $data = array(
            'resources' => $resources,
            'organization' => $org->organization
        );
        return view('organizations/publisher_profile')->with($data);
    }

}
