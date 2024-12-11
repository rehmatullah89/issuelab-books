<?php

namespace spec\App;

use PhpSpec\Laravel\LaravelObjectBehavior;
use Prophecy\Argument;

class UserSpec extends LaravelObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType('App\User');
    }

    function it_has_an_identifier_created_from_full_name()
    {
        $this->full_name = 'Radical Dude';
        $this->sluggify();
        $this->identifier->shouldBe('radical_dude');
    }
}
