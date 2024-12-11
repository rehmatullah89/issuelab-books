<?php

namespace App\Repositories\Eloquent;

use App\IssueArea;
use App\Repositories\IssueAreaRepositoryInterface;

class IssueAreaRepository implements IssueAreaRepositoryInterface
{
    protected $issueArea;

    public function __construct(IssueArea $issueArea)
    {
        $this->issueArea = $issueArea;
    }

    public function all()
    {
        return $this->issueArea->all();
    }
}
