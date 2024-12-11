<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Organization;
use Illuminate\Http\Request;

class RequiredActionController extends Controller
{

    protected $organization;

    public function __construct(Organization $organization)
    {
        $this->middleware('auth');
        $this->organization = $organization;
    }

    public function selectOrganization(Request $request, Organization $organization)
    {
        $user = $request->user();
        return view('required.select-organization', compact('user'));
    }

    public function addOrganization(Request $request)
    {
        $user = $request->user();
        $user->organizations()->firstOrCreate(['organization' => $request->organization]);
        return redirect()->back()->with([
                    'message' => trans('Organization added.'),
        ]);
    }

}
