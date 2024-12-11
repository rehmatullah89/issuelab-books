<?php

namespace App\Repositories;

interface SearchRecordRepositoryInterface
{
    public function keywords($keywords);

    public function create(array $attributes = []);
}
