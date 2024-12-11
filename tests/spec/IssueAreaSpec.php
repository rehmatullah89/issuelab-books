<?php

namespace spec\App;

use PhpSpec\Laravel\LaravelObjectBehavior;

class IssueAreaSpec extends LaravelObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType('App\IssueArea');
    }

    public function it_has_an_identifier_created_from_issue_area()
    {
        $this->issue_area = 'Important Issue';
        $this->sluggify();
        $this->identifier->shouldBe('important_issue');
    }
}
