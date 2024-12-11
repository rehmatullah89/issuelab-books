<?php

namespace App\Repositories\Eloquent;

use App\Author;
use App\Repositories\AuthorRepositoryInterface;

class AuthorRepository implements AuthorRepositoryInterface
{
    protected $author;

    public function __construct(Author $author)
    {
        $this->author = $author;
    }

    public function directory($letter = 'a')
    {
        return $this->author->where('last', 'like', "{$letter}%")->get();
    }

    public function search($query)
    {
        if(empty($query)){
             return $this->author->get();
        }
        return $this->author->where('fullname', 'like', "%{$query}%")->get();
    }

    public function searchList($query)
    {
        return array_map(function ($author) {
            return ['id' => $author['fullname'], 'text' => $author['fullname']];
        }, $this->search($query)->toArray());
    }

    public function searchByFullname($fullname)
    {
        $key = "fullname";
        if (is_array($fullname)) {
            $authors = $this->author->whereIn($key, $fullname);
        } else {
            $authors = $this->author->where($key, $fullname);
        }
        return $authors->get();
    }
}
