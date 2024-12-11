<?php

namespace App\Repositories\Eloquent;

use App\KnowledgeCenter;
use App\Repositories\KnowledgeCenterRepositoryInterface;

class KnowledgeCenterRepository implements KnowledgeCenterRepositoryInterface
{
    protected $knowledgeCenter;

    public function __construct(KnowledgeCenter $knowledgeCenter)
    {
        $this->knowledgeCenter = $knowledgeCenter;
    }

    public function searchBySubdomain($subdomain)
    {
        $key = "subdomain";
        if (is_array($subdomain)) {
            $knowledgeCenters = $this->knowledgeCenter->whereIn($key, $subdomain);
        } else {
            $knowledgeCenters = $this->knowledgeCenter->where($key, $subdomain);
        }
        return $knowledgeCenters->get();
    }
}
