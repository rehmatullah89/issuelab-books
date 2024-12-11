<?php

namespace App\Repositories\Eloquent;

use App\Coverage;
use App\Repositories\CoverageRepositoryInterface;

class CoverageRepository implements CoverageRepositoryInterface
{
    protected $coverage;

    public function __construct(Coverage $coverage)
    {
        $this->coverage = $coverage;
    }

    public function all()
    {
        return $this->coverage->orderBy('location', 'asc')->get();
    }
}
