<?php

namespace App\Repositories\Eloquent;

use App\Repositories\SearchRecordRepositoryInterface;
use App\SearchRecord;

class SearchRecordRepository implements SearchRecordRepositoryInterface
{
    protected $record;

    public function __construct(SearchRecord $record)
    {
        $this->record = $record;
    }

    public function keywords($keywords)
    {
        return $this->record->where('keywords', 'LIKE', "%{$keywords}%")->distinct()->lists('keywords');
    }

    public function create(array $attributes = [])
    {
        return $this->record->create($attributes);
    }
}
