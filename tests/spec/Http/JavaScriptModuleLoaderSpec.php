<?php

namespace spec\App\Http;

use PhpSpec\Laravel\LaravelObjectBehavior;
use Prophecy\Argument;

class JavaScriptModuleLoaderSpec extends LaravelObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType('App\Http\JavaScriptModuleLoader');
    }

    function it_returns_body_classes_that_are_added_to_it()
    {
        $this->add('ice-cream');
        $this->add('brownies');
        $this->get()->shouldMatch('/ice-cream/');
        $this->get()->shouldMatch('/ brownies/');
    }

    function it_can_accept_an_array_of_class_strings()
    {
        $this->add(['cake', 'parfait']);
        $this->get()->shouldMatch('/parfait/');
        $this->get()->shouldMatch('/cake/');
    }

    function it_throwns_an_exception_when_classes_are_not_an_array_or_a_string()
    {
        $this->shouldThrow(\App\Exceptions\InvalidTypeException::class)->duringAdd(4);
        $this->shouldThrow(\App\Exceptions\InvalidTypeException::class)->duringAdd(function(){});
        $this->shouldThrow(\App\Exceptions\InvalidTypeException::class)->duringAdd(true);
    }

    function it_removes_duplicate_classes()
    {
        $this->add('cookies');
        $this->add('cookies');
        $this->modules->shouldHaveCount(1);
    }
}
