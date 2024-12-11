<?php

namespace App\Http\Controllers;

use Mail;
use App\Category;
use App\KcListing;
use App\CategoryResources;
use App\User;
use App\ActivityLog;
use App\Resource;
use App\ResourcePending;
use App\Language;
use App\KnowledgeCenter;
use JavaScript;
use App\Helpers\AuthHelper;
use App\Organization;
use App\Author;
use Illuminate\Support\Facades\Auth;
use App\Coverage;
use App\UniversalIdentifier;
use App\Http\Requests\ResourceRequest;
use App\Repositories\ResourceRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use App\Http\Controllers\SolrController;
use Storage;
use Illuminate\Support\Facades\Lang;

class ResourceController extends Controller
{

    protected $resource;

    /**
     * @var App\Organization
     */
    protected $organization;

    /**
     * @var solr
     */
    protected $solr;

    public function __construct(ResourceRepositoryInterface $resource, Organization $organization)
    {
        $this->resource = $resource;
        $this->organization = $organization;
        $this->middleware('auth.resource_creator', array('except' => array('index', 'show')));
        $this->solr = new SolrController;
        Lang::addNamespace('kcLang', base_path('resources/lang'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $resources = $this->resource->approved();
        return view('resources.index', compact('resources'));
    }

    /**
     * Display a listing of pending resources.
     *
     * @return Response
     */
    public function listAllResources()
    {
        $resources = $this->resource->allResources();
        return view('resources.listResources', compact('resources'));
    }

    /**
     * Approve pending resources.
     * @param $resourceId 
     * @return Response
     */
    public function approveResource($resourceId, $sendEmail)
    {
        $resource = Resource::where('research_id', '=', $resourceId)->first();
        if (!is_null($resource)) {
            $resource->approved = 1;
            $resource->available = 1;
            $resource->publish_status = 'APPROVED';
            $resource->approved_by_id = Auth::user()->id;
            $resource->save();
            if ($sendEmail) {
                $this->sendResourceApprovelEmail($resourceId);
            }
            $this->solr->updateSolrDocument($resource->research_id, array('approved' => "1", "available" => "1"));

            return redirect()->action('ResourceController@listAllResources')->with([
                        'message' => 'Resource Approved, Successfully.',
            ]);
        }
        return redirect()->action('ResourceController@listAllResources')->with([
                    'message' => 'No Resource Found.',
        ]);
    }

    /**
     * Reject pending resources.
     * @param $resourceId 
     * @return Response
     */
    public function rejectResource($resourceId)
    {
        $resource = Resource::where('research_id', '=', $resourceId)->first();
        if (!is_null($resource)) {
            $resource->approved = 0;
            $resource->available = 0;
            $resource->publish_status = 'REJECTED';
            $resource->approved_by_id = Auth::user()->id;
            $resource->save();

            $this->solr->updateSolrDocument($resource->research_id, array('approved' => "0", "available" => "0"));

            return redirect()->action('ResourceController@listAllResources')->with([
                        'message' => 'Resource Rejected.',
            ]);
        }
        return redirect()->action('ResourceController@listAllResources')->with([
                    'message' => 'No Resource Found.',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create($publishStatus = "", $resourceId = 0)
    {
        $resource = new Resource;
        $resourceKcs = [];
        if ($publishStatus != "") {
            if (is_numeric($resourceId)) {
                $resource = Resource::find($resourceId);
            } else {
                $resource = Resource::where('identifier', '=', "$resourceId")->first();
            }
            if (($publishStatus != "draft" && $publishStatus != "edit") || is_null($resource)) {
                return redirect('/');
            }
            if (!Auth::user()->isSuperadmin() && $publishStatus == "draft" && Auth::user()->id != $resource->creator_id) {
                return redirect('/');
            }
            
            if (!Auth::user()->isSuperadmin() && $publishStatus == "draft" && $resource->publish_status != "DRAFT") {
                return redirect('/');
            }

            if ($publishStatus == "edit" && !Auth::user()->isSuperadmin()) {
                return redirect('/');
            }
            $resourceKcs = Resource::resourceKnowledgeCenters($resource->research_id);
        }
        $resource->editType = $publishStatus;


        $knowledgeCenters = [];
        $kcAdmin = false;
        $generalUser = false;
        $superAdmin = false;
        if (Auth::user()->isSuperadmin()) {
            $knowledgeCenters = KnowledgeCenter::select('id', 'subdomain AS text')->get()->toArray();
            $superAdmin = true;
        } else if (AuthHelper::isKcAdmin()) {
            $knowledgeCenters = KnowledgeCenter::getKcAdminKCs();
            $kcAdmin = true;
        } else {
            $generalUser = true;
        }
        JavaScript::put([
            'knowledgeCenters' => $knowledgeCenters,
            'kcAdmin' => $kcAdmin,
            'generalUser' => $generalUser,
            'superAdmin' => $superAdmin,
            'langNotifContents' => trans('resource.notifications')
        ]);
        $data = [
            'resource' => $resource,
            'resourceKcs' => $resourceKcs
        ];
        return view('resources.create')->with($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(ResourceRequest $request)
    {
        $requestParams = $this->formatFormData($request->all());
        $resource = $this->resource->newModel($request->user(), $requestParams);
        $resource->sluggify();
        $resource->filename = $this->storeFile($request, 'resource_file', $resource->identifier);
        $resource->save();

        return redirect()->action('ResourceController@show', $resource->identifier);
    }

    private function storeFile(Request $request, $fileInputName, $savedFileName)
    {
        $filePath = false;
        if ($request->hasFile($fileInputName)) {
            $file = $request->file($fileInputName)[0];
            $filePath = "/resources/{$savedFileName}.{$file->getClientOriginalExtension()}";
            Storage::put($filePath, $file);
        }
        return $filePath;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($resource)
    {
        $doi = \App\DoiRequests::where('resource_id', '=', $resource->research_id)->first();
        if(!is_null($doi)) {
            if($doi->short_doi!="") {
                $resource->doi_link = $doi->short_doi;
            } else if($doi->doi!="") {
                $resource->doi_link = $doi->doi;
            }
        }
        return view('resources.show', compact('resource'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Resource $resource
     * @return Response
     */
    public function edit($resource)
    {
        return view('resources.edit', compact('resource', 'organizations'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Resource $resource
     * @return Response
     */
    public function update(Request $request, $resource)
    {

        $resource = SuperAdminResource::whereIdentifier($resource->identifier)->firstOrFail();

        $resource->update($request->all());

        return redirect()->action('ResourceController@show', $resource->identifier)->with([
                    'message' => 'Resource updated.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Format organization form data for updating a resource's organizations
     *
     * @param  array    $organizationInput  Organization form input
     * @return array    Organization data to be saved
     */
    protected function formatFormData($requestParams)
    {
        if (!isset($requestParams['link_resource_organizations']))
            $requestParams['link_resource_organizations'] = [];

        if ($requestParams['organizations']) {
            $orgParams = [];
            foreach ($requestParams['organizations'] as $orgParam)
                array_push($requestParams['link_resource_organizations'], ['role' => 'organization', 'organizations' => $orgParam]);
            unset($requestParams['organizations']);
        }
        if (isset($requestParams['funders']) && !empty($requestParams['funders'])) {
            $funderParams = [];
            foreach ($requestParams['funders'] as $funderParam)
                array_push($requestParams['link_resource_organizations'], ['role' => 'funder', 'organizations' => $funderParam]);
            unset($requestParams['funders']);
        }

        return $requestParams;
    }

    /**
     * Upload resource files.
     */
    public function uploadFiles(ResourceRequest $request)
    {
        $file = Input::file('files');
        $extension = $file->getClientOriginalExtension();
        $originalFileNameWithoutExtension = substr($file->getClientOriginalName(), 0, -(strlen($extension) + 1));
        $sluggyFileNameWithoutExtension = $this->identifier($originalFileNameWithoutExtension);
        $curResId = Input::get('cur_res_id');
        $resourceId = 0;
        if ($curResId == 0) {
            $resource = $this->resource->newModel($request->user());
            $resource->creator_id = Auth::user()->id;
            $resource->filename = $sluggyFileNameWithoutExtension . ".$extension";
            $resource->identifier = $resource->filename;
            $resource->save();
            $resourceId = $resource->research_id;
        } else if ($curResId > 0) {
            //TODO: check owership of resource and draft check
//            $resource = Resource::find($curResId)->draft()->first();
            $resource = Resource::find($curResId);
            $resource->filename = $sluggyFileNameWithoutExtension . ".$extension";
            $resource->save();
            $resourceId = $resource->research_id;
        }

        $destinationPath = public_path() . "/resources/$resourceId";
        $file->move($destinationPath, $resource->filename);
        $coverPath = "";
        if ($extension == "pdf") {
            if ($this->generateCoverFromPDF($destinationPath, $resource->filename)) {
                $coverPath = asset("resources/$resourceId/pdf_cover.png");
            }
        }
        return Response::json(array('coverPath' => $coverPath, 'resourceId' => $resourceId, 'fileName' => $resource->filename, 'extension' => $extension), 200);
    }

    /**
     * Upload Cover graphic.
     */
    public function uploadCoverGraphic(ResourceRequest $request)
    {
        $file = Input::file('coverGraphic');
        $curResId = Input::get('cur_res_id');
        $resourceId = 0;
        $extension = $file->getClientOriginalExtension();
        $originalFileNameWithoutExtension = substr($file->getClientOriginalName(), 0, -(strlen($extension) + 1));
        $sluggyFileNameWithoutExtension = $this->identifier($originalFileNameWithoutExtension);


        if ($curResId == 0) {
            // if user did not save anything till yet, 
            $resource = $this->resource->newModel($request->user());
            $resource->creator_id = Auth::user()->id;
            $resource->cover_graphic = $sluggyFileNameWithoutExtension . ".$extension";
            $resource->identifier = $resource->cover_graphic;
            $resource->save();
            $resourceId = $resource->research_id;
        } else if ($curResId > 0) {
            //TODO: check owership of resource and draft check.
            $resource = Resource::find($curResId);
            $resource->cover_graphic = $sluggyFileNameWithoutExtension . ".$extension";
            $resource->save();
            $resourceId = $resource->research_id;
        }

        $destinationPath = public_path() . "/resources/$resourceId";
        //echo $destinationPath.'/'.$file->getClientOriginalName(); exit;

        $file->move($destinationPath, $resource->cover_graphic);
        //resizing
        $thumb = new \Imagick();
        $thumb->readImage($destinationPath . "/$resource->cover_graphic");
        $thumb->resizeImage(185, 240, \Imagick::FILTER_LANCZOS, 1);
        $coverPath = $destinationPath . "/custom_cover.png";
        $thumb->writeImage($coverPath);
        $thumb->clear();
        $thumb->destroy();
        //remove original file.
        unlink($destinationPath . '/' . $resource->cover_graphic);
        return Response::json(array('coverPath' => asset("resources/$resourceId/custom_cover.png"), 'resourceId' => $resourceId), 200);
    }

    /**
     * @param string $name PDF file name
     * @param string $path Path to load and upload cover graphic.
     * @return boolean returns true if image was successfully generated
     * Takes pdf file name, generates image of 185x240 dimensions.
     */
    private function generateCoverFromPDF($path, $fileName)
    {
        try {
            $imagick = new \imagick($path . "/$fileName" . "[0]"); // 0 for first page of PDF
        } catch (ImagickException $e) {
            $imagick->destroy();
            return false;
        }
        $imagick->setIteratorIndex(0); // rewind to first page or image of a multi series
        $imagick->setImageFormat("png"); // turn it into a png
        $imagick = $imagick->mergeImageLayers(\Imagick::LAYERMETHOD_FLATTEN);

        $imagick->scaleImage(185, 240);  //resize...to less than 300px wide
        $d = $imagick->getImageGeometry();
        $h = $d['height'];
        if ($h > 300) {
            $imagick->scaleImage(185, 240);
        }
        $imagick->setImageCompression(\Imagick::COMPRESSION_UNDEFINED);
        $imagick->setImageCompressionQuality(50);
        $imagick->setIteratorIndex(0);
        $a = $imagick->getImageBlob(); // output as bytestream
        $imagick->destroy();
        $im = imagecreatefromstring($a);
        imagejpeg($im, $path . "/pdf_cover.png", 50);
        return true;
        exit;
    }

    /**
     * @param string $title Resource title 
     */
    public function findDuplicate(ResourceRepositoryInterface $resource)
    {
        $data = array(
            'title' => Input::get('title'),
            'download_url' => Input::get('link_to_external'),
            'pub_date' => Input::get('pub_date'),
            'organizations' => Input::get('organizations'),
            'curResourceId' => Input::get('cur_res_id')
        );
        return json_encode($resource->checkDuplicateResource($data));
    }

    /**
     * @param $resourceId
     * @method logResourceActivity
     */
    public function logResourceActivity($resourceId)
    {
        if (!is_null(Auth::user()) && !empty($resourceId)) {
            if (is_null(ActivityLog::where('listing_id', '=', "$resourceId"))) {
                $actLog = new ActivityLog;
                $actLog->listing_id = $resourceId;
                $actLog->user_id = Auth::user()->id;
                $actLog->user_role = AuthHelper::isKcAdmin() == true ? 'kc_admin' : Auth::user()->isSuperadmin() == true ? 'superadmin' : 'user';
                $actLog->activity = 'add_listing';
                $actLog->organization_id = Auth::user()->org_id;
                $actLog->action_date = date('Y-m-d');
                $actLog->action_date_mktime = strtotime(date('Y-m-d'));
                $actLog->save();
            }
        }
    }

    /**
     * @param $resourceId
     * @method sendResourceApprovelEmail
     */
    public function sendResourceApprovelEmail($resourceId)
    {
        $resource = Resource::where('research_id', '=', $resourceId)->first();
        if (!is_null($resource)) {
            $user = User::find($resource->creator_id);
            if (!is_null($user)) {
                Mail::send('resources.notification_email', ['user' => $user, 'resource' => $resource], function ($m) use ($user) {
                            $m->from('info@issuelab.org', 'Issuelab-dev.org');
                            $m->to($user->email, $user->full_name)->subject('Resource Approval Notification!');
                        });
            }
        }
    }

    /**
     * @method editKcResources
     */
    public function editKcResources(ResourceRequest $request)
    {
        $resourceArray = array();
        $resourceId = $request->current_resource_id;
        if (!is_numeric($request->current_resource_id)) {
            $resourceId = Resource::where('identifier', '=', $request->current_resource_id)->pluck('research_id');
        }
        if (!is_null($resourceId)) {
            $kcl = KcListing::firstOrNew(['kc_id' => $request->kc_select_opt, 'listing_id' => $request->current_resource_id]);
            $kcl->kc_id = $request->kc_select_opt;
            $kcl->listing_id = $request->current_resource_id;
            $kcl->description = $request->description;
            $kcl->key_findings = ($request->tweetable == 'on' ? 1 : 0);
            $kcl->include = ($request->switch_publish == 'on' ? 1 : 0);
            $kcl->date_added = date('Y-m-d');
            $kcl->date_added_mktime = strtotime(date('Y-m-d'));
            $kcl->feature = ($request->switch_featured == 'on' ? 1 : 0);
            $kcl->save();

            CategoryResources::firstOrCreate(['cat_id' => $request->category_select_opt, 'kc_id' => $request->kc_select_opt, 'rescource_id' => $request->current_resource_id]);
            $resource = Resource::where('research_id', '=', $resourceId)->first();
            $kc = KnowledgeCenter::find($kcl->kc_id);
            $cat = Category::find($request->category_select_opt);
            $this->solr->updateKcFields($kc->subdomain, $resource->identifier, array('issuelab_client_cat_identifier_' . $kc->subdomain => ["$cat->category"], 'client_cat_' . $kc->subdomain => ["$cat->category"]));
        }

        return redirect()->back()->with([
                    'message' => 'Resource updated, Successfully.',
        ]);
    }

    /**
     * @param string $title Resource title 
     */
    public function submitResource(ResourceRequest $request)
    {
        $frmAddEssentialData = array();
        $frmAddResourceMetaData = array();
        $frmLicenceOptionsData = array();
        $frmAddCoverGraphic = array();

        parse_str(Input::get('frmAddEssential'), $frmAddEssentialData);
        parse_str(Input::get('addResourceMetaData'), $frmAddResourceMetaData);
        parse_str(Input::get('frmLicenceOptions'), $frmLicenceOptionsData);
        parse_str(Input::get('frmAddCoverGraphic'), $frmAddCoverGraphic);

        $curResId = $frmAddEssentialData['cur_res_id'];
        if ($curResId == 0) {
            $resource = $this->resource->newModel($request->user());
        } else {
            $resource = Resource::find($curResId);
        }

        $resource->title = $frmAddEssentialData['title'];
        $resource->identifier = "";
        $resource->filename = $frmAddEssentialData['file_name'];
        $resource->download_url = $frmAddEssentialData['link_to_external'];
        $resource->pub_date_month = date('n', strtotime($frmAddEssentialData['pub_date']));
        $resource->pub_date_day = date('j', strtotime($frmAddEssentialData['pub_date']));
        $resource->pub_date_year = date('Y', strtotime($frmAddEssentialData['pub_date']));
        $resource->date_added = date('Y-m-d');
        $resource->sluggify();

        $resource->description = $frmAddResourceMetaData['abstract'];

        $resource->ok_to_share = 0;
        $resource->approved = "0";
        $resource->available = "1";

        if ($frmLicenceOptionsData['license'] == "CUSTOM") {
            $resource->rights = $frmLicenceOptionsData['custom'];
        } else if ($frmLicenceOptionsData['license'] == "CC_LICENSE") {
            $resource->rights = $frmLicenceOptionsData['cc_license'];
        } else {
            $publishYear = date('Y', strtotime($frmAddEssentialData['pub_date']));
            $publishOrg = (!is_null($frmAddEssentialData['organizations']) ? $frmAddEssentialData['organizations'][0]['name'] : "");
//            print_r($frmAddEssentialData['organizations'][0]['name']);exit;
            $resource->rights = "© $publishYear by $publishOrg. All rights reserved.";
        }
        $resource->license_type = $frmLicenceOptionsData['license'];
        $resource->cover_graphic_type = $frmAddCoverGraphic['coverGraphicType'];
        if (is_null($resource->research_id)) {
            $resource->creator_id = Auth::user()->id;
        }

        $resource->publish_status = "PENDING";
        if (Auth::user()->isSuperadmin()) {
            $resource->publish_status = $frmAddEssentialData['add_as'];
        }

        if (AuthHelper::isKcAdmin() && isset($frmAddResourceMetaData['knowledgeCenters']) && sizeof($frmAddResourceMetaData['knowledgeCenters']) > 0) {
            $resource->publish_status = $frmAddEssentialData['add_as'];
        }
        if ($frmAddCoverGraphic['coverGraphicType'] == 1) {
            $resource->cover_graphic = "pdf_cover.png";
        } else if ($frmAddCoverGraphic['coverGraphicType'] == 2) {
            $resource->cover_graphic = "custom_cover.png";
        } else {
            $resource->cover_graphic = "default_cover.png";
        }
        $resource->save();
        $data = [
            'frmAddEssentialData' => $frmAddEssentialData,
            'frmAddResourceMetaData' => $frmAddResourceMetaData,
            'frmLicenceOptionsData' => $frmLicenceOptionsData
        ];
        $this->syncResourceRelationships($data, $resource);

        $this->logResourceActivity($resource->research_id);

        if (Auth::user()->isSuperadmin() && ($resource->publish_status == "APPROVED" || $resource->publish_status == "PUBLISHED")) {
            $this->solr->addSolrDocument($resource);
        }

        if (AuthHelper::isKcAdmin() && ($resource->publish_status == "APPROVED" || $resource->publish_status == "PUBLISHED")) {
            $this->solr->addSolrDocument($resource);
        }

        return json_encode(array('response' => true));
    }

    private function identifier($text)
    {
        // replace non letter or digits by -
        $text = preg_replace('~[^\\pL\d]+~u', '_', $text);
        // trim
        $text = trim($text, '-');
        // transliterate
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
        // lowercase
        $text = strtolower($text);
        // remove unwanted characters
        $text = preg_replace('~[^-\w]+~', '', $text);
        if (empty($text)) {
            return 'n-a';
        }
        return $text;
    }

    /**
     * @param array $organizations takes organizations array.
     * @returns organizations ids to add to the relationship table.
     */
    private function prepareOrganizationsdata($data, $frmAddResourceMetaData)
    {
        $orgIds = [];

        if (!is_null($data['organizations'])) {
            // Create an array of arrays to update pivot attributes, below
            // Ex: `[324 => ['role' => 'organization']]`
            foreach ($data['organizations'] as $org) {
                if ($org['name']) {
                    $orgToSync = $this->organization->firstOrCreate(['organization' => $org['name']]);
                    $orgIds[$orgToSync->id] = ['role' => 'organization'];
                }
            }
        }

        if (!is_null($frmAddResourceMetaData['funders'])) {
            // Create an array of arrays to update pivot attributes, below
            // Ex: `[324 => ['role' => 'organization']]`
            foreach ($frmAddResourceMetaData['funders'] as $funder) {
                if ($funder['name']) {
                    $funderToSync = $this->organization->firstOrCreate(['organization' => $funder['name']]);
                    $orgIds[$funderToSync->id] = ['role' => 'funder'];
                }
            }
        }
//        print_r($orgIds); exit;
        return $orgIds;
    }

    /**
     * @param array $authors takes authors array.
     * @returns author ids to add to the relationship table.
     */
    private function prepareAuthordata($data = array())
    {
        $authorIds = [];

        if (!is_null($data['authors'])) {
            foreach ($data['authors'] as $author) {
                if ($author['name']) {
                    $authorToSync = Author::firstOrCreate(['fullname' => $author['name']]);
                    $authorIds[] = $authorToSync->id;
                }
            }
        }
        return $authorIds;
    }

    /**
     * @param array $covergages takes coverages array.
     * @returns coverages ids to add to the relationship table.
     */
    private function prepareCoveragesdata($data = array())
    {
        $coverageIds = [];

        if (!is_null($data['coverages'])) {
            foreach ($data['coverages'] as $coverage) {
                if ($coverage['name']) {
                    $coverageToSync = Coverage::firstOrCreate(['location' => $coverage['name']]);
                    $coverageIds[] = $coverageToSync->id;
                }
            }
        }

        return $coverageIds;
    }

    /**
     * @param array $universalIdentifiers takes universalIdentifiers array.
     * @returns universalIdentifiers ids to add to the relationship table.
     */
    private function prepareUniversalIdentifiersdata($data = array())
    {
        $universalIdentifierIds = [];

        if (!is_null($data['universal_identifiers'])) {
            foreach ($data['universal_identifiers'] as $universalIdentifier) {
                if ($universalIdentifier['universal_identifier']) {
//                    echo $universalIdentifier['universal_identifier']; exit;
                    $universalIdentifierToSync = UniversalIdentifier::firstOrCreate(['universal_identifier' => $universalIdentifier['universal_identifier'], 'type' => $universalIdentifier['type']]);
                    $universalIdentifierIds[] = $universalIdentifierToSync->id;
                }
            }
        }
        return $universalIdentifierIds;
    }

    /**
     * @param array $data all resource relationship data.
     * @param Object $resource Resource object against which data to be saved.
     */
    private function syncResourceRelationships($data, $resource)
    {
        if (isset($data['frmAddEssentialData']['organizations'])) {
            $resource->organizations()->sync($this->prepareOrganizationsdata($data['frmAddEssentialData'], $data['frmAddResourceMetaData']));
        }

        if (isset($data['frmAddResourceMetaData']['authors'])) {
            $resource->authors()->sync($this->prepareAuthordata($data['frmAddResourceMetaData']));
        }

        if (isset($data['frmAddResourceMetaData']['coverages'])) {
            $resource->coverages()->sync($this->prepareCoveragesdata($data['frmAddResourceMetaData']));
        }

        if (isset($data['frmAddResourceMetaData']['universal_identifiers'])) {
            $resource->universalIdentifiers()->sync($this->prepareUniversalIdentifiersdata($data['frmAddResourceMetaData']));
        }

        if (isset($data['frmAddResourceMetaData']['issue_areas'])) {
            $resource->issueAreas()->sync($data['frmAddResourceMetaData']['issue_areas']);
        }
        if (isset($data['frmAddResourceMetaData']['language'])) {
            $resource->languages()->sync($data['frmAddResourceMetaData']['language']);
        }
        if (isset($data['frmAddResourceMetaData']['doctype'])) {
            $resource->doctypes()->sync($data['frmAddResourceMetaData']['doctype']);
        }
        if (isset($data['frmAddResourceMetaData']['knowledgeCenters'])) {
            foreach ($data['frmAddResourceMetaData']['knowledgeCenters'] as $kc) {
                $kcListing = new \App\KcListing();
                $kcListing->kc_id = $kc;
                $kcListing->listing_id = $resource->research_id;
                $kcListing->description = $resource->description;
                $kcListing->save();
            }
        }
    }

    /**
     * add resources as pending/unfinished add
     */
    public function saveUnfinishedResource(ResourceRequest $request)
    {
        $frmAddEssentialData = array();
        $frmAddResourceMetaData = array();
        $frmLicenceOptionsData = array();
        $frmAddCoverGraphic = array();

        parse_str(Input::get('frmAddEssential'), $frmAddEssentialData);
        parse_str(Input::get('addResourceMetaData'), $frmAddResourceMetaData);
        parse_str(Input::get('frmLicenceOptions'), $frmLicenceOptionsData);
        parse_str(Input::get('frmAddCoverGraphic'), $frmAddCoverGraphic);


        $curResId = $frmAddEssentialData['cur_res_id'];
        if ($curResId == 0) {
            $resource = $this->resource->newModel($request->user());
        } else {
            //TODO: check owership of resource.
            $resource = Resource::find($curResId);
        }
        $resource->title = $frmAddEssentialData['title'];
        $resource->filename = $frmAddEssentialData['file_name'];
        $resource->download_url = $frmAddEssentialData['link_to_external'];
        if ($frmAddEssentialData['pub_date'] != "") {
            $resource->pub_date_month = date('n', strtotime($frmAddEssentialData['pub_date']));
            $resource->pub_date_day = date('j', strtotime($frmAddEssentialData['pub_date']));
            $resource->pub_date_year = date('Y', strtotime($frmAddEssentialData['pub_date']));
            $resource->date_added_mktime = strtotime(date('Y-m-d H:i:s'));
        }
        $resource->description = $frmAddResourceMetaData['abstract'];

        $resource->ok_to_share = "1";
        $resource->approved = "1";
        $resource->available = "1";
        if ($frmAddCoverGraphic['coverGraphicType'] == 1) {
            $resource->cover_graphic = "pdf_cover.png";
        } else if ($frmAddCoverGraphic['coverGraphicType'] == 2) {
            $resource->cover_graphic = "custom_cover.png";
        }
        $resource->sluggify();
        if (isset($frmLicenceOptionsData['license']) && $frmLicenceOptionsData['license'] == "CUSTOM") {
            $resource->license = $frmLicenceOptionsData['custom'];
        } else if (isset($frmLicenceOptionsData['license']) && $frmLicenceOptionsData['license'] == "CC_LICENSE") {
            $resource->license = $frmLicenceOptionsData['cc_license'];
        } else {
            $publishYear = date('Y', strtotime($frmAddEssentialData['pub_date']));
            $publishOrg = (isset($frmAddEssentialData['organizations']) && sizeof($frmAddEssentialData['organizations']) > 0) ? $frmAddEssentialData['organizations'][0]['name'] : "";
            $resource->license = "© $publishYear by $publishOrg. All rights reserved.";
        }

        if (isset($frmLicenceOptionsData['license'])) {
            $resource->license_type = $frmLicenceOptionsData['license'];
        }

        if (isset($frmAddResourceMetaData['publish_to_issuelab']) && $frmAddResourceMetaData['publish_to_issuelab'] == "on") {
            $resource->publish_to_parent = 1;
        }

        $resource->cover_graphic_type = $frmAddCoverGraphic['coverGraphicType'];
        $resource->creator_id = Auth::user()->id;

        $resource->save();
        $data = [
            'frmAddEssentialData' => $frmAddEssentialData,
            'frmAddResourceMetaData' => $frmAddResourceMetaData,
            'frmLicenceOptionsData' => $frmLicenceOptionsData
        ];
        $this->syncResourceRelationships($data, $resource);
        return json_encode(array('response' => true, 'resourceId' => $resource->research_id));
    }

}
