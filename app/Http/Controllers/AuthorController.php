<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Repositories\AuthorRepositoryInterface;
use Illuminate\Http\Request;
use App\Author;
use Input;
use Response;

class AuthorController extends Controller
{

    /**
     * Display a listing of authors
     *
     * @return Response
     */
    public function index(AuthorRepositoryInterface $repository, $letter = 'a')
    {
        $authors = $repository->directory($letter);
        return view('authors.index', compact('authors', 'letter'));
    }

    /**
     * Return author(s) list found by a query
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function authorsList(AuthorRepositoryInterface $repository, Request $request)
    {
        $authors = $repository->searchList($request->q);

        if (Input::has('callback')) {
            return Response::json($authors)->setCallback(Input::get('callback'));
        }

        return $authors;
    }

    /**
     * Display an individual author page
     *
     * @param  \App\Author $author
     * @return Response
     */
    public function show($author)
    {
        return view('authors/show', compact('author'));
    }

}
