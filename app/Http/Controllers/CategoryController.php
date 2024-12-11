<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Helpers\AuthHelper;
use App\Resource;
use App\KcListing;
use App\Http\Requests;
use App\KnowledgeCenter;
use App\CategoryResources;
use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Controllers\SolrController;

class CategoryController extends Controller
{

    /**
     * @var solr
     */
    protected $solr;

    public function __construct()
    {
        $this->middleware('auth');
        $this->solr = new SolrController;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kcs = array();
        $categories = array();
        if (AuthHelper::isKcAdmin()) {
            $kcIds = DB::table('kc_administrators')->select('kc_id')->where('user_id', '=', Auth::user()->id)->lists('kc_id');
            $kcs = KnowledgeCenter::whereIn('id', $kcIds)->paginate(5);
        }
        if (Auth::user()->isSuperadmin()) {
            $catKcs = Category::distinct()->select('kc_id')->get()->toArray();
            $kcs = KnowledgeCenter::whereIn('id', $catKcs)->paginate(5);
        }

        return view('categories.index', compact('kcs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $kcId = 0;
        $category = 0;
        $categories = $this->getKcCategories();
        $knowledgeCenters = $this->getKcAdminKnowledgeCenters();
        return view('categories.create', compact('categories', 'category', 'knowledgeCenters', 'kcId'));
    }

    /*
     * createCategory
     */

    public function createCategory($kcId, $pId)
    {
        $category = 0;
        $categories = $this->getKcCategories();
        $knowledgeCenters = $this->getKcAdminKnowledgeCenters();
        return view('categories.category', compact('categories', 'category', 'knowledgeCenters', 'kcId', 'pId'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cat = new Category;
        $cat->p_id = $request->p_id;
        $cat->kc_id = $request->kc_id;
        $cat->category = $request->category;
        $cat->identifier = snake_case($request->category);
        if (Category::where('identifier', '=', $cat->identifier)->where('kc_id', '=', $cat->kc_id)->first()) {
            if ($cat->p_id == 0) {
                return redirect()->action('CategoryController@create')->with(['message' => trans('category.group_unique_message')]);
            } else {
                return redirect()->action('CategoryController@create')->with(['message' => trans('category.category_unique_message')]);
            }
        }
        $validator = Validator::make($request->all(), $cat::$rules);
        if ($validator->fails()) {
            return Redirect::back()->withInput()->withErrors($validator);
        }
        else
            $cat->save();

        return redirect()->action('CategoryController@index')->with([
                    'message' => '<a href="' . action('CategoryController@edit', $cat->identifier) . '">' . e($cat->category) . '</a> created.',
        ]);
    }

    /**
     * @param int $id category id
     */
    public function show($id)
    {
        // do nothing
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function groupCategories($subdomain, $identifier)
    {
        $categories = array();
        $kc = KnowledgeCenter::where('subdomain', '=', $subdomain)->first();
        $cat = Category::where('identifier', '=', $identifier)->where('kc_id', '=', $kc->id)->first();
        $kcId = $cat->kc_id;
        $pId = $cat->id;
        $categoryName = $cat->category;
        if (!empty($kcId))
            $categories = Category::where('p_id', '=', $pId)->paginate(15);

        return view('categories.show', compact('categories', 'kcId', 'pId', 'categoryName'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($identifier)
    {
        $categories = $this->getKcCategories();
        $knowledgeCenters = $this->getKcAdminKnowledgeCenters();
        $cat = Category::find(1)->where('identifier', $identifier)->first();
        $data = array(
            'cat' => $cat,
            'category' => @$cat->p_id,
            'pId' => @$cat->p_id,
            'kcId' => @$cat->kc_id,
            'categories' => $categories,
            'knowledgeCenters' => $knowledgeCenters,
        );
        return view('categories.edit')->with($data)->render();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editCategory($group, $identifier)
    {
        $categories = $this->getKcCategories();
        $knowledgeCenters = $this->getKcAdminKnowledgeCenters();
        $cat = Category::find(1)->where('identifier', $identifier)->first();
        $data = array(
            'cat' => $cat,
            'category' => @$cat->p_id,
            'pId' => @$cat->p_id,
            'kcId' => @$cat->kc_id,
            'categories' => $categories,
            'knowledgeCenters' => $knowledgeCenters,
        );
        return view('categories.editCategory')->with($data)->render();
    }

    /**
     * Update the specified Category in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $identifier)
    {
        $cat = Category::find(1)->where('identifier', $identifier)->where('p_id', '=', $request->p_id)->where('kc_id', '=', $request->kc_id)->first();
        $cat->p_id = $request->p_id;
        $cat->kc_id = $request->kc_id;
        $cat->category = $request->category;
        $cat->identifier = snake_case($request->category);

        if ($identifier != $cat->identifier) {
            $validator = Validator::make($request->all(), Category::$rules);
            if ($validator->fails()) {
                return Redirect::back()->withInput()->withErrors($validator);
            }
        }
        $cat->save();
        return redirect()->action('CategoryController@index')->with([
                    'message' => '<a href="' . action('CategoryController@edit', $cat->identifier) . '">' . e($cat->category) . '</a> updated.',
        ]);
    }

    /**
     * Get KC Admins KC Categories
     */
    public function getKcCategories()
    {
        $categories = array('0' => 'Select Category Group');
        $kcIds = DB::table('kc_administrators')->select('kc_id')->where('user_id', '=', Auth::user()->id)->lists('kc_id');
        if (!empty($kcIds))
            $categories += Category::whereIn('kc_id', $kcIds)->where('p_id', '=', '0')->lists('category', 'id')->toArray();
        return $categories;
    }

    /**
     * Get KC Admins Knowledge Centers
     */
    public function getKcAdminKnowledgeCenters()
    {
        $knowledge_centers = array();
        $kcIds = DB::table('kc_administrators')->select('kc_id')->where('user_id', '=', Auth::user()->id)->lists('kc_id');
        if (!empty($kcIds)) {
            $knowledge_centers = KnowledgeCenter::whereIn('id', $kcIds)->lists('subdomain', 'id')->toArray();
        } elseif (Auth::user()->isSuperadmin()) {
            $knowledge_centers = KnowledgeCenter::lists('subdomain', 'id')->toArray();
        }
        return $knowledge_centers;
    }

    /**
     * Ajax Method
     */
    public function addToFeaturedResources(Request $request)
    {
        $resourceArray = array();
        $featureCheck = 0;
        if ($request->create_feature_check == "on") {
            $featureCheck = 1;
        }
        if (is_numeric($request->current_resource_id)) {
            $resource = Resource::where('research_id', '=', $request->current_resource_id)->first();
        } else {
            $resource = Resource::where('identifier', '=', $request->current_resource_id)->first();
        }
        $kc = KnowledgeCenter::find($request->kc_select_opt);
        if (!is_null($resource)) {
            $kcl = KcListing::firstOrNew(array('kc_id' => $request->kc_select_opt, 'listing_id' => is_null($resource->research_id) ? 0 : $resource->research_id, 'date_added' => date('Y-m-d'), 'date_added_mktime' => strtotime(date('Y-m-d'))));
            $kcl->feature = $featureCheck;
            $kcl->save();
            $this->solr->updateKcFields($kc->subdomain, $resource->identifier, array('resource_listing_feature_' . $kc->subdomain => "$featureCheck"));

            if ($featureCheck == 1) {
                return redirect()->back()->with('message', trans('category.resource_add_to_featured'));
            } else {
                return redirect()->back()->with('message', trans('category.resource_add_to_kc'));
            }
        }
        return redirect()->back()->with('message', 'Resource Not Found in repository.');
    }

    /**
     * Ajax method
     */
    public function getMyKnowledgeCenters(Request $request)
    {
        $resourceId = $request->input('res_id');
        $kcs = json_decode($request->input('kcs'));
        $myKnowledgeCenters = array('Select a Knowledge Center');
        $index = 0;
        $firstKey = "";
        foreach ($kcs as $key => $value) {
            $myKnowledgeCenters += array($value->id => $value->text);
            if ($value->id != 0 && $index == 0) {
                $firstKey = $value->id;
                $index++;
            }
        }
        //Get Selected Values
        $selectedData = array('myKcs' => $myKnowledgeCenters) + $this->getSelectedValuesForEditResource($firstKey, $resourceId);

        return $selectedData;
    }

    /**
     * Get Selected Values for Resource Modal
     */
    public function getSelectedValuesForEditResource($kcId, $resourceId)
    {
        $kcl = KcListing::where('kc_id', '=', $kcId)->where('listing_id', '=', $resourceId)->first();
        $catRes = CategoryResources::where('kc_id', '=', $kcId)->where('rescource_id', '=', $resourceId)->first();
        if (!is_null($catRes)) {
            $cat = Category::find($catRes->cat_id);
            return array('selected_kc_id' => $kcId, 'selected_cat_group' => $cat->p_id, 'selected_category' => $catRes->cat_id, 'selected_kc_desc' => $kcl->description, 'selected_kc_tweet' => $kcl->key_findings, 'selected_kc_publish' => $kcl->include, 'selected_kc_feature' => $kcl->feature);
        } elseif (!is_null($kcl)) {
            return array('selected_kc_id' => $kcId, 'selected_cat_group' => "", 'selected_category' => "", 'selected_kc_desc' => $kcl->description, 'selected_kc_tweet' => $kcl->key_findings, 'selected_kc_publish' => $kcl->include, 'selected_kc_feature' => $kcl->feature);
        } else {
            return array('selected_kc_id' => $kcId, 'selected_cat_group' => "", 'selected_category' => "", 'selected_kc_desc' => "", 'selected_kc_tweet' => "", 'selected_kc_publish' => "", 'selected_kc_feature' => "");
        }
    }

    /**
     * Ajax method
     */
    public function getKnowledgeCenters(Request $request)
    {
        $resourceId = $request->input('res_id');
        $kcs = $request->input('kcs');
        $knowledgeCenters = array('0' => 'Select a Knowledge Center');

        if (AuthHelper::isKcAdmin()) {
            $knowledgeCenters += $this->getKcAdminKnowledgeCenters();
        }
        if (Auth::user()->isSuperadmin()) {
            $knowledgeCenters += KnowledgeCenter::all()->lists('subdomain', 'id')->toArray();
        }

        return $knowledgeCenters;
    }

    /**
     * Ajax method
     */
    public function getCategoryOptions(Request $request)
    {
        $kcId = $request->input('kc_id');
        $categoryGroups = array('0' => 'Select a Category Group');

        if (AuthHelper::isKcAdmin() || Auth::user()->isSuperadmin()) {
            $categoryGroups += Category::where('kc_id', '=', $kcId)->where('p_id', '=', '0')->lists('category', 'id')->toArray();
        }
        return $categoryGroups;
    }

    /**
     * Ajax method
     */
    public function getGroupCategories(Request $request)
    {
        $groupId = $request->input('group_id');
        return $categories = Category::where('p_id', '=', $groupId)->lists('category', 'id')->toArray();
    }

    /**
     * Ajax method
     */
    public function storeCategoryResources(Request $request)
    {
        $resourceArray = array();
        if (is_numeric($request->current_resource_id)) {
            $resource = Resource::where('research_id', '=', $request->current_resource_id)->first();
        } else {
            $resource = Resource::where('identifier', '=', $request->current_resource_id)->first();
        }
        $kc = KnowledgeCenter::find($request->kc_select_opt);
        if (!is_null($resource)) {
            CategoryResources::firstOrCreate(array('kc_id' => $request->kc_select_opt, 'cat_id' => $request->category_select_opt, 'rescource_id' => is_null($resource->research_id) ? 0 : $resource->research_id));
        }
        $cat = Category::where('id', '=', $request->category_select_opt)->where('kc_id', '=', $request->kc_select_opt)->first();
        if (empty($cat) || empty($kc) || empty($resource)) {
            return redirect()->back()->with('message', 'Resource Not Found in repository.');
        } else {
            $this->solr->updateKcFields($kc->subdomain, $resource->identifier, array('client_cat_' . $kc->subdomain => $cat->category, 'issuelab_client_cat_identifier_' . $kc->subdomain => $cat->identifier));
        }

        return redirect()->back()->with('message', trans('category.resource_add_success_msg'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cat = Category::find(1)->where('id', $id)->first();
        $parent = Category::where('p_id', '=', $cat->id)->first();
        if (isset($parent) && $parent->id != null)
            return redirect()->action('CategoryController@index')->with([
                        'message' => trans('category.group_can_not_delete'),
            ]);
        if ($cat->categoryResources->isEmpty()) {
            Category::where('id', '=', $id)->delete();
            return redirect()->action('CategoryController@index')->with([
                        'message' => trans('category.cat_delete_success'),
            ]);
        }
        else
            return redirect()->action('CategoryController@index')->with([
                        'message' => trans('category.category_can_not_delete'),
            ]);
    }

}
