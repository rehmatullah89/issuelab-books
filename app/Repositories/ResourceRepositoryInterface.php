<?php

namespace App\Repositories;

use App\User as User;

interface ResourceRepositoryInterface
{

    public function approved();

    public function nonapproved();

    public function allResources();

    public function find($id, $columns = ['*']);

    public function newModel(User $user, array $attributes = []);

    public function create(User $user, array $attributes = []);

    public function earliestPubdate();

    public function knowledgeCenterTitles($subdomain);

    public function resourceByTitle($title);

    public function checkDuplicateResource($data = array());
}
