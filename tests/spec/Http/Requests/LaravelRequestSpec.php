<?php

namespace spec\App\Http\Requests;

use Illuminate\Http\Request;
use PhpSpec\Laravel\LaravelObjectBehavior;

class LaravelRequestSpec extends LaravelObjectBehavior
{
    public function let(Request $request)
    {
        $this->beConstructedWith($request);
    }

    public function it_is_initializable()
    {
        $this->shouldHaveType('App\Http\Requests\LaravelRequest');
    }

    public function it_gets_a_subdomain($request)
    {
        $request->getHost()->willReturn('subdomain.issuelab.org');

        $this->subdomain()->shouldBe('subdomain');
        $request->getHost()->shouldBeCalled();
    }

    public function it_gets_all_subdomains_before_issuelab_org($request)
    {
        $request->getHost()->willReturn('multiple.subdomains.issuelab.org');

        $this->subdomain()->shouldBe('multiple.subdomains');
    }
}
