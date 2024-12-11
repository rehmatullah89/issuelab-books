<?php

use Prophecy\Argument;

class AuthorControllerTest extends TestCase
{
    private $author;
    private $faker;
    private $url;

    public function setUp()
    {
        parent::setUp();

        $this->faker = Faker\Factory::create();
    }

    public function testIndex()
    {
        // Collection stub
        $collection = $this->prophet->prophesize(Illuminate\Database\Eloquent\Collection::class);

        // Author Repository stub
        $author = $this->prophet->prophesize(App\Repositories\AuthorRepositoryInterface::class);
        $author->directory(Argument::type('string'))->willReturn($collection->reveal());
        $this->app->instance(App\Repositories\AuthorRepositoryInterface::class, $author->reveal());

        // Test route and response
        $this->visit('/authors');
        $this->onPage('/authors');

        $letter = $this->faker->randomLetter;
        $this->visit("/authors/index/{$letter}");
        $this->onPage("/authors/index/{$letter}");

        $author->directory(Argument::type('string'))->shouldHaveBeenCalled();

        // Test view data
        $this->assertViewHas('authors');
        $this->assertViewHas('letter');
    }

    public function testAuthorsList()
    {
        $author = $this->prophet->prophesize(App\Repositories\AuthorRepositoryInterface::class);
        $this->app->instance(App\Repositories\AuthorRepositoryInterface::class, $author->reveal());

        $this->call('GET', '/authors/list?q=Kunkel');

        $author->searchList('Kunkel')->shouldHaveBeenCalled();

        $this->followRedirects();
        $this->assertResponseOk();
    }

    public function testShow()
    {
        $this->createAuthor();

        // Test route and response
        $this->visit($this->url);
        $this->onPage($this->url);

        // Test view data
        $this->assertViewHas('author');
    }

    private function createAuthor()
    {
        $this->author = factory(App\Author::class)->create();
        $this->url    = '/authors/profile/' . $this->author->identifier;
    }

    private function mockRepository()
    {
        // Mock for UserRepository
        $repository = $this->prophet->prophesize(App\Repositories\UserRepositoryInterface::class);
        $this->instance(App\Repositories\UserRepositoryInterface::class, $repository->reveal());

        return $repository;
    }
}
