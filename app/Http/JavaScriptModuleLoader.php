<?php

namespace App\Http;

use App\Exceptions\InvalidTypeException;

class JavaScriptModuleLoader
{
    /**
     * Names of modules in our list
     *
     * @var array
     */
    public $modules;

    public function __construct()
    {
        $this->modules = [];
    }

    /**
     * Add a view to the list
     *
     * @param array|string $modules
     */
    public function add($modules)
    {
        if (is_string($modules)) $modules = explode(' ', $modules);
        if (!is_array($modules)) throw new InvalidTypeException($modules, 'array');

        $this->modules = array_unique(array_merge($this->modules, array_filter($modules)));
    }

    /**
     * Get the list of modules in a space separated string
     *
     * @return string
     */
    public function get()
    {
        return implode(' ', $this->modules);
    }
}
