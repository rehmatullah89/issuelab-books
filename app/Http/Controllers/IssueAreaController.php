<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IssueAreaController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\IssueArea  $issueArea
     * @return Response
     */
    public function show($issueArea)
    {
        return $issueArea->issue_area;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\IssueArea  $issueArea
     * @return Response
     */
    public function edit($issueArea)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $issueArea
     * @return Response
     */
    public function update(Request $request, $issueArea)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\IssueArea  $issueArea
     * @return Response
     */
    public function destroy($issueArea)
    {
        //
    }

}
