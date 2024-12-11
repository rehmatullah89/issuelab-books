<?php

namespace App\Repositories\Eloquent;

use App\Funder;
use App\Repositories\FunderRepositoryInterface;

class FunderRepository implements FunderRepositoryInterface
{
    protected $funder;

    public function __construct(Funder $funder)
    {
        $this->funder = $funder;
    }

    public function search($query)
    {
        return $this->funder->where('funder', 'like', "%{$query}%")->get();
    }

    public function searchList($query)
    {
        return array_map(function ($funder) {
            return ['id' => $funder['funder'], 'text' => $funder['funder']];
        }, $this->search($query)->toArray());
    }
}
