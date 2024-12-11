<?php

namespace App\Repositories;

interface AuthorRepositoryInterface
{
    public function directory($letter = 'a');

    public function search($query);

    public function searchList($query);

    public function searchByFullname($fullname);

}
