<?php

namespace App\Repositories\Eloquent;

use App\Language;
use App\Repositories\LanguageRepositoryInterface;

class LanguageRepository implements LanguageRepositoryInterface
{
    protected $language;

    public function __construct(Language $language)
    {
        $this->language = $language;
    }

    public function all()
    {
        return $this->language->all();
    }
}
