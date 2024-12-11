<?php

namespace spec\App;

use PhpSpec\Laravel\LaravelObjectBehavior;

class AuthorSpec extends LaravelObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType('App\Author');
    }

    public function it_has_an_identifier_created_from_fullname()
    {
        $this->fullname = 'Mary Poppins';

        $this->sluggify();

        $this->identifier->shouldBe('mary_poppins');
    }

    public function it_generates_a_fullname_from_name_attributes()
    {
        $this->first = 'James';
        $this->last  = 'O\'Keffe';

        $this->setFullname();

        $this->fullname->shouldBe('James O\'Keffe');
    }

    public function it_extract_first_and_last_name_from_full_name()
    {
        $this->fullname = 'James O\'Keffe';

        $this->setFirstnameAndLastname();

        $this->first->shouldBe('James');
        $this->last->shouldBe('O\'Keffe');
    }


}
