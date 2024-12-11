<?php

namespace spec\App\Helpers;

use Illuminate\Support\Collection;
use JavaScript as Javascript;
use Mockery as m;
use PhpSpec\Laravel\LaravelObjectBehavior;
use Prophecy\Argument;

class ApplicationHelperSpec extends LaravelObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType('App\Helpers\ApplicationHelper');
    }

    public function it_should_output_checkboxes_with_javascript_data_if_set(Collection $collection)
    {

        $collection->map(Argument::type('Closure'))->willReturn($collection);
        $collection->flip()->willReturn($collection);
        $collection->toArray()->willReturn();

        // Use mockery to mock facade
        Javascript::shouldReceive('put')
            ->once()
        ;

        $this->checkboxes($collection, 'data', true);

        // Check for method calls
        $collection->map(Argument::type('Closure'))->shouldHaveBeenCalled();
        $collection->flip()->shouldHaveBeenCalled();
        $collection->toArray()->shouldHaveBeenCalled();

        m::close();
    }
}
