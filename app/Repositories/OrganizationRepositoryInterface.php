<?php

namespace App\Repositories;

interface OrganizationRepositoryInterface
{
    public function all();

    public function firstOrCreate(array $attributes);

    public function search($query);

    public function searchList($query);

    public function searchByName($fullname);
}
