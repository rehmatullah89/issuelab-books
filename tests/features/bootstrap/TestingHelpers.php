<?php

trait TestingHelpers
{

    /**
     * Return primary column name in database for specified type
     *
     * @param  string $type
     * @return string
     */
    private function getKey($type)
    {
        $keys = [
            'author'   => 'fullname',
            'coverage' => 'location',
            'resource' => 'title',
            'user'     => 'full_name',
        ];

        if (array_key_exists($type, $keys)) {
            $key = $keys[$type];
        } else {
            $key = $this->getSlug($type);
        }

        return $key;
    }

    /**
     * Return programmatic name of type
     *
     * @param  string $type
     * @return string
     */
    private function getSlug($type)
    {
        return snake_case(str_replace(' ', '_', $type));
    }

    private function getModel($type)
    {
        return studly_case($type);
    }

    private function getIdKey($type)
    {
        if ('resource' === $type) {
            $key = 'research_id';
        } else {
            $key = 'id';
        }
        return $key;
    }

    /**
     * Create an instance of the specifed type
     *
     * @param  string $type
     * @param  string $attribute name of attribute
     * @param  mixed $value      value of attribute
     * @return void
     */
    private function createInstance($type, $attributes = [])
    {
        $model    = $this->getModel($type);
        $slug     = $this->getSlug($type);
        $id       = $this->getIdKey($type);
        $instance = factory('App\\' . $model)->create($attributes);
        /**
         * Create an instance of the model
         * Ex: `Resource::find($resource->research_id)`
         */
        $this->$slug = call_user_func('App\\' . $model . '::find', $instance->$id);

        $this->results = call_user_func('App\\' . $model . '::where', [$id => $instance->$id]);
    }

    /**
     * Create an instance of the specified type (model) and related it to a resource
     *
     * @param  string $type
     * @param  string $name
     * @return void
     */
    private function createAssociation($parent, $child_type, $child_name)
    {
        $associated_model = $this->getModel($child_type);
        $key              = $this->getKey($child_type);
        $slug             = $this->getSlug($child_type);
        $relationship     = camel_case(str_plural($slug));

        /**
         * Call relationship method on parent and save a new associations
         * Ex: $parent->organizations()->save(factory('App\Organization')->create(['organization' => 'IssueLab']));
         */
        if ('author' === $child_type) {
            $name       = explode(' ', $child_name);
            $attributes = [
                'first' => $name[0],
                'last'  => $name[1],
            ];
        } else {
            $attributes = [$key => $child_name];
        }

        call_user_func([$parent, $relationship])->save(factory('App\\' . $associated_model)->create($attributes));
    }
}
