<?php

class AuthorControllerTest extends TestCase
{
    private $organization;
    private $faker;
    private $url;

    public function setUp()
    {
        parent::setUp();

        $this->faker = Faker\Factory::create();
    }

    public function testOrganzationsList()
    {
        $organization = $this->prophet->prophesize(App\Repositories\OrganizationRepositoryInterface::class);
        $this->app->instance(App\Repositories\OrganizationRepositoryInterface::class, $organization->reveal());

        $this->call('GET', '/organizations/list?q=Institutie');

        $organization->searchList('Institutie')->shouldHaveBeenCalled();

        $this->followRedirects();
        $this->assertResponseOk();
    }

}
