<?php

namespace App\Repositories;

interface UserRepositoryInterface
{
    public function all();

    public function search($search);

    public function create(array $attributes = []);
}
