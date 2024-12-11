<?php

namespace App;

class KeyFinding extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'key_finding';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The model's attributes. Set defaults here.
     *
     * @var array
     */
    protected $attributes = [
        'kc_id'      => 0,
        'sort_order' => 1,
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['key_finding', 'sort_order'];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'sort_order' => 'integer',
    ];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        'kc_id'       => 'required|integer|min:0',
        'resource_id' => 'required|integer|min:1',
        'key_finding' => 'required|string',
        'sort_order'  => 'required|integer|min:1',
    ];

    /**
     * Resource that has this key finding.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function resource()
    {
        return $this->belongsTo('App\Resource', 'resource_id', 'research_id');
    }
}
