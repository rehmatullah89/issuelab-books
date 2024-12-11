<?php

namespace App\Traits;

trait ModelType {
    public function type() {
        return snake_case($this->get_class_name(get_class()));
    }

    /**
     * Return the name of a class without the namespace
     * @param  string $classname
     * @return string
     */
    protected function get_class_name($classname)
    {
        if ($pos = strrpos($classname, '\\')) return substr($classname, $pos + 1);
        return $pos;
    }
}
