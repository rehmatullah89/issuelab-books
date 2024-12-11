<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
 */

Route::group(['domain' => '{subdomain}.' . AppRequest::host()], function () {
    Route::get('resource/{resource}', 'KnowledgeCenterController@resource');
    
    Route::get('categories/{p_id?}/{cat_id?}', 'KnowledgeCenterController@searchCategories');
    Route::post('categories/{p_id?}/{cat_id?}', 'KnowledgeCenterController@searchCategories');
    
    Route::get('publishers', array('uses'=>'KnowledgeCenterController@listPublishers'));
    Route::get('authors', array('uses'=>'KnowledgeCenterController@listAuthors'));
    Route::get('funders', array('uses'=>'KnowledgeCenterController@listFunders'));
        
    Route::get('/', 'KnowledgeCenterController@index');
    Route::get('/{page}', 'KnowledgeCenterController@index');
});
    //Route::get('publisher-resources/{id?}', array('uses'=>'KnowledgeCenterController@publisherResources'));
    //Route::get('author-resources/{id?}', array('uses'=>'KnowledgeCenterController@authorResources'));
    //Route::get('funder-resources/{id?}', array('uses'=>'KnowledgeCenterController@funderResources'));

Route::group(array('prefix' => 'superadmin'), function() {
    Route::get('get/kc-options/{id?}', array('as' => 'get/kc-options', 'uses' => 'KnowledgeCenterController@getKcOptions'));
    Route::post('update/kc-options', array('as' => 'update/kc-options', 'uses' => 'KnowledgeCenterController@updateKcOptions'));
});

Route::get('/', function () {
    return view('welcome');
});

// Authentication routes...
Route::get('login', ['as' => 'get_login', 'uses' => 'Auth\AuthController@getLogin']);
Route::post('login', 'Auth\AuthController@postLogin');
Route::get('logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('register', ['as' => 'get_register', 'uses' => 'Auth\AuthController@getRegister']);
Route::post('register', 'Auth\AuthController@postRegister');

// Password reset link request routes...
Route::get('password/email', 'Auth\PasswordController@getEmail');
Route::post('password/email', 'Auth\PasswordController@postEmail');

// Password reset routes...
Route::get('password/reset/{token}', 'Auth\PasswordController@getReset');
Route::post('password/reset', 'Auth\PasswordController@postReset');

// Required Actions
Route::get('select-organization', 'RequiredActionController@selectOrganization');
Route::post('select-organization', 'RequiredActionController@addOrganization');

// Solr Actions
Route::resource('solr', 'SolrController');

// Resources
Route::post('resource/edit-kc-resource', 'ResourceController@editKcResources');
Route::get('resource/auth', 'ResourceController@auth');
Route::get('resource/allResources', array('as' => 'resource/allResources','uses'=>'ResourceController@listAllResources'));
Route::get('resource/approveResource/{resourceId}/{sendEmail}', array('as' => 'resource/approveResource','uses'=>'ResourceController@approveResource'));
Route::get('resource/rejectResource/{resourceId}', array('as' => 'resource/rejectResource','uses'=>'ResourceController@rejectResource'));
Route::resource('resource', 'ResourceController', ['except' => 'index']);
Route::get('resource/create/{publishStatus?}/{resourceId?}', ['as' => 'resource/draft', 'uses' => 'ResourceController@create']);

// Issue Areas
Route::resource('issue-areas', 'IssueAreaController');

// Category 
Route::get('categories/category/{kc_id}/{p_id}', array('as' => 'categories/category','uses'=>'CategoryController@createCategory'));
Route::get('categories/editCategory/{kc_id}/{p_id}', array('as' => 'categories/editCategory','uses'=>'CategoryController@editCategory'));
Route::get('categories/group/{kc_id}/{p_id}', array('as' => 'categories/group','uses'=>'CategoryController@groupCategories'));
Route::post('store-category-resoources', 'CategoryController@addToFeaturedResources');
Route::post('store-featured-resources', 'CategoryController@storeCategoryResources');
Route::get('ajax/getGroupCategories', array('uses'=>'CategoryController@getGroupCategories'));       
Route::get('ajax/getCategoryOptions', array('uses'=>'CategoryController@getCategoryOptions'));       
Route::get('ajax/getKnowledgeCenters', array('uses'=>'CategoryController@getKnowledgeCenters'));       
Route::get('ajax/getMyKnowledgeCenters', array('uses'=>'CategoryController@getMyKnowledgeCenters'));       
Route::resource('categories', 'CategoryController');

// Users
Route::resource('users', 'UserController', ['except' => 'show']);

// Authors
Route::get('authors', 'AuthorController@index');
Route::get('authors/list', 'AuthorController@authorsList');
Route::get('authors/index/{letter}', 'AuthorController@index');
//Route::get('authors/profile/{author?}', 'AuthorController@show');
Route::get('authors/profile/{author?}', ['as' => 'authors/profile', 'uses' => 'AuthorController@show']);

// Organizations
Route::get('organizations/funder/{funderId?}', ['as' => 'organizations/funder', 'uses' => 'OrganizationController@funderProfile']);
Route::get('organizations/publisher/{publisherId?}', ['as' => 'organizations/publisher', 'uses' => 'OrganizationController@publisherProfile']);
Route::get('organizations/list', 'OrganizationController@organizationsList');

// Organizations
Route::get('funders/list', 'FunderController@organizationsList');

// Search
Route::get('search', 'SearchController@index');

Route::get('search/authors', 'SearchController@authors');
Route::get('search/funders/list', 'SearchController@fundersList');
Route::get('search/organizations', 'SearchController@organizations');
Route::get('search/knowledge-centers', 'SearchController@knowledgeCenters');

Route::get('search/records', 'SearchController@keywords');
Route::post('search/records/create', 'SearchController@createRecord');
Route::get('search/related', 'SearchController@index');
Route::get('search/related/{related_type}', 'SearchController@index');
Route::get('search/related/{related_type}/{page}', 'SearchController@index');
Route::get('search/{page}', 'SearchController@index');


/**
 * file uploading route for resources
 */
Route::post('resource/upload', ['as' => 'resource/upload', 'uses' => 'ResourceController@uploadFiles']);
Route::post('resource/upload-cover', ['as' => 'resource/upload-cover', 'uses' => 'ResourceController@uploadCoverGraphic']);

Route::get('resource/find-duplicate/{title?}', ['as' => 'resource/find-duplicate', 'uses' => 'ResourceController@findDuplicate']);
Route::post('resource/find-duplicate', ['as' => 'resource/post-duplicate-find', 'uses' => 'ResourceController@findDuplicate']);
Route::post('resource/submit-resource', ['as' => 'resource/submit', 'uses' => 'ResourceController@submitResource']);
Route::post('resource/save-unfinished', ['as' => 'resource/save-unfinished', 'uses' => 'ResourceController@saveUnfinishedResource']);
// Route::get('foo', function () {
//     return 'bar';
// });
