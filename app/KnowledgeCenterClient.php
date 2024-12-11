<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KnowledgeCenterClient extends Model {

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'kc_clients';

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
    protected $fillable = ['name', 'city', 'state', 'zip', 'country'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required|min:3|max:252',
    ];

    /**
     * Knowledge Centers that belong to a client
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function knowledgecenter() {
        return $this->hasMany('App\KnowledgeCenter', 'client_id', 'id');
    }

}
