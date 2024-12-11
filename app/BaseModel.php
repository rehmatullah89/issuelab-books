<?php

namespace App;

use Watson\Validating\ValidatingModel;

class BaseModel extends ValidatingModel {

    /**
     * Whether the model should throw a ValidationException if it
     * fails validation. If not set, it will default to false.
     *
     * @var boolean
     */
    protected $throwValidationExceptions = true;

    /**
     * Get the global validation rules.
     *
     * @param string|array $excluded from results
     * @return array
     */
    public function getRules($excluded = []) {
        $rules = isset($this->rules) ? $this->rules : [];
        if ($excluded) {
            foreach ((array) $excluded as $rule) {
                if (isset($rules[$rule])) {
                    unset($rules[$rule]);
                }
            }
        }
        return $rules;
    }

    private $tmp_store_attributes = [];

    /**
     * Create a new Eloquent model instance.
     *
     * @param  array  $attributes
     * @return void
     */
    public function __construct(array $attributes = []) {
        $this->tmp_store_attributes = $attributes;

        parent::__construct($attributes);
    }

    /**
     * Save the model to the database.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = []) {
        $saved = parent::save($options);

        $this->syncNestedAttributes();

        return $saved;
    }

    private function syncNestedAttributes() {
        if ($this->accept_nested_attributes) {
            foreach ($this->accept_nested_attributes as $nested_attribute) {
                $class_name = "App\\" . trim(str_replace(' ', '', ucwords(str_replace('_', ' ', $nested_attribute))), 's');
                if (class_exists($class_name))
                    $this->syncNestedAttribute($class_name, $nested_attribute);
            }
        }
    }

    private function syncNestedAttribute($class_name, $association_name) {
        $processed_attributes = $this->findModelAttributesForParam($this->tmp_store_attributes, $association_name);
        // nested_attribute uses _ but is camelcased except the first char
        $association_name = lcfirst(str_replace(' ', '', ucwords(str_replace('_', ' ', $association_name))));
        if ($processed_attributes)
            $this->syncAssociations($class_name, $association_name, $processed_attributes);
    }

    private function syncAssociations($class_name, $association_name, $attributes) {
        $associations = [];
        foreach ($attributes as $attribute) {
            $record = $class_name::firstOrCreate($attribute['attributes']);
            if (isset($attribute['association_attributes']) and !empty($attribute['association_attributes'])) {
                $associations[$record->id] = $attribute['association_attributes'];
            } else {
                array_push($associations, $record->id);
            }
        }
        $this->$association_name()->sync($associations);
    }

    public static function findModelAttributesForParam($attributes, $param_name) {
        $formatted_attributes = [];
        // param is at first level of attributes
        if (isset($attributes[$param_name]) && !empty($attributes[$param_name])) {
            foreach ($attributes[$param_name] as $attribute) {
                array_push($formatted_attributes, ['attributes' => $attribute, 'association_attributes' => false]);
            }

            // param could be nested in linking table properties
        } else {
            foreach ($attributes as $attribute) {
                if (is_array($attribute)) {
                    foreach ($attribute as $record_attr_key => $record_attribute) {
                        if (is_array($record_attribute) && isset($record_attribute[$param_name]) and !empty($record_attribute[$param_name])) {
                            foreach ($record_attribute as $association_attr_key => $association_attribute) {
                                if (is_array($association_attribute) && $param_name == $association_attr_key) {
                                    unset($record_attribute[$param_name]);
                                    array_push($formatted_attributes, ['attributes' => $association_attribute, 'association_attributes' => $record_attribute]);
                                }
                            }
                        }
                    }
                }
            }
        }
        return $formatted_attributes;
    }

}
