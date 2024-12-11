<?php

namespace App\Repositories;

interface FunderRepositoryInterface
{
    public function search($query);

    public function searchList($query);
}
