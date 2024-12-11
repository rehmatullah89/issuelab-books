<?php

namespace App\Repositories\Eloquent;

use DB;
use App\KcListing;
use App\Helpers\AuthHelper;
use App\Repositories\ResourceRepositoryInterface;
use App\Resource;
use Illuminate\Support\Facades\Auth;
use App\SuperAdminResource;
use App\User;

class ResourceRepository implements ResourceRepositoryInterface
{

    protected $resource;
    protected $super_admin_resource;

    public function __construct(Resource $resource, SuperAdminResource $super_admin_resource)
    {
        $this->resource = $resource;
        $this->super_admin_resource = $super_admin_resource;
    }

    /**
     * @return array approved resources.
     */
    public function approved()
    {
        return $this->resource->where('approved', true)->paginate();
    }

    /**
     * @return array approved resources.
     */
    public function nonapproved()
    {
        return $this->resource->where('approved', false)->paginate();
    }

    /**
     * @return array all resources.
     */
    public function allResources()
    {
        if (Auth::user()->isSuperadmin()) {
            return $this->resource->orderBy('research_id', 'desc')->paginate();
        } elseif (AuthHelper::isKcAdmin()) {
            $kcIds = DB::table('kc_administrators')->select('kc_id')->where('user_id', '=', Auth::user()->id)->lists('kc_id');
            if (!empty($kcIds)) {
                $listingIds = KcListing::whereIn('kc_id', $kcIds)->lists('listing_id');
                return $this->resource->where('creator_id', '=', Auth::user()->id)->orWhereIn('research_id', $listingIds)->orderBy('research_id', 'desc')->paginate();
            } else {
                return array();
            }
        } else {
            return $this->resource->where('creator_id', '=', Auth::user()->id)->orderBy('research_id', 'desc')->paginate();
        }
    }

    /**
     * @param int $id Resource id
     * @param array $columns Columns to select
     * @return array approved resources.
     */
    public function find($id, $columns = ['*'])
    {
        return $this->resource->find($id, $columns);
    }

    /**
     * @return object Resource Object
     */
    public function newModel(User $user, array $attributes = [])
    {
//        if ($user && $user->isSuperAdmin()) {
//            return new SuperAdminResource($attributes);
//        } else {
//            return new Resource($attributes);
//        }
        return new Resource($attributes);
    }

    /**
     * @return object Resource Object
     */
    public function create(User $user, array $attributes = [])
    {
        if ($user && $user->isSuperAdmin()) {
            return $this->super_admin_resource->create($attributes);
        } else {
            return $this->resource->create($attributes);
        }
    }

    /**
     * @return array Latest resources
     */
    public function earliestPubdate()
    {
        return $this->resource->orderBy('pub_date_mktime', 'asc')->first()->pub_date_mktime;
    }

    /**
     * @param string $title Resource title
     * @return array Resource array with matching title
     */
    public function resourceByTitle($title)
    {
        return $this->resource->getByTitle($title);
    }

    /**
     * @param array $data Resource fileds to match a duplicate resource
     * @return array matching duplicate resource
     */
    public function checkDuplicateResource($data = array())
    {
        return $this->resource->checkDuplicateResource($data);
    }

    /**
     * @param string $subdomain Knowledge center domain
     * @return array Resources
     */
    public function knowledgeCenterTitles($subdomain)
    {

        $solrUrl = "http://admin:geeks3123@issuelab-solr-dev.geekschicagolabs.com/solr/issuelab/select?";
        //http://206.17.146.56:8082/solr/issuelab/select-issuelab?
        $params = [
            'wt' => 'json',
            'defType' => 'edismax',
            'rows' => 12,
            'start' => 0,
            'fl' => 'title,date_published,publisher,cover_graphic,id,resource_listing_feature_' . $subdomain . '',
            'fq' => "client_include_{$subdomain}:1",
            'sort' => "resource_listing_feature_{$subdomain} desc",
            'q' => '*.*',
        ];
        //dd(urldecode($solrUrl . http_build_query($params)));
        $response = json_decode($this->makeRequest($solrUrl . http_build_query($params)));
        return $response->response->docs;
    }

    /**
     * @return array Category resources 
     */
    public function searchCategoryResources($subdomain, $category, $keywords, $start = 0, $sort = '', $perPage)
    {
        $keywords = $keywords == '' ? '*.*' : $keywords;
        $solrUrl = "http://admin:geeks3123@issuelab-solr-dev.geekschicagolabs.com/solr/issuelab/select?";
        $params = [
            'wt' => 'json',
            'defType' => 'edismax',
            'rows' => $perPage,
            'start' => $start,
            'fl' => 'title,date_published,publisher,cover_graphic,id',
            'cache' => false,
            'sort' => $sort,
            'fq' => array("subdomain:{$subdomain}", "client_cat_{$subdomain}:{$category}", "client_include_{$subdomain}:1"),
            'q' => $keywords,
        ];

        $response = json_decode($this->makeRequest($solrUrl . http_build_query($params)));
        if (is_null($response)) {
            return array();
        } else {
            return array('count' => $response->response->numFound, 'docs' => $response->response->docs);
        }
        // https://fconline.foundationcenter.org:8082/issuelab/select?wt=json&defType=edismax&rows=12&start=0&fl=title,date_published,publisher,cover_graphic,id&fq=date_published:[1909-01-01%20TO%202015-09-29]%20AND%20client_include_wings:1&sort=&q=*.*&facet=true&facet.field=author&facet.field=subdomain&facet.field=publisher_ss&facet.field=funder_ss&facet.mincount=1&facet.limit=2000&json.wrf=jQuery111309543557497672737_1443518077622&_=1443518077623
    }

    /**
     * @param string $uri URI for cURL Request
     * @return array Resources
     */
    protected function curlRequest($uri)
    {
        $ch = curl_init(); // initialize curl handle

        curl_setopt($ch, CURLOPT_URL, $uri); // set url to post to
        curl_setopt($ch, CURLOPT_FAILONERROR, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // allow redirects
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // return into a variable
        curl_setopt($ch, CURLOPT_TIMEOUT, 30); // times out after 4s
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

//        curl_setopt($ch, CURLOPT_POST, 1); // set POST method
//        curl_setopt($ch, CURLOPT_POSTFIELDS, "url=index%3Dbooks&field-keywords=PHP+MYSQL"); // add POST fields

        $result = curl_exec($ch); // run the whole process

        if (curl_errno($ch)) {
            throw new \Exception(curl_error($ch));
        }

        curl_close($ch);
        return $result;
    }

    /**
     * @param string $request URL to be hit on Solr using cURL
     * @return array Resources
     */
    protected function makeRequest($request)
    {
        try {
            $response = $this->curlRequest($request);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
        return $response;
    }

}
