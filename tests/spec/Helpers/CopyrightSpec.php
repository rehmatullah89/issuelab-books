<?php

namespace spec\App\Helpers;

use PhpSpec\Laravel\LaravelObjectBehavior;
use Prophecy\Argument;

class CopyrightSpec extends LaravelObjectBehavior
{
    public function let()
    {
        $this->beConstructedWith(Argument::type('string'));
    }

    public function it_is_initializable()
    {
        $this->shouldHaveType('App\Helpers\Copyright');
    }

    public function it_should_detect_a_creative_commons_license()
    {
        $this->setRights('http://creativecommons.org/licenses/by/4.0/');

        $this->isCreativeCommons()->shouldBe(true);

        $this->setRights('© 2015 by the Nils Likeau Foundation. All rights reserved');

        $this->isCreativeCommons()->shouldBe(false);
    }

    public function it_should_return_license_when_cast_to_string()
    {
        $this->__toString()->shouldBe($this->license);
    }
}
