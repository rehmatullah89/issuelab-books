<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Resource;
use Solarium;
use Illuminate\Support\Facades\Config;
//use curlfile

class SolrController extends Controller
{

    /**
     * @var The SOLR client.
     */
    protected $client;

    /**
     * @var $solrConfiguration 
     */
    protected $config;

    /**
     * Constructor
     * */
    public function __construct()
    {
        $this->config = Config::get('solr');
        //create solr instance
        $this->client = new Solarium\Client($this->config);
//        $this->uploadFileOnSolr(Resource::find(23688));
    }

    /**
     * @var $resource
     * @return \Illuminate\Http\Response
     */
    public function addSolrDocument($resource)
    {
        $update = $this->client->createUpdate();
        $finalDocuments = [];

        $resourceKcs = Resource::resourceKnowledgeCenters($resource->research_id);
        if (sizeof($resourceKcs) > 0) {
            foreach ($resourceKcs as $resourceKc) {
                $document = $update->createDocument();
                $mappedDocument = $this->mapSolrFields($document, $resource, $resourceKc->text);
                $finalDocuments[] = $mappedDocument;
            }
            if ($resource->publish_to_parent == 1) {
                $documentParent = $update->createDocument();
                $finalDocuments[] = $this->mapSolrFields($documentParent, $resource);
            }
        } else {
            $document = $update->createDocument();
            $finalDocuments[] = $this->mapSolrFields($document, $resource);
        }

        $update->addDocuments($finalDocuments);
        $update->addCommit();
        $this->client->update($update);
//        $this->uploadFileOnSolr($resource);
        return true;
    }

    /**
     * @var $id
     * @var $resourceArray
     * @return \Illuminate\Http\Response
     */
    public function updateSolrDocument($id, $resourceArray)
    {
        $resource = Resource::where('research_id', '=', $id)->first();
        if (!is_null($resource)) {
            foreach ($resourceArray as $key => $value) {
                $resource->$key = $value;
            }
            $this->addSolrDocument($resource);
        }
        return true;
    }

    /**
     * @var $id
     * @var $fieldsArray
     * @return \Illuminate\Http\Response
     */
    public function updateKcFields($subdomain, $id, $fieldsArray)
    {
        $update = $this->client->createUpdate();
        $document = $update->createDocument();
        $resource = Resource::where('identifier', '=', $id)->first();
        $documentFields = $this->mapSolrFields($document, $resource, $subdomain);
        if (!empty($fieldsArray)) {
            foreach ($fieldsArray as $key => $value) {
                $documentFields->$key = $value;
            }
            $update->addDocuments(array($documentFields));
            $update->addCommit();
            $this->client->update($update);
        }
        return true;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function mapSolrFields($document, $resource, $subdomain = "")
    {
        $document->rights = ($resource->rights->isCreativeCommons()) ? "$resource->rights->uri" : "$resource->rights";
        $document->publisher = [];
        if (sizeof($resource->publishers) > 0) {
            $document->publisher = $this->prepareMultiValuedField($resource->publishers, 'organization');
        }
        $document->organization = [];
        if (sizeof($resource->organization) > 0) {
            $document->organization = $this->prepareMultiValuedField($resource->organization, 'organization');
        }
        $languageData = $this->getLanguageString($resource);
        $document->http_lastmod = date("D, d M Y G:i:s T");
        $document->language_code = (sizeof($languageData)>0) ? implode(',',$languageData['languageAbbrev']) : "eng";
        $document->resource_id = "$resource->research_id";
        $document->available = "1";
        $document->subject = empty($resource->subject1) ? ["0"] : $resource->subject1;
        $document->coverage = [];
        if (sizeof($resource->coverages) > 0) {
            $document->coverage = $this->prepareMultiValuedField($resource->coverages, 'location');
        }
        $document->database = "issuelab";
        $document->pubtype = [];
        if (sizeof($resource->doctypes) > 0) {
            $document->pubtype = $this->prepareMultiValuedField($resource->doctypes, 'doctype');
        }
        $document->permalink = "http://www.issuelab-dev.org/permalink/resource/" . $resource->research_id;
        $document->date_added = date('Y-m-d', strtotime($resource->date_added));
        $document->approved = "1";
//        if($subdomain!="") {
//            $document->id = $subdomain."_".$resource->identifier;
//        } else {
//            $document->id = "issuelab_".$resource->identifier;
//        }
        $document->id = $resource->identifier;
        $document->issuelab_id = $resource->identifier;
        $document->date_published_dt = date('Y-m-d\TH:i:s\Z');
        $document->date_modified = date('Y-m-d', strtotime($resource->date_modified));
        $document->pubdocument = "http://www.issuelab-dev.org/permalink/resource/" . $resource->research_id;
        $document->date_published = date('Y-m-d', strtotime($resource->pub_date_year . '-' . $resource->pub_date_month . '-' . $resource->pub_date_day));
        $document->meta_title = [$resource->title];
        $document->description = [$resource->description];
        $document->language = (sizeof($languageData)>0) ? implode(',',$languageData['languageNames']) : "English";
        $document->year = $resource->pub_date_year;
        $document->cover_graphic = $this->getCoverGraphicURL($resource);
        $document->docurl = "http://www.issuelab-dev.org/fetch/" . $resource->filename;
        $document->author = [];
        if (sizeof($resource->authors) > 0) {
            $document->author = $this->prepareMultiValuedField($resource->authors, 'fullname');
        }
        $document->doc_title = [$resource->title];
        $document->c = "issuelab";
        //$document->subdomain = [""];
        //$document->client_cat_wings = ["Impact Investmen"];
        if ($subdomain != "") {
            $document->{'issuelab_client_type_' . $subdomain} = ["kc"];
            $document->{'client_remove_' . $subdomain} = ["0"];
            $document->{'client_include_' . $subdomain} = ["1"];
            $document->subdomain = [$subdomain];
            $document->{'resource_listing_feature_' . $subdomain} = "0";  //new field
            $document->{'client_cat_' . $subdomain} = [];
            if (sizeof($resource->categories) > 0) {
                $document->{'client_cat_' . $subdomain} = $this->prepareMultiValuedField($resource->categories, 'category');
            }
            $document->{'issuelab_client_cat_identifier_' . $subdomain} = [];
            if (sizeof($resource->categories) > 0) {
                $document->{'issuelab_client_cat_identifier_' . $subdomain} = $this->prepareMultiValuedField($resource->categories, 'identifier');
            }
            $document->{'client_kc_teasers_on_' . $subdomain} = ["0"];
            $document->{'client_kc_tweets_on_' . $subdomain} = ["0"];
            $document->{'client_resource_keyfindings_on_' . $subdomain} = ["0"];
            $document->{'client_feature_' . $subdomain} = ["0"];
            $document->{'client_feature_sort_' . $subdomain} = ["0"];
            $document->{'client_kc_keyfindings_on_' . $subdomain} = ["0"];
        }
        return $document;
    }

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function deleteSolrDocument($id)
    {
        $update = $this->client->createUpdate();
        $update->addDeleteById($id);
        $update->addCommit();
        $this->client->update($update);
        return true;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // create a ping query
        $ping = $this->client->createPing();

        // execute the ping query
        try {
            $result = $this->client->ping($ping);
        } catch (Solarium\Exception $e) {
            // the SOLR server is inaccessible, do something
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function prepareMultiValuedField($data, $type)
    {
        $multiDataArray = [];
        if (!is_null($data)) {
            foreach ($data as $d) {
                $multiDataArray[] = $d->$type;
            }
        }
        return $multiDataArray;
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getLanguageString($resource)
    {
        $languages = $resource->languages;
        $languageData = [];
        if(sizeof($languages) > 0) {
            foreach($languages as $language) {
                $languageData['languageNames'][] = $language->language;
                $languageData['languageAbbrev'][] = $language->abbrev;
            }
        }
        return $languageData;
    }

    /**
     * Generate cover graphic URL
     *
     * @param Object  $resource
     * @return \Illuminate\Http\Response
     */
    public function getCoverGraphicURL($resource)
    {
        if ($resource->cover_graphic_type == 1) {
            return asset("resources/$resource->research_id/$resource->cover_graphic");
        } else if ($resource->cover_graphic_type == 2) {
            return asset("resources/$resource->research_id/$resource->cover_graphic");
        } else {
            return asset("resources/default_cover.png");
        }
    }

    /**
     * Upload file on solr
     * @param Object $resource
     * @return \Illuminate\Http\Response
     */
    public function uploadFileOnSolr($resource)
    {
        if($resource->filename!="") {
            $resourceKcs = Resource::resourceKnowledgeCenters($resource->research_id);
            if(sizeof($resourceKcs)>0) {
                foreach($resourceKcs as $resourceKc) {
                    $identifier = $resourceKc->text."_".$resource->identifier;
                    $identifier = $resource->identifier;
//                    $targetUrl = env('SOLR_SERVER_URL', '198.50.161.7:8080/solr') . "/update/extract?extractFormat=text&literal.id=$identifier&literal.annotation=The+PDF+Document&commit=true";
                    $targetUrl = env('SOLR_SERVER_URL', '198.50.161.7:8080/solr') . "/update/extract?extractOnly=true&extractFormat=text&literal.id=$identifier&commit=true";
                    $path = "C:/xampp/htdocs/issuelab.org/public/resources/23688/get_started_with_dropbox.pdf";
//                    $args['file'] = curl_file_create(public_path("resources/$resource->research_id/$resource->filename"));
                    $args['file'] = curl_file_create($path);
//                    curl_setopt($curl_handle, CURLOPT_POSTFIELDS, $args);
//                    $post = array('file' => new \CurlFile($targetUrl));
                    $this->makeCurlRequest($targetUrl, $args);
                }
                if($resource->publish_to_parent==1) {
                    $identifier = "issuelab_".$resource->identifier;
                    $targetUrl = env('SOLR_SERVER_URL', '198.50.161.7:8080/solr') . "/update/extract?extractFormat=text&literal.id=$identifier&literal.annotation=The+PDF+Document&commit=true";
                    $args['file'] = curl_file_create(public_path("resources/$resource->research_id/$resource->filename"));
                    $this->makeCurlRequest($targetUrl, $args);
               }
            } else {
                $identifier = "issuelab_".$resource->identifier;
                $targetUrl = env('SOLR_SERVER_URL', '198.50.161.7:8080/solr') . "/update/extract?extractFormat=text&literal.id=$identifier&literal.annotation=The+PDF+Document&commit=true";
                $args['file'] = curl_file_create(public_path("resources/$resource->research_id/$resource->filename"));
                $this->makeCurlRequest($targetUrl, $args);
            }
        }
    }
    
    /**
     * Make curl request
     */
    
    function makeCurlRequest($targetUrl, $post) {
        $ch = curl_init ();
        curl_setopt ( $ch, CURLOPT_URL, $targetUrl);
        curl_setopt ( $ch, CURLOPT_POST, 1 );
        curl_setopt ( $ch, CURLOPT_POSTFIELDS, $post );
        curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );    
//        curl_setopt ( $ch, CURLOPT_USERPWD, "user:pass" ); // for Apache Basic Auth

        $result = curl_exec($ch);
        $httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close ( $ch );
//        echo "<pre>";
//        print_r($httpStatus);
//        print_r($result);exit;
    }

}
