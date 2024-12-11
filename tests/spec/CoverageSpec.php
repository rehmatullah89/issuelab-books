<?php

namespace spec\App;

use PhpSpec\Laravel\LaravelObjectBehavior;

class CoverageSpec extends LaravelObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType('App\Coverage');
    }

    public function it_has_an_identifier_created_from_coverage()
    {
        $this->location = 'Country (Region)-State';
        $this->sluggify();
        $this->identifier->shouldBe('country_region_state');
    }
}
