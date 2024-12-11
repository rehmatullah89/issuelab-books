<?php

use App\Author;
use App\Organization;
use App\Repositories\ResourceRepositoryInterface;
use App\Repositories\SearchRepository;
use App\Resource;
use App\SearchRecord;
use App\User;
use Behat\Behat\Context\Context;
use Behat\Behat\Context\SnippetAcceptingContext;

/**
 * Defines application features from the specific context.
 */
class DomainContext extends PHPUnit_Framework_TestCase implements Context, SnippetAcceptingContext
{
    use LaravelContextTrait;

    private $author;
    private $coverage;
    private $language;
    private $organization;
    private $resource;
    private $results;
    private $user;
    private $searchRecord;

    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
    }

    /**
     * @Given I am logged in as a user
     */
    public function iAmLoggedInAsAUser()
    {
        $this->user = $user = factory(User::class)->create();
        Auth::login($user);
    }

    /**
     * @Given there is a/an :type called :name
     */
    public function thereIsACalled($type, $name)
    {
        $key = $this->getKey($type);
        $this->createInstance($type, [$key => $name]);
    }

    /**
     * @Given there is not a/an :type called :name
     */
    public function thereIsNotAnCalled($type, $name)
    {
        $model   = $this->getModel($type);
        $key     = $this->getKey($type);
        $results = call_user_func('App\\' . $model . '::where', [$key => $name])->get();
        $this->assertTrue($results->isEmpty());
    }

    /**
     * @Given there is a/an :type with :attribute :value
     */
    public function thereIsAWith($type, $attribute, $value)
    {
        $this->createInstance($type, [$attribute => $value]);
    }

    /**
     * @Given there is a/an :type called :name with :attribute :value
     */
    public function thereIsACalledWith($type, $name, $attribute, $value)
    {
        $key = $this->getKey($type);
        $this->createInstance($type, [$key => $name, $attribute => $value]);
    }

    /**
     * @Given there is an author called :first :last
     */
    public function thereIsAnAuthorCalled($first, $last)
    {
        $this->createInstance('author', ['first' => $first, 'last' => $last]);
    }

    /**
     * @Given there is a/an :child_type called :child_name that belongs to :parent_type :parent_name
     */
    public function thereIsACalledThatBelongsTo($child_type, $child_name, $parent_type, $parent_name)
    {
        $parent_slug = $this->getSlug($parent_type);
        $this->createAssociation($this->$parent_slug, $child_type, $child_name);
    }

    /**
     * @Given :title is a pending resource by default
     */
    public function isAPendingResourceByDefault($title)
    {
        $resource = $this->resource;
        $this->assertEquals(false, $resource->approved);
    }

    /**
     * @Given :title is an approved resource
     */
    public function isAnApprovedResource($title)
    {
        $this->resource->setApproved();
    }

    /**
     * @Given I save a search record
     */
    public function iSaveASearchRecord()
    {
        $this->searchRecord = SearchRecord::create();
    }

    /**
     * @When I browse resources
     */
    public function iBrowseResources()
    {
        $this->results = $this->app->make(ResourceRepositoryInterface::class)->approved();
    }

    /**
     * @When I search
     */
    public function iSearch()
    {
        $this->results = (new SearchRepository())->all();
    }

    /**
     * @When I search for user :name
     */
    public function iSearchForUser($name)
    {
        $this->results = $this->app->make('App\Repositories\UserRepositoryInterface', [new User()])->search($name);
    }

    /**
     * @When I affiliate with :organization
     */
    public function iAffiliateWithAnOrganization($organization)
    {
        $user = $this->user;
        $user->organizations()->firstOrCreate(['organization' => $organization]);
        $this->results = $user->organizations;
    }

    /**
     * @When I am a superadmin
     */
    public function iAmASuperadmin()
    {
        $this->user->addSuperadmin();
    }

    /**
     * @When I am not a superadmin
     */
    public function IAmNotASuperadmin()
    {
        $this->user->removeSuperadmin();
    }

    /**
     * @When I view that resource
     */
    public function iViewThatResource()
    {
        // Nothing to do here in DomainContext
    }

    /**
     * @Then I should not see a/an :type called :title
     */
    public function iShouldNotSeeACalled($type, $title)
    {
        $key     = $this->getKey($type);
        $results = $this->results->lists($key)->toArray();
        $this->assertNotContains($title, $results);
    }

    /**
     * @Then I should see a/an :type called :name
     */
    public function iShouldSeeACalled($type, $name)
    {
        $key     = $this->getKey($type);
        $results = $this->results->lists($key)->toArray();
        $this->assertContains($name, $results);
    }

    /**
     * @Then I should see that :parent_type :parent_name has a/an :child_type called :child_name
     */
    public function iShouldSeeThatHasACalled($parent_type, $parent_name, $child_type, $child_name)
    {
        $parent_slug  = $this->getSlug($parent_type);
        $parent       = $this->$parent_slug;
        $relationship = camel_case(str_plural($this->getSlug($child_type)));
        $key          = $this->getKey($child_type);

        /**
         * Call the association and check for the instance we created
         * Ex: `$resource->authors()->where(['fullname' => 'John Smith'])->get()->lists($key)->toArray()`
         */
        $related_objects = call_user_func([$parent, $relationship])->where([$key => $child_name])->get()->lists($key)->toArray();
        $this->assertContains($child_name, $related_objects);
    }

    /**
     * @Then I should see a/an :type with :attribute :value
     */
    public function iShouldSeeAWith($type, $attribute, $value)
    {
        $model   = $this->getModel($type);
        $objects = call_user_func('App\\' . $model . '::where', [$attribute => $value])->get()->lists($attribute)->toArray();

        $this->assertContains($value, $objects);
    }

    /**
     * @Then I should see one :type called :name
     */
    public function iShouldSeeOneCalled($type, $name)
    {
        $key     = $this->getKey($type);
        $results = $this->results->lists($key)->toArray();
        $this->assertContains($name, $results);
        $this->assertCount(1, $results);
    }

    /**
     * @Then I should have the role superadmin
     */
    public function iShouldHaveTheRoleSuperadmin()
    {
        $this->assertTrue($this->user->superadmin);
    }

    /**
     * @Then I should not have the role superadmin
     */
    public function iShouldNotHaveTheRoleSuperadmin()
    {
        $this->assertFalse($this->user->superadmin);
    }

    /**
     * @Then I should not be able to create a :type with :attribute :value
     */
    public function iShouldNotBeAbleToCreateAWith($type, $attribute, $value)
    {
        try {
            $this->createInstance($type, [$attribute => $value]);
        } catch (Watson\Validating\ValidationException $expected) {
            return;
        }

        $this->fail('A ValidationException has not been raised.');
    }

    /**
     * @Then the search record should save my ip
     */
    public function theSearchRecordShouldSaveMyIp()
    {
        $this->assertEquals(Request::ip(), $this->searchRecord->ip_address);
    }

    /**
     * @Then the search record should save my subdomain
     */
    public function theSearchRecordShouldSaveMySubdomain()
    {
        $subdomain = AppRequest::subdomain() ? AppRequest::subdomain() : 'www';
        $this->assertEquals($subdomain, $this->searchRecord->domain);
    }

    /**
     * @Then I should see an image :url
     */
    public function iShouldSeeAnImage($url)
    {
        $image = $this->results->first()->rights->image;

        $this->assertContains(
            $url,
            $image['src'],
            "The copyright image does not contain {$url}"
        );
    }

    /**
     * @Then I should see a copyright :copyright
     */
    public function iShouldSeeACopyright($copyright)
    {
        $license = $this->results->first()->rights->license;

        $this->assertEquals($copyright, $license);
    }
}
