<?php

namespace spec\App;

use App\SuperAdminResource;
use PhpSpec\Laravel\LaravelObjectBehavior;

class SuperAdminResourceSpec extends LaravelObjectBehavior
{

    public function it_should_accept_nested_attributes_as_params()
    {
        $attributes = [
          'title'          => 'title test',
          'description'    => 'description test',
          'pub_date_year'  => '2015',
          'pub_date_month' => '04',
          'authors'        => [
              0 => [
                'first'      => 'First Name Test',
                'last'       => 'Last Name Test',
              ],
              1 => [
                'first'      => 'First Name 2 Test',
                'last'       => 'Last Name 2 Test',
              ],
            ]
        ];

        $resource = new SuperAdminResource($attributes);
        $resource->save();

        $this->assertTrue( $resource->authors->count() ==  2 );
    }
}
