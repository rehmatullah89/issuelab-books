<?php

use App\User;
use Prophecy\Argument;

class ResourceControllerTest extends TestCase
{
    private $faker;
    private $resource;
    private $url;

    public function setUp()
    {
        parent::setUp();

        $this->faker = Faker\Factory::create();

        $this->withSession(['_token' => str_random(40)]);
    }

    public function testShow()
    {
        $this->createResource();
        $url = $this->url;

        // Test route and response
        $this->visit($url);
        $this->onPage($url);

        // Test view data
        $this->assertViewHas('resource');
    }

    public function testGetCreateResourcePageShouldRedirectIfNoUser()
    {
        $response = $this->action('GET', 'ResourceController@create');

        $this->assertResponseStatus(302);
        $this->assertRedirectedToRoute('get_register');
        $this->assertSessionHas('auth_mode');
    }

    public function testCreate()
    {
        $this->authenticateUser();
        // Test route and response
        $this->visit('/resource/create');
        $this->onPage('/resource/create');
        // Test view data
        $this->assertViewHas('organizations');
        $this->assertViewHas('rules');
    }

    public function testGetCreateResourcePageShouldDisplayForm()
    {
        $this->authenticateUser();

        $this->action('GET', 'ResourceController@create');
        // Test view data
        $this->assertViewHas('organizations');
        $this->assertViewHas('rules');
    }


    public function testGetResourcePageShouldAlwaysReturn200()
    {
        $this->createResource();
        $this->visit($this->url);

        $this->assertResponseStatus(200);
    }

    public function testStoreResource()
    {
        $this->authenticateUser();

        // Mock for organization relationship
        $organizations = $this->prophet->prophesize(Illuminate\Database\Eloquent\Relations\BelongsToMany::class);

        // Stub for user
        $resource = $this->prophet->prophesize(App\Resource::class);
        $resource->getAttribute(Argument::type('string'))->willReturn();
        $resource->organizations()->willReturn($organizations->reveal());

        // Stub for UserRepository
        $respository = $this->prophet->prophesize(App\Repositories\ResourceRepositoryInterface::class);
        $respository->create(Argument::type('array'))->willReturn($resource->reveal());
        $this->instance(App\Repositories\ResourceRepositoryInterface::class, $respository->reveal());

        $this->call('POST', '/resource', [
            '_token'          => csrf_token(),
            'title'           => 'title',
            'description'     => 'description',
            'pub_date_month'  => '01',
            'pub_date_day'    => '01',
            'pub_date_year'   => '2015',
            'organizations[]' => [],
        ]);

        $respository->create(Argument::type('array'))->shouldHaveBeenCalled();
        $this->assertResponseStatus(302);
    }

    public function testStoreResourceFails()
    {
        $this->authenticateUser();
        $this->visit('/resource/create');

        $response = $this->call('POST', '/resource', [
            '_token'         => csrf_token(),
            'pub_date_month' => '01',
            'pub_date_day'   => '01',
            'pub_date_year'  => '2015',
        ]);

        $this->assertRedirectedToAction('ResourceController@create');
        $this->assertSessionHasErrors(['title', 'description']);
    }

    public function testUploadFileToResource()
    {
        $this->authenticateUser();

        $original_file_path = 'tests/resource_creation_test_upload_file.pdf';
        $uploaded_file_path = 'storage/app/resources/title_1.pdf';

        //create the file
        file_put_contents($original_file_path, 'data for file');
        $uploaded_file = $this->getUploadedFileForTesting(
            [
                'tmp_name' => $original_file_path,
                'type'     => 'pdf',
                'size'     => filesize($original_file_path),
                'error'    => '',
            ],
            [
                'name' => 'test_upload.pdf',
            ],
            'name'
        );

        $this->call('POST', '/resource', [
                '_token'         => csrf_token(),
                'title'          => 'title',
                'description'    => 'description',
                'pub_date_month' => '01',
                'pub_date_day'   => '01',
                'pub_date_year'  => '2015',
            ],
            [],
            [
                'resource_file' => [$uploaded_file],
            ]
        );

        $this->assertTrue(file_exists($uploaded_file_path));
        unlink($original_file_path);
        unlink($uploaded_file_path);
    }

    private function createResource()
    {
        $this->resource = factory(App\Resource::class)->create();
        $this->url      = '/resource/' . $this->resource->identifier;
    }

    private function authenticateUser()
    {
        // Log in as a superadmin, since this is an administration page
        $user         = factory(App\User::class)->create();
        $organization = factory(App\Organization::class)->create();
        $user->organizations()->attach($organization->id);
        Auth::login($user);
        return $user;
    }
}
