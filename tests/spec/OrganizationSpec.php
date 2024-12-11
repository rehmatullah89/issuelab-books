<?php

namespace spec\App;

use PhpSpec\Laravel\LaravelObjectBehavior;

class OrganizationSpec extends LaravelObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType('App\Organization');
    }

    public function it_has_an_identifier_created_from_organization()
    {
        $this->organization = 'Department of Public Health';
        $this->sluggify();
        $this->identifier->shouldBe('department_of_public_health');
    }
}
