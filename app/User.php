<?php

namespace App;

use App\Traits\MktimeTimestamps;
use App\Traits\Superadmin;
use Cviebrock\EloquentSluggable\SluggableInterface;
use Cviebrock\EloquentSluggable\SluggableTrait;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends BaseModel implements AuthenticatableContract, CanResetPasswordContract, SluggableInterface {

    use Authenticatable,
        CanResetPassword,
        MktimeTimestamps,
        SluggableTrait,
        Superadmin;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

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
    protected $fillable = ['full_name', 'email', 'password', 'title', 'employer', 'email_notification'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * The default rules that the model will validate against.
     *
     * @var array
     */
    protected $rules = [
        'full_name' => 'required|max:255',
        'email' => 'required|email|max:255|unique:users,email',
        'organizations' => 'array',
        'knowledge_centers' => 'array',
    ];

    /**
     * Configuration for generating unique identifier
     *
     * @uses Cviebrock\EloquentSluggable/SluggableTrait
     * @var array
     */
    protected $sluggable = [
        'build_from' => 'full_name',
    ];

    /**
     * User belongs to many organizations
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function organizations() {
        return $this->belongsToMany('App\Organization', 'organization_affiliations', 'user_id', 'org_id')->withPivot('contact', 'superadmin');
    }

    /**
     * User KC belongs to many Knowledge Centers
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function knowledgeCenters() {
        return $this->belongsToMany('App\KnowledgeCenter', 'kc_administrators', 'user_id', 'kc_id');
    }

    /**
     * Get an array of organization names the user belongs to
     *
     * @return array
     */
    public function getOrgListAttribute() {
        return $this->organizations->lists('organization')->toArray();
    }

    /**
     * @return boolean
     */
    public function getSuperadminAttribute() {
        return $this->isSuperadmin();
    }

    // public function isOnlyContact()
    // {
    //     $organizations = $this->organizations();
    //     $orgs_wo_other_contacts = [];
    //     if ($organizations) {
    //         foreach ($organizations as $org) {
    //             if ($org->hasOtherContacts($this->id)) {
    //                 continue;
    //             }
    //             $orgs_wo_other_contacts[] = $org;
    //         }
    //     }
    //     return $orgs ? $orgs : false;
    // }
}
