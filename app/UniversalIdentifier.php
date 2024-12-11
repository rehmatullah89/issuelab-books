<?php

namespace App;

class UniversalIdentifier extends BaseModel {

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'universal_identifier';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['type', 'universal_identifier'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        'universal_identifier' => 'required|max:50',
        'type' => 'required|max:100',
    ];
    public static $types = [
        'ISBN',
    ];

    public function __construct(array $attributes = []) {
        parent::__construct($attributes);

        // Limit type to predefined list of `self::$types`
        $rules = $this->rules;
        $rules['type'] .= '|in:' . implode(',', self::$types);
        $this->setRules($rules);
    }

    /**
     * Resources that belong to an universal identifier
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function resources() {
        return $this->belongsToMany('App\Resource', 'link_resource_universal_identifier', 'universal_identifier_id', 'resource_id');
    }

}
