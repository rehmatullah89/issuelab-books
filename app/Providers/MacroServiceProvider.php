<?php

namespace App\Providers;

use App\Author;
use App\UniversalIdentifier;
use Former\Former;
use Illuminate\Auth\Guard;
use Illuminate\Html\HtmlBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class MacroServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(Former $former, HtmlBuilder $html, Request $request, Guard $auth)
    {
        $former->macro('repeater', function ($name, $data, $options = array()) use ($former, $request) {
            $defaultOptions = [
                'include_contact' => false,
                'label'           => $name,
                'required'        => false,
                'input_name'      => $name,
                'data_local'      => $name,
                'layout'          => 'old',
                'placeholder'     => '',
                'dbFieldName'     => 'name',
            ];
            $options = array_merge($defaultOptions, $options);

            $data = $request->old($name) ? $request->old($name) : $data;
            if ($options['required']) {
                $options['label'] .= $former->getOption('required_text');
            }
            return view('macros.repeater', compact('name', 'data', 'options'));
        });

        $former->macro('select2_repeater', function ($name, $select_options, $data, $options = array()) use ($former, $request) {
            $defaultOptions = [
                'include_contact' => false,
                'label'           => $name,
                'required'        => false,
                'input_name'      => $name,
            ];
            $options = array_merge($defaultOptions, $options);

            $data = $request->old($name) ? $request->old($name) : $data;
            if ($options['required']) {
                $options['label'] .= $former->getOption('required_text');
            }

            return view('macros.select2_repeater', compact('name', 'select_options', 'data', 'options'));
        });

        $former->macro('universal_identifier_repeater', function ($data = array(), $options = array()) use ($former, $request) {
            $name = 'universal_identifiers';
            $defaultOptions = [
                'label'           => $name,
                'required'        => false,
                'input_name'      => $name,
            ];
            $options = array_merge($defaultOptions, $options);

            $isbnsTypes = [];
            foreach(UniversalIdentifier::$types as $type)
              $isbnsTypes[$type] = $type;

            $data = $request->old($name) ? $request->old($name) : $data;
            if ($options['required']) {
                $options['label'] .= $former->getOption('required_text');
            }

            return view('macros.universal_identifier_repeater', compact('name', 'isbnsTypes', 'data', 'options'));
        });

        $former->macro('checkbox_single', function ($name, $label = null) {
            if (null === $label) {
                $label = ucfirst(str_replace(['_', '-'], '', $name));
            }
            return view('macros.checkbox-single', compact('name', 'label'));
        });

        $html->macro('isActive', function ($url) use ($request) {
            return $request->is($url) ? 'active' : '';
        });

        $html->macro('loginLogoutLink', function () use ($html, $auth) {
            if ($auth->check()) {
                $text = 'Log out';
                $href = '/logout';
            } else {
                $text = 'Log in';
                $href = '/login';
            }
            return $html->link($href, $text);
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
