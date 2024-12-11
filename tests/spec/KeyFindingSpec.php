<?php

namespace spec\App;

use PhpSpec\Laravel\LaravelObjectBehavior;

class KeyFindingSpec extends LaravelObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType('App\KeyFinding');
    }

    public function it_should_have_a_kc_id_that_defaults_to_zero()
    {
        $this->kc_id->shouldBe(0);
    }

    public function it_should_have_a_sort_order_that_defaults_to_one()
    {
        $this->sort_order->shouldBe(1);
    }
}
