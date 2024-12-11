<?php

use Prophecy\Argument;

class UserControllerTest extends TestCase
{
    private $faker;
    private $user;
    private $url;

    public function setUp()
    {
        parent::setUp();

        $this->faker = Faker\Factory::create();

        // Log in as a superadmin, since this is an administration page
        $superadmin = factory(App\User::class)->create();
        $superadmin->addSuperadmin();
        Auth::login($superadmin);

        $this->withSession(['_token' => str_random(40)]);
    }

    public function testIndex()
    {
        $repository = $this->mockRepository();

        // Test route and response
        $this->visit('/users');
        $this->onPage('/users');

        // Spies
        $repository->all()->shouldHaveBeenCalled();

        // Test view data
        $this->assertViewHas('users');
        $this->assertViewHas('search');
    }

    public function testIndexSearch()
    {
        $repository = $this->mockRepository();

        // Test route and response
        $this->visit('/users?search=John');
        $this->onPage('/users?search=John');

        $repository->search(Argument::type('string'))->shouldHaveBeenCalled();

        // Test view data
        $this->assertViewHas('users');
        $this->assertViewHas('search');
    }

    public function testCreate()
    {
        // Test route and response
        $this->visit('/users/create');
        $this->onPage('/users/create');

        // Test view data
        $this->assertViewHas('organizations');
        $this->assertViewHas('rules');
    }

    public function testStoreFails()
    {
        $this->visit('/users/create');
        $this->call('POST', '/users', [
            '_token'        => csrf_token(),
            'full_name'     => '',
            'email'         => '',
            'employer'      => '',
            'title'         => '',
            'organizations' => [],
        ]);

        $this->assertRedirectedToAction('UserController@create');
        $this->assertSessionHasErrors(['full_name', 'email']);
    }

    public function testStore()
    {
        // Mock for organization relationship
        $organizations = $this->prophet->prophesize(Illuminate\Database\Eloquent\Relations\BelongsToMany::class);

        // Stub for user
        $user = $this->prophet->prophesize(App\User::class);
        $user->getAttribute(Argument::type('string'))->willReturn();
        $user->setSuperadmin(Argument::type('bool'))->willReturn();
        $user->organizations()->willReturn($organizations->reveal());

        // Stub for UserRepository
        $respository = $this->prophet->prophesize(App\Repositories\UserRepositoryInterface::class);
        $respository->create(Argument::type('array'))->willReturn($user->reveal());
        $this->instance(App\Repositories\UserRepositoryInterface::class, $respository->reveal());

        $this->call('POST', '/users', [
            '_token'          => csrf_token(),
            'full_name'       => $this->faker->name,
            'email'           => $this->faker->email,
            'employer'        => '',
            'title'           => '',
            'organizations[]' => [],
        ]);

        $respository->create(Argument::type('array'))->shouldHaveBeenCalled();

        $this->assertRedirectedToAction('UserController@index');
        $this->assertSessionHas('message');
    }

    public function testEdit()
    {
        $this->createUser();

        // Test route and response
        $url = $this->url . '/edit';
        $this->visit($url);
        $this->onPage($url);

        // Test view data
        $this->assertViewHas('user');
        $this->assertViewHas('organizations');
        $this->assertViewHas('rules');
    }

    public function testUpdateFails()
    {
        $this->createUser();

        // Test route and response
        $url = $this->url . '/edit';
        $this->visit($url);

        $this->call('PATCH', $this->url, [
            '_token'        => csrf_token(),
            'full_name'     => '',
            'email'         => '',
            'employer'      => '',
            'title'         => '',
            'organizations' => [],
        ]);

        $this->assertRedirectedToAction('UserController@edit', $this->user->identifier);
        $this->assertSessionHasErrors(['full_name', 'email']);
    }

    public function testUpdate()
    {
        $this->createUser();

        $this->call('PATCH', $this->url, [
            '_token'          => csrf_token(),
            'full_name'       => $this->user->full_name,
            'email'           => $this->user->email,
            'employer'        => $this->faker->company,
            'title'           => '',
            'organizations[]' => [],
        ]);

        $this->assertRedirectedToAction('UserController@edit', $this->user->identifier);
        $this->assertSessionHas('message');
    }

    public function testDestroy()
    {
        $this->createUser();

        $url = $this->url;

        $this->visit('/users');
        $this->call('DELETE', $url, ['_token' => csrf_token()]);

        $this->assertRedirectedToAction('UserController@index');
        $this->assertSessionHas('message');
    }

    private function createUser()
    {
        $this->user = factory(App\User::class)->create();
        $this->url  = '/users/' . $this->user->identifier;
    }

    private function mockRepository()
    {
        // Mock for UserRepository
        $repository = $this->prophet->prophesize(App\Repositories\UserRepositoryInterface::class);
        $this->instance(App\Repositories\UserRepositoryInterface::class, $repository->reveal());

        return $repository;
    }
}
