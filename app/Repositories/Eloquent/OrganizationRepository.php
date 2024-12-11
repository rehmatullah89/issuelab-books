<?php

namespace App\Repositories\Eloquent;

use App\Organization;
use App\Repositories\OrganizationRepositoryInterface;

class OrganizationRepository implements OrganizationRepositoryInterface
{
    protected $organization;

    public function __construct(Organization $organization)
    {
        $this->organization = $organization;
    }

    public function all()
    {
        return $this->organization->all();
    }

    public function firstOrCreate(array $attributes)
    {
        return $this->organization->firstOrCreate($attributes);
    }

    public function search($query)
    {
        return $this->organization->where('organization', 'like', "%{$query}%")->get();
    }

    public function searchList($query)
    {
        return array_map(function ($publisher) {
            return ['id' => $publisher['organization'], 'text' => $publisher['organization']];
        }, $this->search($query)->toArray());
    }

    public function searchByName($fullname)
    {
        $key = "organization";
        if (is_array($fullname)) {
            $organizations = $this->organization->whereIn($key, $fullname);
        } else {
            $organizations = $this->organization->where($key, $fullname);
        }
        return $organizations->get();
    }
}
