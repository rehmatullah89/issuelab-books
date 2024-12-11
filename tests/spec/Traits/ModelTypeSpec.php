<?php

namespace spec\App\Traits;

use PhpSpec\Laravel\LaravelObjectBehavior;
use Prophecy\Argument;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ModelType;

class ModelTypeSpec extends LaravelObjectBehavior
{
    function let()
    {
        $this->beAnInstanceOf('spec\App\Traits\ModelTypeStub');
    }

    function it_has_a_type_derived_from_its_class_name() {
        $this->type()->shouldBe('model_type_stub');
    }
}

class ModelTypeStub extends Model {
    use ModelType;
}
