<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Solarium;
use Illuminate\Support\Facades\Config;
use App\Http\Controllers\SolrController;
use App\Resource;
use Mail;

class ReIndexSolr extends Command
{

    /**
     * The name and signature of the console command.
     * @param mode it will take two options 1) scratch 2) sync
     * scratch => will delete all solr data and index again.
     * sync => will delete nothing and only upload those documents not available on solr.
     * @var string
     */
    protected $signature = 'solr:reindex {mode=sync}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete and reindex solr data || update solr with new records -> based on parameters -> Execute command as > php artisan solr:reindex scratch || > php artisan solr:reindex sync < default';

    /**
     * @var $solrConfiguration 
     */
    protected $config;

    /**
     * @var The SOLR client.
     */
    protected $client;
    
    /**
     * @var The SOLR Controller.
     */
    protected $solrController;
    /**
     * @var containing no of synced resources.
     */
    protected $numOfSyncedResources;
    /**
     * @var containing no of re indexed resources.
     */
    protected $numOfReIndexedResources;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->config = Config::get('solr');
        //create solr instance
        $this->client = new Solarium\Client($this->config);
        $this->solrController = new SolrController();
        $this->numOfSyncedResources = 0;
        $this->numOfReIndexedResources = 0;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $mode = $this->argument('mode');
        //temporary del and count
        if ($mode == "del") {
            $this->deleteSolrDocuments();
            echo "Deleted !";
            exit;
        }
        if ($mode == "count") {
            echo "Resources are : ".$this->countSolrDocuments();
            exit;
        }
        if ($mode != "scratch" && $mode != "sync") {
            $this->error("Sorry, you can only use 'scratch' or 'sync' as an argument!");
            exit;
        }
        $name = $this->ask('What is the user name?');
        $password = $this->secret('What is the password?');
        if($name=="issuelab" && $password=="geeks@123") {
            if ($mode == "scratch") {
                if ($this->confirm('Do you really want to re index solr? [y|N]')) {
                    $this->info('Processing ... ');
                    $status = $this->reIndexFromScratch();
                    if($status) {
                        $this->info("Re indexing successfully done for $this->numOfReIndexedResources resources.");
                        $this->info("Uploading files now for $this->numOfReIndexedResources resources, this may take some time...");                        
                        $fileStatus = $this->uploadFilesOnSolr();
                        if($fileStatus) {
                            $this->info("Files successfully uploaded for $this->numOfReIndexedResources resources.");
                        } else {
                            $this->error("Something went wrong, incident reported to admin.");
                        }
                    } else {
                        $this->error("Something went wrong, incident reported to admin.");
                    }
                } else {
                    $this->info('Process terminated !');
                }
            } else if ($mode == "sync") {
                $this->info('Processing ... ');
                $status = $this->syncSolr();
                if($status) {
                    $this->info("$this->numOfSyncedResources resources were synced with solr.");
                } else {
                    $this->error("Something went wrong, incident was reported to admin.");
                }
            }
        } else {
            $this->error("Sorry, Couldn't authenticate.");
        }
    }
    
    /**
     * Delete all solr data and re index solr.
     */
    private function reIndexFromScratch() {
        $count = Resource::count();
        $offset = 0;
        $limit = 10;
        try {
            $deleteAttempts = 1;
            while($this->countSolrDocuments() > 0 && $deleteAttempts <=5 ) {
                $this->deleteSolrDocuments();
                $deleteAttempts++;
                if($deleteAttempts==5) {
                    $this->error("Aaaah, I am tired deleting documents, please contact Geeks!");
                }
            }
            while($count > $offset) {
                $resources = Resource::take($limit)->skip($offset)->get();
//                $resources = Resource::where('research_id','=',23664)->get();
                $offset += $limit;
                
                $update = $this->client->createUpdate();
                $finalDocuments = [];                
                foreach($resources as $resource) {
                    $resourceKcs = Resource::resourceKnowledgeCenters($resource->research_id);
                    if(sizeof($resourceKcs)>0) {
                        foreach($resourceKcs as $resourceKc) {
                            $document = $update->createDocument();
                            $mappedDocument = $this->solrController->mapSolrFields($document, $resource, $resourceKc->text);
                            $finalDocuments[] = $mappedDocument;
                        }
                        if($resource->publish_to_parent==1) {
                            $parentDocument = $update->createDocument(); 
                            $finalDocuments[] = $this->solrController->mapSolrFields($parentDocument, $resource);
                        }
                    } else {
                        $document = $update->createDocument(); 
                        $finalDocuments[] = $this->solrController->mapSolrFields($document, $resource);
                    }
                }
                $update->addDocuments($finalDocuments);
                $update->addCommit();
                $this->client->update($update);
                $this->numOfReIndexedResources += sizeof($finalDocuments);
            }
            return true;
        } catch (\Exception $e) {
            $this->reportIssueToAdminViaEmail($e);
            return false;
        }
    }
    
    /**
     * Delete all solr data and re index solr.
     */
    private function uploadFilesOnSolr() {
        $count = Resource::count();
        $offset = 0;
        $limit = 10;
        try {
            while($count > $offset) {
                $resources = Resource::take($limit)->skip($offset)->get();
                $offset += $limit;
                foreach($resources as $resource) {
//                    $resourceKcs = Resource::resourceKnowledgeCenters($resource->research_id);
                    $this->solrController->uploadFileOnSolr($resource);
//                    if(sizeof($resourceKcs)>0) {
//                        foreach($resourceKcs as $resourceKc) {
//                            $this->solrController->uploadFileOnSolr($resource, $resourceKc->text);
//                        }
//                        if($resource->publish_to_parent==1) {
//                            $this->solrController->uploadFileOnSolr($resource);
//                        }
//                    } else {
//                        $this->solrController->uploadFileOnSolr($resource);
//                    }
                }
            }
            return true;
        } catch (\Exception $e) {
            $this->reportIssueToAdminViaEmail($e);
            return false;
        }
    }
    
    /**
     * Update solr with missing data on solr.
     */
    private function syncSolr() {
        $count = Resource::count();
        $offset = 0;
        $limit = 50;
        try {
            while($count > $offset) {
                $resources = Resource::take($limit)->skip($offset)->get();
                $offset = $offset + $limit;

                $update = $this->client->createUpdate();
                foreach($resources as $resource) {
//                    if(!$this->findDocumentOnSolrByID($resource->identifier)) {
                        $resourceKcs = Resource::resourceKnowledgeCenters($resource->research_id);
                        if(sizeof($resourceKcs)>0) {
                            foreach($resourceKcs as $resourceKc) {
                                if(!$this->findDocumentOnSolrByID($resourceKc->text."_".$resource->identifier)) {
                                    $document = $update->createDocument();
                                    $document = $this->solrController->mapSolrFields($document, $resource, $resourceKc->text);
                                    $update->addDocuments(array($document));
                                    $update->addCommit();
                                    $this->client->update($update);
                                    $this->numOfSyncedResources += 1;
                                }
                            }
                            if($resource->publish_to_parent==1) {
                                if(!$this->findDocumentOnSolrByID("issuelab_".$resource->identifier)) {
                                    $document = $update->createDocument();
                                    $document = $this->solrController->mapSolrFields($document, $resource);
                                    $update->addDocuments(array($document));
                                    $update->addCommit();
                                    $this->client->update($update);
                                    $this->numOfSyncedResources += 1;
                                }
                            }
                        } else {
                            if(!$this->findDocumentOnSolrByID("issuelab_".$resource->identifier)) {
                                $document = $update->createDocument(); 
                                $document = $this->solrController->mapSolrFields($document, $resource);
                                $update->addDocuments(array($document));
                                $update->addCommit();
                                $this->client->update($update);
                                $this->numOfSyncedResources += 1;
                            }
                        }
                        $this->solrController->uploadFileOnSolr($resource);
//                    }
                }

                //remove below commented lines if subdomain is implemented
//                if(sizeof($finalDocuments)>0) {
//                    $update->addDocuments($finalDocuments);
//                    $update->addCommit();
//                    $this->client->update($update);
//                    $this->numOfSyncedResources += sizeof($finalDocuments);
//                }
            }
            return true;
        } catch(\Exception $e) {
            $this->reportIssueToAdminViaEmail($e);
            return false;
        }
    }
    
    /**
     * Deletes all solr documents.
     */
    private function deleteSolrDocuments() {
        $update = $this->client->createUpdate();
        $update->addDeleteQuery('*:*');
        $update->addCommit();
        $this->client->update($update);
    }
    
    /**
     * Counts solr documents
     * @return int Solr document count.
     */
    private function countSolrDocuments() {
        $query = $this->client->createSelect();
        $query->setQuery('*:*');
        $resultset = $this->client->select($query);
        return $resultset->getNumFound();
    }
    
    /**
     * Get single document from solr by unique id
     * @return bool true if document found, false if not found
     */
    private function findDocumentOnSolrByID($id="") {
        $query = $this->client->createSelect();
        $query->setQuery("id:$id");
        $query->setFields(array('id'));
        $resultset = $this->client->select($query);
        if($resultset->getNumFound() > 0) {
            return true;
        } else {
            return false;
        }
    }
    
    /**
     * @param Object $e Exception object
     * Send email to admin.
     */
    private function reportIssueToAdminViaEmail($e="") {
        Mail::send('resources.report_reindex_issue_email', ['e' => $e], function ($m) {
                    $m->from('info@issuelab.org', 'Issuelab-dev.org');
                    $m->to("irfan@geekschicago.com", "Irfan Ahmed")->subject('Resources reindexing issues!');
                });
    }

}
