<?php

namespace spec\App\Repositories\Eloquent;

use PhpSpec\Laravel\LaravelObjectBehavior;
use Prophecy\Argument;

use App\Resource;
use App\SuperAdminResource;
use App\User;
use App\Repositories\ResourceRepositoryInterface;

class ResourceRepositorySpec extends LaravelObjectBehavior
{
    function let(Resource $resource, SuperAdminResource $super_admin_resource)
    {
        $this->beAnInstanceOf('App\Repositories\Eloquent\ResourceRepository');
        $this->beConstructedWith($resource, $super_admin_resource);
    }

    function it_is_initializable()
    {
        $this->shouldHaveType('App\Repositories\Eloquent\ResourceRepository');
    }

    function it_should_create_a_resource_if_user_is_a_basic_user(User $user, ResourceRepositoryInterface $interface)
    {
      $user->isSuperadmin()->shouldBeCalled()->willReturn(false);

      // $interface->create( $user, ['title' => 'title'] );
      //
      // // Resource::shouldReceive('create')->once();
    }
}

?>
