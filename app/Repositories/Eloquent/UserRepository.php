<?php

namespace App\Repositories\Eloquent;

use App\Repositories\UserRepositoryInterface;
use App\User;

class UserRepository implements UserRepositoryInterface
{
    protected $perPage = 10;

    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function search($search)
    {
        return $this->user
            ->where('full_name', 'like', "%{$search}%")
            ->orWhere('email', 'like', "%{$search}%")
            ->paginate($this->perPage);
    }

    public function all()
    {
        return $this->user
            ->paginate($this->perPage);
    }

    public function create(array $attributes = [])
    {
        return $this->user->create($attributes);
    }
}
