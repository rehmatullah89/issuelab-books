<?php

namespace App\Repositories\Eloquent;

use App\Repositories\CategoryRepositoryInterface;
use App\Category;

class CategoryRepository implements CategoryRepositoryInterface
{
    protected $perPage = 15;

    protected $category;

    public function __construct(Category $cat)
    {
        $this->category = $cat;
    }

    public function all()
    {
        return $this->category->paginate($this->perPage);
    }
}
