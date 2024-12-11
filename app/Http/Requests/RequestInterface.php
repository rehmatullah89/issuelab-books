<?php

namespace App\Http\Requests;

interface RequestInterface
{
    public function subdomain();

    public function host();
}
