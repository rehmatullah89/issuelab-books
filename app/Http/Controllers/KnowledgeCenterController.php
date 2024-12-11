<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\KnowledgeCenter;
use App\Repositories\ResourceRepositoryInterface;
use DB;
use Session;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use Request;
use Response;
use JavaScript;
use App\KcOptions;
use App\KcListing;
use App\Author;
use App\Organization;
use App\Resource;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Lang;

class KnowledgeCenterController extends Controller
{

    private $headerPath = "IssueLabDefault";
    private $footerPath = "IssueLabDefault";
    private $customCssPath = "IssueLabDefault";
    private $kcOptions;
    private $kc;

    /**
     * Knowledge Center homepage.
     *
     * @param  string $subdomain
     * @return Response
     */
    public function index($subdomain, ResourceRepositoryInterface $resource)
    {
        $resources = $resource->knowledgeCenterTitles($subdomain);
        $kcID = \App\KnowledgeCenter::where('subdomain', '=', $subdomain)->pluck('id');
        $this->setUpKcCustomData($subdomain);
        $kcOptions = KcOptions::where('kc_id', '=', $kcID)->where('enable_kc_opt', '=', 1)->lists('resource_metadata_id');
        JavaScript::put([
            'subdomain' => $subdomain,
            'filters' => $this->kc->search_form_selects,
        ]);
        //$kcID = \App\KnowledgeCenter::where('subdomain', '=', $subdomain)->pluck('id');
        //$kcOptions = \App\KcOptions::where('subdomain', '=', $kcID)->count('show_in_search');
        $data = array(
            'headerPath' => $this->headerPath,
            'footerPath' => $this->footerPath,
            'customCssPath' => $this->customCssPath,
            'kc' => $this->kc,
            'kcOptions' => $this->kcOptions,
            'kcPages' => $kcOptions,
            'resources' => $resources
        );
        return view('knowledge-centers.index')->with($data);
    }

    /**
     * @param  string $subdomain
     * @return Response
     */
    public function listPublishers($subdomain)
    {
        $orgs = array();
        $this->setUpKcCustomData($subdomain);
        $kcID = \App\KnowledgeCenter::where('subdomain', '=', $subdomain)->pluck('id');
        $kcOptions = KcOptions::where('kc_id', '=', $kcID)->where('enable_kc_opt', '=', 1)->lists('resource_metadata_id');
        $resourceIds = KcListing::where('kc_id', '=', $kcID)->select('listing_id')->get()->toArray();
        if (!is_null($resourceIds)) {
            $orgIds = DB::table('link_resource_organization')->distinct()->whereIn('resource_id', $resourceIds)->where('role', '=', 'organization')->lists('organization_id');
            $orgs = Organization::whereIn('id', $orgIds)->paginate();
        }
        $data = array(
            'subdomain' => $subdomain,
            'headerPath' => $this->headerPath,
            'footerPath' => $this->footerPath,
            'customCssPath' => $this->customCssPath,
            'kcPages' => $kcOptions,
            'organiztions' => $orgs
        );

        return view('knowledge-centers.publishers')->with($data);
    }

    /**
     * @param  string $subdomain
     * @param  string $identifier
     * @return Response
     */
    public function publisherResources($subdomain, $identifier)
    {
        $this->setUpKcCustomData($subdomain);
        $kcID = \App\KnowledgeCenter::where('subdomain', '=', $subdomain)->pluck('id');
        $org = Organization::where('identifier', '=', $identifier)->first();
        $kcOptions = KcOptions::where('kc_id', '=', $kcID)->where('enable_kc_opt', '=', 1)->lists('resource_metadata_id');
        $orgResourceIds = DB::table('link_resource_organization')->where('organization_id', '=', $org->id)->where('role', '=', 'organization')->lists('resource_id');
        $resourceIds = KcListing::where('kc_id', '=', $kcID)->whereIn('listing_id', $orgResourceIds)->lists('listing_id');
        $resources = Resource::whereIn('research_id', $resourceIds)->get();
        $data = array(
            'subdomain' => $subdomain,
            'headerPath' => $this->headerPath,
            'footerPath' => $this->footerPath,
            'customCssPath' => $this->customCssPath,
            'resources' => $resources,
            'kcPages' => $kcOptions,
            'organization' => $org->organization
        );

        return view('knowledge-centers.publisher_resources')->with($data);
    }

    /**
     * @param  string $subdomain
     * @return Response
     */
    public function listFunders($subdomain)
    {
        $orgs = array();
        $this->setUpKcCustomData($subdomain);
        $kcID = \App\KnowledgeCenter::where('subdomain', '=', $subdomain)->pluck('id');
        $kcOptions = KcOptions::where('kc_id', '=', $kcID)->where('enable_kc_opt', '=', 1)->lists('resource_metadata_id');
        $resourceIds = KcListing::where('kc_id', '=', $kcID)->select('listing_id')->get()->toArray();
        if (!is_null($resourceIds)) {
            $orgIds = DB::table('link_resource_organization')->distinct()->whereIn('resource_id', $resourceIds)->where('role', '=', 'funder')->lists('organization_id');
            $orgs = Organization::whereIn('id', $orgIds)->paginate();
        }
        $data = array(
            'subdomain' => $subdomain,
            'headerPath' => $this->headerPath,
            'footerPath' => $this->footerPath,
            'customCssPath' => $this->customCssPath,
            'kcPages' => $kcOptions,
            'organiztions' => $orgs
        );

        return view('knowledge-centers.funders')->with($data);
    }

    /**
     * @param  string $subdomain
     * @param  string $identifier
     * @return Response
     */
    public function funderResources($subdomain, $identifier)
    {
        $this->setUpKcCustomData($subdomain);
        $kcID = \App\KnowledgeCenter::where('subdomain', '=', $subdomain)->pluck('id');
        $kcOptions = KcOptions::where('kc_id', '=', $kcID)->where('enable_kc_opt', '=', 1)->lists('resource_metadata_id');
        $org = Organization::where('identifier', '=', $identifier)->first();
        $orgResourceIds = DB::table('link_resource_organization')->where('organization_id', '=', $org->id)->where('role', '=', 'funder')->lists('resource_id');
        $resourceIds = KcListing::where('kc_id', '=', $kcID)->whereIn('listing_id', $orgResourceIds)->lists('listing_id');
        $resources = Resource::whereIn('research_id', $resourceIds)->get();
        $data = array(
            'subdomain' => $subdomain,
            'headerPath' => $this->headerPath,
            'footerPath' => $this->footerPath,
            'customCssPath' => $this->customCssPath,
            'resources' => $resources,
            'kcPages' => $kcOptions,
            'organization' => $org->organization
        );

        return view('knowledge-centers.funder_resources')->with($data);
    }

    /**
     * @param  string $subdomain
     * @return Response
     */
    public function listAuthors($subdomain)
    {
        $authors = array();
        $this->setUpKcCustomData($subdomain);
        $kcID = \App\KnowledgeCenter::where('subdomain', '=', $subdomain)->pluck('id');
        $kcOptions = KcOptions::where('kc_id', '=', $kcID)->where('enable_kc_opt', '=', 1)->lists('resource_metadata_id');
        $resourceIds = KcListing::where('kc_id', '=', $kcID)->select('listing_id')->get()->toArray();
        if (!is_null($resourceIds)) {
            $authorIds = DB::table('link_resource_author')->distinct()->whereIn('resource_id', $resourceIds)->lists('author_id');
            $authors = Author::whereIn('id', $authorIds)->paginate();
        }
        $data = array(
            'subdomain' => $subdomain,
            'headerPath' => $this->headerPath,
            'footerPath' => $this->footerPath,
            'kcPages' => $kcOptions,
            'customCssPath' => $this->customCssPath,
            'authors' => $authors
        );

        return view('knowledge-centers.authors')->with($data);
    }

    /**
     * @param  string $subdomain
     * @param  string $identifier
     * @return Response
     */
    public function authorResources($subdomain, $identifier)
    {
        $this->setUpKcCustomData($subdomain);
        $kcID = \App\KnowledgeCenter::where('subdomain', '=', $subdomain)->pluck('id');
        $kcOptions = KcOptions::where('kc_id', '=', $kcID)->where('enable_kc_opt', '=', 1)->lists('resource_metadata_id');
        $author = Author::where('identifier', '=', $identifier)->first();
        $authorResourceIds = DB::table('link_resource_author')->where('author_id', '=', $author->id)->lists('resource_id');
        $resourceIds = KcListing::where('kc_id', '=', $kcID)->whereIn('listing_id', $authorResourceIds)->lists('listing_id');
        $resources = Resource::whereIn('research_id', $resourceIds)->get();
        $data = array(
            'subdomain' => $subdomain,
            'headerPath' => $this->headerPath,
            'footerPath' => $this->footerPath,
            'customCssPath' => $this->customCssPath,
            'kcPages' => $kcOptions,
            'resources' => $resources,
            'author' => $author->fullname
        );

        return view('knowledge-centers.author_resources')->with($data);
    }

    /**
     * Resource Detail page
     * @param String $subDomain Description
     * @param Object $resource
     */
    public function resource($subDomain, $resource)
    {
        $this->setUpKcCustomData($subDomain);
        $data = array(
            'headerPath' => $this->headerPath,
            'footerPath' => $this->footerPath,
            'customCssPath' => $this->customCssPath,
            'kc' => $this->kc,
            'kcOptions' => $this->kcOptions,
            'resource' => $resource
        );
        return view('knowledge-centers.resource')->with($data);
    }

    /**
     * @param int $id KC ID
     * @return array kc options
     */
    public function getKcOptions($kcID)
    {
        $returnData = array();
        $kcOptions = \App\KcOptions::where('kc_id', '=', $kcID)->get()->toArray();
        $returnData['kcOptions'] = $kcOptions;
        $returnData['response'] = true;
        return json_encode($returnData);
    }

    /**
     * @param int $id KC ID
     * @return array kc options
     */
    public function addDefaultKcOptions($kcID)
    {
        $resourseMetadata = \App\ResourceMetadata::all();
        if (!is_null($resourseMetadata)) {
            foreach ($resourseMetadata as $mData) {
                $kcOptions = new \App\KcOptions();
                $kcOptions->kc_id = $kcID;
                $kcOptions->resource_metadata_id = $mData->id;
                $kcOptions->show_in_search = 1;
                $kcOptions->is_expanded = 0;
                $kcOptions->enable_kc_opt = 1;
                $kcOptions->show_in_resourse = 1;
                $kcOptions->save();
            }
        }
    }

    /**
     * @return array kc options
     */
    public function updateKcOptions()
    {
        $searchMetadataIds = Input::get('search_metadata_ids');
        $resourceMetadataIds = Input::get('resource_metadata_ids');
        $kcOptionMetadataIds = Input::get('kc_opt_metadata_ids');

        $kcID = Input::get('kcid');

        \App\KcOptions::where('kc_id', '=', $kcID)->delete();

        foreach ($searchMetadataIds as $searchId) {
            $kcOptions = new \App\KcOptions();
            $kcOptions->kc_id = $kcID;
            $kcOptions->resource_metadata_id = $searchId;
            $kcOptions->show_in_search = (is_null(Input::get('show_in_search_' . $searchId)) ? 0 : 1);
            $kcOptions->is_expanded = (is_null(Input::get('is_expanded_' . $searchId)) ? 0 : 1);
            $kcOptions->save();
        }
        foreach ($resourceMetadataIds as $resourceId) {
            $search = DB::table('kc_options')
                    ->where('resource_metadata_id', '=', $resourceId)
                    ->where('kc_id', '=', $kcID)
                    ->first();
            if ($search) {
                DB::table('kc_options')->where('resource_metadata_id', '=', $resourceId)->where('kc_id', '=', $kcID)->update(array('show_in_resourse' => (is_null(Input::get('show_in_resources_' . $resourceId)) ? 0 : 1)));
            } else {
                $kcOptions = new \App\KcOptions();
                $kcOptions->kc_id = $kcID;
                $kcOptions->resource_metadata_id = $resourceId;
                $kcOptions->show_in_resourse = (is_null(Input::get('show_in_resources_' . $resourceId)) ? 0 : 1);
                $kcOptions->save();
            }
        }
        foreach ($kcOptionMetadataIds as $kcoptId) {
            $kcOpt = KcOptions::firstOrNew(array('resource_metadata_id' => $kcoptId, 'kc_id' => $kcID));
            $kcOpt->kc_id = $kcID;
            $kcOpt->resource_metadata_id = $kcoptId;
            $kcOpt->enable_kc_opt = is_null(Input::get('show_in_kcopt_' . $kcoptId)) ? 0 : 1;
            $kcOpt->save();
        }
        return json_encode(array('response' => true));
    }

    /*
     * searchCategories
     */

    public function searchCategories(Request $request, $subdomain, ResourceRepositoryInterface $resource)
    {
        $count = 0;
        $sortBy = \Request::get('sort');
        if (!is_null($sortBy))
            Session::put('sortKey', $sortBy);
        elseif (is_null($sortBy))
            $sortBy = Session::get('sortKey');
        $keywords = \Request::get('keywords');
        if (!is_null($keywords))
            Session::put('keywords', $keywords);
        elseif (is_null($keywords))
            $keywords = Session::get('keywords');
        $postedCat = \Request::get('category');
        $result = array();
        $group = Request::segment(2);
        $category = Request::segment(3);
        $searchTerm = is_null($category) ? $group : $category;
        $searchTerm = is_null($searchTerm) ? $postedCat : $searchTerm;
        if (!is_null($searchTerm)) {
            $cat = \App\Category::where('identifier', '=', $searchTerm)->first();
            $this->setUpKcCustomData($subdomain);
            $perPage = ($this->kc->results_per_page <= 0 ? 10 : $this->kc->results_per_page);
            $pageStart = \Request::get('page', 1);
            $offSet = ($pageStart * $perPage) - $perPage;
            if (!is_null($cat) && !empty($cat)) {
                $resources = $resource->searchCategoryResources($subdomain, $cat->category, $keywords, $offSet, $sortBy, $perPage);
                $count = $resources['count'];
                $result = $resources['docs'];
            }
            $itemsForCurrentPage = array_slice($result, 0, $perPage, true);
            $paginatedSearchResults = new LengthAwarePaginator($itemsForCurrentPage, $count, $perPage, Paginator::resolveCurrentPage(), array('path' => Paginator::resolveCurrentPath()));
            $data = array(
                'headerPath' => $this->headerPath,
                'footerPath' => $this->footerPath,
                'customCssPath' => $this->customCssPath,
                'kc' => $this->kc,
                'resources' => $paginatedSearchResults,
                'count' => $count,
                'sort' => $sortBy,
                'keywords' => $keywords
            );

            return view('knowledge-centers.categories')->with($data);
        } else {
            echo "Select at least 1 Group / Category";
            exit;
        }
    }

    /**
     * @param int $subDomain
     */
    private function setUpKcCustomData($subDomain)
    {
        $kc = KnowledgeCenter::where('subdomain', $subDomain)->first();

        $kcOptionsObj = new \App\KcOptions();
        $kcOptions = $kcOptionsObj->getKcOptionsWithResourceMetaData($kc->id);
        $searchFiltersCount = \App\KcOptions::where('kc_id', '=', $kc->id)
                ->where('show_in_search', '=', 1)
                ->where('resource_metadata_id', '<>', 1) // skipping keywords
                ->count();
        $directories = preg_grep('/^([^.])/', scandir(realpath(base_path('resources/views/knowledge-centers'))));
        $Langdirectories = preg_grep('/^([^.])/', scandir(realpath(base_path('resources/lang/knowledge-centers'))));
        $singleLangDirectory = (!in_array($subDomain, $Langdirectories) ? "IssueLabDefault" : $subDomain);
        
        $subDomain = (!in_array($subDomain, $directories) ? "IssueLabDefault" : $subDomain);

        $this->kcOptions = $kcOptions;
        $this->kc = $kc;



        $this->kc->show_advance_search = false;
        if ($searchFiltersCount > 0) {
            $this->kc->show_advance_search = true;
        }

        if ($subDomain != "IssueLabDefault") { // if header/footer/css file missing in sub domain folder
            $kcViewsRootDirectory = preg_grep('/^([^.])/', scandir(realpath(base_path('resources/views/knowledge-centers') . "/$subDomain")));
            $kcPubRootDirectory = preg_grep('/^([^.])/', scandir(realpath(public_path('knowledge-centers'))));

            $this->headerPath = (!in_array("header.blade.php", $kcViewsRootDirectory) ? "IssueLabDefault" : $subDomain);
            $this->footerPath = (!in_array("footer.blade.php", $kcViewsRootDirectory) ? "IssueLabDefault" : $subDomain);

            if (in_array($subDomain, $kcPubRootDirectory)) {
                $oneKcSpecificPubDirectory = preg_grep('/^([^.])/', scandir(realpath(public_path('knowledge-centers') . "/$subDomain")));

                if (in_array("css", $oneKcSpecificPubDirectory)) {
                    $oneKcSpecificPubCssDirectory = preg_grep('/^([^.])/', scandir(realpath(public_path('knowledge-centers') . "/$subDomain/css")));
                    $this->customCssPath = (!in_array("custom.css", $oneKcSpecificPubCssDirectory) ? "IssueLabDefault" : $subDomain);
                }
            }
        }
        Lang::addNamespace('kcLang', base_path('resources/lang/knowledge-centers') . "/$singleLangDirectory");
    }

}
