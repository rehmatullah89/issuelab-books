<?php

namespace App\Repositories\Eloquent;

use App\Doctype;
use App\Repositories\DoctypeRepositoryInterface;

class DoctypeRepository implements DoctypeRepositoryInterface
{
    protected $doctype;

    public function __construct(Doctype $doctype)
    {
        $this->doctype = $doctype;
    }

    public function all()
    {
        return $this->doctype->all();
    }
}
