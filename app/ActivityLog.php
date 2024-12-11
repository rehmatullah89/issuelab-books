<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'activity_log';

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
    protected $fillable = ['user_id', 'user_role', 'activity', 'listing_id', 'organization_id', 'kc_id'];

    /**
     * User belongs to one user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToOne
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    /**
     * User belongs to one resource
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToOne
     */
    public function resource()
    {
        return $this->belongsTo('App\Resource', 'listing_id', 'research_id');
    }

    /**
     * User belongs to one knowledgeCenter
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToOne
     */
    public function knowledgeCenter()
    {
        return $this->belongsTo('App\KnowledgeCenter', 'kc_id', 'id');
    }

}
