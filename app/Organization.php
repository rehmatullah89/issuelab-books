<?php

namespace App;

use App\Traits\MktimeTimestamps;
use App\Traits\ModelType;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;
use DB;

class Organization extends BaseModel implements SluggableInterface {

    use MktimeTimestamps,
        ModelType,
        SluggableTrait;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'organization';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The name of the "created at" column.
     *
     * @var string
     */

    const CREATED_AT = 'date_added';

    /**
     * The name of the "updated at" column.
     *
     * @var string
     */
    const UPDATED_AT = 'date_modified';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['organization', 'mission_statement', 'url', 'country', 'city', 'state', 'province', 'zip', 'ein'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password'];

    /**
     * Configuration for generating unique identifier.
     *
     * @uses Cviebrock\EloquentSluggable/SluggableTrait
     *
     * @var array
     */
    protected $sluggable = [
        'build_from' => 'organization',
    ];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        'organization' => 'required|max:252',
        'identifier' => 'required|max:255|unique:author,identifier',
        'url' => 'max:255',
        'mailing_address' => 'max:255',
        'mailing_address2' => 'max:255',
        'country' => 'max:255',
        'city' => 'max:255',
        'state' => 'max:100',
        'province' => 'max:255',
        'zip' => 'max:100',
        'ein' => 'max:255',
        'gm_key' => 'max:100',
        'recipient_key' => 'max:100',
        'fc_name' => 'max:300',
        'fdo_url' => 'max:300',
        'guidestar_id' => 'max:100',
        'guidestar_name' => 'max:300',
        'fundref' => 'max:255',
    ];

    /**
     * Resources that belong to an organization.
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function resources() {
        return $this->belongsToMany('App\Resource', 'link_resource_organization', 'organization_id', 'resource_id')->withPivot('role');
    }

    /**
     * Resources that an organization has funded.
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function fundedResources() {
        return $this->resources()->wherePivot('role', 'funder');
    }

    /**
     * Resources that an organization has published.
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function publishedResources() {
        return $this->resources()->wherePivot('role', 'organization');
    }

    /**
     * Users that belong to an organization.
     *
     * @return Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users() {
        return $this->belongsToMany('App\User', 'organization_affiliations', 'org_id', 'user_id')->withPivot('contact', 'superadmin');
    }

    public function hasOtherContacts($user_id) {
        return (boolean) $this->users()->where('users.id', '!=', $user_id)->lists('contact')->contains(1);
    }

    /**
     * Whether or not the organization has at least one funder relationship to a resource
     *
     * @return boolean
     */
    public function isFunder() {
        return DB::table('link_resource_organization')->where('organization_id', $this->id)->where('role', 'funder')->count() > 0;
    }

    /**
     * Whether or not the organization has at least one publisher relationship to a resource
     *
     * @return boolean
     */
    public function isPublisher() {
        return DB::table('link_resource_organization')->where('organization_id', $this->id)->where('role', 'organization')->count() > 0;
    }

    /**
     * The "booting" method of the model.
     *
     * Register handler functions that responding to model events here. Be sure to call the parent's boot method;
     *
     * @return void
     */
    protected static function boot() {
        parent::boot();

        // Set priority higher than `0` so that this runs before validation
        static::saving(
                function ($model) {
                    $model->sluggify();
                }, $priority = 10
        );
    }

}
