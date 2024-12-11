<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Repositories\AuthorRepositoryInterface;
use App\Repositories\FunderRepositoryInterface;
use App\Repositories\KnowledgeCenterRepositoryInterface;
use App\Repositories\LanguageRepositoryInterface;
use App\Repositories\OrganizationRepositoryInterface;
use App\Repositories\SearchRecordRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Input;
use Response;

class SearchController extends Controller
{

    /**
     * Model Repositories
     *
     * @var \App\Repositories\*RepositoryInterface
     */
    protected $author;
    protected $knowledgeCenter;
    protected $language;
    protected $record;

    public function __construct(AuthorRepositoryInterface $author, FunderRepositoryInterface $funder, KnowledgeCenterRepositoryInterface $knowledgeCenter, LanguageRepositoryInterface $language, OrganizationRepositoryInterface $organization, SearchRecordRepositoryInterface $record)
    {
        $this->author = $author;
        $this->funder = $funder;
        $this->knowledgeCenter = $knowledgeCenter;
        $this->language = $language;
        $this->organization = $organization;
        $this->record = $record;
        Lang::addNamespace('kcLang', base_path('resources/lang'));
    }

    public function index()
    {

        return view('search.index');
    }

    /**
     * Return funder(s) list found by a query
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function fundersList(Request $request)
    {
        $funders = $this->funder->searchList($request->q);

        if (Input::has('callback')) {
            return Response::json($funders)->setCallback(Input::get('callback'));
        }

        return $funders;
    }

    /**
     * Return author(s) by specified fullname(s)
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function authors(Request $request)
    {
        $authors = $this->author->searchByFullname($request->fullname);

        return $authors;
    }

    /**
     * Return publishers(s) by specified name(s)
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function organizations(Request $request)
    {
        $publishers = $this->organization->searchByName($request->organization);

        return $publishers;
    }

    /**
     * Return Knowledge Center(s) by specified subdomain(s)
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function knowledgeCenters(Request $request)
    {
        $knowledgeCenters = $this->knowledgeCenter->searchBySubdomain($request->subdomain);

        return $knowledgeCenters;
    }

    /**
     * Return keywords used in previous searches
     *
     * @param  \Illuminate\Http\Request
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function keywords(Request $request)
    {
        return $this->record->keywords($request->keywords);
    }

    /**
     * Create a new search record
     *
     * @param  \Illuminate\Http\Request
     * @return \App\SearchRecordRepositoryInterface
     */
    public function createRecord(Request $request)
    {
        return $this->record->create($request->all());
    }

}
