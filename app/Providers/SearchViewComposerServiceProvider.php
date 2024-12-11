<?php

namespace App\Providers;

use App\Helpers\ApplicationHelper;
use App\KnowledgeCenter;
use App\Repositories\CoverageRepositoryInterface;
use App\Repositories\DoctypeRepositoryInterface;
use App\Repositories\IssueAreaRepositoryInterface;
use App\Repositories\ResourceRepositoryInterface;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Request;
use JavaScript;
use Route;

class SearchViewComposerServiceProvider extends ServiceProvider
{

    /**
     * Copyright options
     *
     * @var array of copyrights in format [label => value]
     */
    protected $copyright = [
        'Creative Commons' => 'creativecommons',
    ];

    /**
     * Most common languages used in library
     *
     * @var array of languages in format [label => value]
     */
    protected $languages = [
        'English'    => 'eng',
        'Portuguese' => 'por',
        'French'     => 'fre',
        'Spanish'    => 'spa',
        'Dutch'      => 'dut',
        'Arabic'     => 'ara',
        'German'     => 'ger',
        'Indonesian' => 'ind',
        'Italian'    => 'ita',
        'Chinese'    => 'chi',
        'Russian'    => 'rus',
    ];

    protected function addModule($views, $modules)
    {
        view()->composer($views, function ($view) use ($modules) {
            app('modules')->add($modules);
        });
    }

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(
        ApplicationHelper $helper,
        CoverageRepositoryInterface $coverage,
        DoctypeRepositoryInterface $doctype,
        IssueAreaRepositoryInterface $issueArea,
        ResourceRepositoryInterface $resource,
        Request $request
    ) {
        $this->addModule('search.search-layout', ['typeahead']);
        $this->addModule('search.index', ['resource-search']);
        $this->addModule('knowledge-centers.index', ['kc-resource-search']);
        $this->addModule('knowledge-centers.categories', ['resource-search']);

        view()->composer(['search.index'], function ($view) {
            JavaScript::put(['specialCollections' => KnowledgeCenter::where("service_type", "sc")->lists('subdomain')->toArray()]);
        });

        // Send search filters data
        view()->composer('search.search-layout', function ($view) use ($helper, $coverage, $doctype, $issueArea, $resource) {
            
            $category_options = array();
            $previous_val = '';
            $subdomain = Route::current()->getParameter('subdomain');
            $kc = \App\KnowledgeCenter::where('subdomain','=',$subdomain)->first();
            if(!is_null($kc)){
                $cat = \App\Category::where('kc_id','=',$kc->id)->orderBy('p_id')->get();
                $parent_arr = array();
                $temp_val_arr = array();
                foreach ($cat as $key => $value){
                    if($value->p_id == 0){
                        $parent_arr[$value->id] = array();
                        $temp_val_arr[$value->id] = $value->category;
                    }else{
                        if (array_key_exists($value->p_id, $parent_arr)) {
                            if($value->p_id != $previous_val){
                                $parent_arr[$value->p_id] += array('' => 'Select a value!');
                                $previous_val = $value->p_id;
                            }
                            $parent_arr[$value->p_id] += array($value->category => $value->category);
                        }
                    }
                }
                foreach($parent_arr as $k=>$v){
                    $category_options[$temp_val_arr[$k]] = $v; 
                }
            }
            
            $copyright = $helper->checkboxes(
                new Collection($this->copyright),
                'copyright',
                $javascript = true
            );
            
            $categories = $helper->checkboxes(
            \App\Category::all()->lists('category','category'),
                'categories',
                $javascript = true
            );

            $coverage = $coverage->all()->lists('location', 'location');
           
            $doctypes = $helper->checkboxes(
                $doctype->all()->lists('identifier', 'doctype'),
                'doctype',
                $javascript = true
            );

            $languages = $helper->checkboxes(
                new Collection($this->languages),
                'language',
                $javascript = true
            );

            $issueAreas = $helper->checkboxes(
                $issueArea->all()->lists('identifier', 'issue_area'),
                'issue_area',
                $javascript = true
            );

            $earliestPubdate = Carbon::createFromDate(1970, 1, 1);
            $now             = Carbon::now();

            JavaScript::put([
                'earliestPubdate' => [
                    'year'  => (string) $earliestPubdate->year,
                    'month' => str_pad($earliestPubdate->month, 2, '0', STR_PAD_LEFT),
                    'day'   => str_pad($earliestPubdate->day, 2, '0', STR_PAD_LEFT),
                ],
                'now'             => [
                    'year'  => (string) $now->year,
                    'month' => str_pad($now->month, 2, '0', STR_PAD_LEFT),
                    'day'   => str_pad($now->day, 2, '0', STR_PAD_LEFT),
                ],
            ]);

            $data     = compact('copyright', 'coverage', 'categories', 'doctypes', 'issueAreas', 'languages', 'earliestPubdate','category_options');
            $viewData = $view->getData();

            if (!isset($viewData['isKC'])) {
                $data['isKC'] = false;
            }

            $view->with($data);

        });
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
