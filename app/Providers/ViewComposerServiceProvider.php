<?php

namespace App\Providers;

use App\Author;
use App\Funder;
use App\Coverage;
use App\Doctype;
use App\Helpers\ApplicationHelper as Helper;
use App\IssueArea;
use App\KnowledgeCenter;
use App\Language;
use App\Organization;
use App\Resource;
use App\User;
use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;
use JavaScript;
use Route;

class ViewComposerServiceProvider extends ServiceProvider
{

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
    public function boot(User $user, Resource $resource)
    {
        $this->addModule('users.form', ['typeahead', 'repeater']);
        $this->addModule('shared.delete-modal', 'delete-modal');
        $this->addModule('shared.search-form', 'search-input');
        $this->addModule('required.select-organization', 'typeahead');
        $this->addModule('auth.register', 'antispam');

        $this->addModule('resources.create', ['typeahead', 'repeater', 'multi-select']);
        $this->addModule('resources.wizard.resource_metadata', ['typeahead', 'repeater', 'multi-select']);

        view()->composer(['resources.super-admin-fields-form'], function ($view) {
            JavaScript::put(['authors' => Author::lists('fullname')->toArray()]);
            JavaScript::put(['funders' => Organization::lists('organization')->toArray()]);
            $view->with('coverages', (new Collection(['' => '']))->merge(Coverage::lists('location', 'id')));
            $view->with('languages', (new Collection(['' => '']))->merge(Language::lists('language', 'id')));
            $view->with('doctypes', $this->createCheckboxes('doctypes[][identifier]', Doctype::lists('identifier', 'doctype')));
            $view->with('issueAreas', $this->createCheckboxes('issue_areas[][identifier]', IssueArea::lists('identifier', 'issue_area')));
            $view->with('resourceStatuses', $this->createCheckboxes('status', new Collection(Resource::$status)));
        });
        
        view()->composer(['resources.wizard.resource_metadata'], function ($view) {
            JavaScript::put(['authors' => Author::lists('fullname')->toArray()]);
            JavaScript::put(['funders' => Funder::lists('funder')->toArray()]);
            JavaScript::put(['coverages' => Coverage::lists('location')->toArray()]);
            JavaScript::put(['organizations' => Organization::lists('organization')->toArray()]);
            JavaScript::put([
                'issueAreas' => IssueArea::select('id', 'issue_area AS text')->get()->toArray(),
                'languages' => Language::select('id', 'language AS text')->get()->toArray(),
                'docTypes' => Doctype::select('id', 'doctype AS text')->get()->toArray()
            ]);
        });

        view()->composer(['users.form', 'required.select-organization', 'resources.main-fields-form'], function ($view) {
            JavaScript::put(['organizations' => Organization::lists('organization')->toArray()]);
        });

        view()->composer(['resources.create', 'resources.edit'], function ($view) use ($resource) {
            $view->with('rules', $resource->getRules());
        });

        view()->composer(['users.create', 'users.edit'], function ($view) use ($user) {
            $view->with('rules', $user->getRules());
        });

        // Display our list of modules as data-modules on the body class in our main app view
        view()->composer(['app', 'knowledge-center'], function ($view) {
            app('modules')->add(['typeahead', 'search-input', 'overlay-modal']);
            $view->with('modules', app('modules')->get());
        });

        // Send subdomain to knowledge center master template for including the custom templates for that knowledge center
        view()->composer('knowledge-center', function ($view) {
            $subdomain = Route::current()->getParameter('subdomain');
            $view->with('subdomain', $subdomain);
            $view->with('title', KnowledgeCenter::where('subdomain', $subdomain)->first()->title);
        });
    }

    private function createCheckboxes($name, $collection)
    {
        $helper     = new Helper;
        $checkboxes = $helper->checkboxes(
            $collection,
            $name,
            $javascript = false
        );
        if (substr($name, -1) == ']') {
            foreach ($checkboxes as $key => &$checkbox) {
                $checkbox['name'] = substr($checkbox['name'], 0, -2);
            }
        }
        return $checkboxes;
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
