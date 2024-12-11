<?php

namespace App\Http\Controllers;

use DB;
use App\KnowledgeCenter;
use App\Organization;
use Illuminate\Database\Eloquent\Model;
use App\Repositories\UserRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Routing\UrlGenerator;

class UserController extends Controller
{

    /**
     * @var App\Organization
     */
    protected $organization;

    /**
     * @var App\User
     */
    protected $user;

    /**
     * Create a new user controller instance.
     *
     * @param App\Organization $organization
     * @param App\User         $user
     */
    public function __construct(Organization $organization, UserRepositoryInterface $user)
    {
        $this->middleware('superadmin');
        $this->organization = $organization;
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request, UserRepositoryInterface $repository)
    {
        $search = $request->search;

        if ($search) {
            $users = $repository->search($search);
        } else {
            $users = $repository->all();
        }

        return view('users.index', compact('users', 'search'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $organizations = [];
        $knowledgeCenters = [];
        $AllKnowledgeCenters = KnowledgeCenter::all()->lists('subdomain', 'id');
        return view('users.create', compact('organizations', 'AllKnowledgeCenters', 'knowledgeCenters'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function store(Request $request)
    {
        $user = $this->user->create($request->all());
        $user->organizations()->sync($this->makeOrganizationData($request->organizations));
        $user->setSuperadmin('1' === $request->superadmin ? true : false);

        if ($request->knowledge_centers != '' || $request->knowledge_centers != null)
            $user->knowledgeCenters()->sync($request->knowledge_centers);

        return redirect()->action('UserController@index')->with([
                    'message' => '<a href="' . action('UserController@edit', $user->identifier) . '">' . e($user->full_name) . '</a> created.',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param App\User $user
     * @return Response
     */
    public function show($user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param App\User $user
     * @return Response
     */
    public function edit($user)
    {
        $organizations = $user->organizations->map(function ($item) {
                            return ['name' => $item->organization, 'contact' => $item->pivot->contact];
                        })->toArray();
        $AllKcs = KnowledgeCenter::all()->lists('subdomain', 'id');
        $knowledgeCenters = DB::table('kc_administrators')->where('user_id', $user->id)->lists('kc_id');
        $data = array(
            'user' => $user,
            'organizations' => $organizations,
            'knowledgeCenters' => $knowledgeCenters,
            'AllKnowledgeCenters' => $AllKcs,
        );
        return view('users.edit')->with($data)->render();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request  $request
     * @param App\User $user
     * @return Response
     */
    public function update(Request $request, $user)
    {
        $user->update($request->all());
        $user->organizations()->sync($this->makeOrganizationData($request->organizations));
        $user->setSuperadmin('1' === $request->superadmin ? true : false);
        if ($request->knowledge_centers == '' || $request->knowledge_centers == null)
            $request->knowledge_centers = array();
        $user->knowledgeCenters()->sync($request->knowledge_centers);

        return redirect()->action('UserController@edit', $user->identifier)->with([
                    'message' => 'User updated.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param App\User $user
     * @return Response
     */
    public function destroy($user, UrlGenerator $url)
    {
        // if ($this->isOnlyContact()) {
        //     return redirect($url->previous())->withErrors([
        //     ]);
        // }
        // Check for contact
        // if fails,
        // build response
        // throw error
        // new HttpResponseException('Didnt work');

        $user->delete();

        return redirect($url->previous())->with([
                    'message' => e($user->full_name) . ' deleted.',
        ]);
    }

    /**
     * Format organization form data for updating a user's organizations
     *
     * @param  array    $organizationInput  Organization form input
     * @return $array                   Organization data to be saved
     */
    protected function makeOrganizationData($organizationInput)
    {
        $orgIds = [];

        if ($organizationInput) {
            // Create an array of arrays to update pivot attributes, below
            // Ex: `[324 => ['contact' => 1]]`
            foreach ($organizationInput as $org) {
                if ($org['name']) {
                    $orgToSync = $this->organization->firstOrCreate(['organization' => $org['name']]);
                    $contact = isset($org['contact']) && is_array($org['contact']) && in_array('1', $org['contact']) ? 1 : 0;
                    $orgIds[$orgToSync->id] = ['contact' => $contact];
                }
            }
        }

        return $orgIds;
    }

}
