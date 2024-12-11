<?php

use App\Organization;
use App\Resource;
use App\User;
use Behat\Behat\Context\Context;
use Behat\Behat\Context\SnippetAcceptingContext;

/**
 * Defines application features from the specific context.
 */
class WebContext extends PHPUnit_Framework_TestCase implements Context, SnippetAcceptingContext
{
    use LaravelContextTrait, LaravelMinkTrait;

    private $resources;
    private $resource;
    private $author;
    private $organization;
    private $user;
    private $token;
    private $faker;

    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
        parent::__construct();

        $this->faker = Faker\Factory::create();
    }

    /**
     * @Given I am a user
     */
    public function iAmAUser()
    {
        $this->user = factory(User::class)->create();
    }

    /**
     * @Given I am logged in as a user
     */
    public function iAmLoggedInAsAUser()
    {
        $this->iAmAUser();
        $this->be($this->user);
    }

    /**
     * @Given I am not logged in as a user
     */
    public function iAmNotLoggedInAsAUser()
    {
        $this->assertFalse(Auth::check());
    }

    /**
     * @Given there is a user :name with email :email
     */
    public function thereIsAUserWithEmail($name, $email)
    {
        $this->user = factory(User::class)->create(['full_name' => $name, 'email' => $email]);
    }

    /**
     * @Given there is a user with email :email and password :password
     */
    public function thereIsAUserWithEmailAndPassword($email, $password)
    {
        $this->user = factory(User::class)->create(['email' => $email, 'password' => bcrypt($password)]);
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
     * @Given there is a/an :type with :attribute :value
     */
    public function thereIsAWith($type, $attribute, $value)
    {
        $this->createInstance($type, [$attribute => $value]);
    }

    /**
     * @Given :title is a pending resource by default
     */
    public function isAPendingResourceByDefault($title)
    {
        // Nothing to do here in web context
    }

    /**
     * @Given :title is an approved resource
     */
    public function isAnApprovedResource($title)
    {
        $this->resource->setApproved();
    }

    /**
     * @Given I am logged in as a superadmin
     */
    public function iAmLoggedInAsASuperadmin()
    {
        $this->iAmLoggedInAsAUser();
        $this->user->addSuperadmin();
    }

    /**
     * @Given :user is the only contact for :organization
     */
    public function isTheOnlyContactFor($user, $organization)
    {
        $organization = $this->organization;
        $user         = $this->user;

        $user->organizations()->sync([$organization->id => ['contact' => 1]]);
        $contacts = $organization->users()->lists('contact', 'full_name');

        $this->assertArrayHasKey($user->full_name, $contacts, "Organization {$organization->organization} missing user {$user->full_name}");
        $this->assertEquals(1, $contacts[$user->full_name]);
    }

    /**
     * @When I have selected an organization
     */
    public function iHaveSelectedAnOrganization()
    {
        $this->user->organizations()->save(factory(Organization::class)->make());
        $this->assertNotTrue($this->user->organizations->isEmpty());
    }

    /**
     * @Given I have not selected an organization
     */
    public function iHaveNotSelectedAnOrganization()
    {
        $this->assertTrue($this->user->organizations->isEmpty());
    }

    /**
     * @When I register with name :name email :email password :password
     */
    public function iRegisterWithNameEmailPassword($name, $email, $password)
    {
        $this->withSession(['_token' => str_random(40)]);

        $this->call('POST', '/register', [
            '_token'                => csrf_token(),
            'full_name'             => $name,
            'email'                 => $email,
            'password'              => $password,
            'password_confirmation' => $password,
            'employer'              => '',
            'title'                 => '',
        ]);

        $this->followRedirects();
        $this->assertResponseOk();
    }

    /**
     * @When I log in with email :email and password :password
     */
    public function iLogInWithEmailAndPassword($email, $password)
    {
        $this->withSession(['_token' => str_random(40)]);

        $this->call('POST', '/login', ['email' => $email, 'password' => $password, '_token' => csrf_token()]);

        $this->assertTrue(Auth::check());
    }

    /**
     * @When I log out
     */
    public function iLogOut()
    {
        Auth::logout();
        $this->assertFalse(Auth::check());
    }

    /**
     * @When I reset my password
     */
    public function iResetMyPassword()
    {
        $user = $this->user;

        // Set CSRF token in session
        $this->withSession(['_token' => str_random(40)]);

        $response = $this->makeRequest('POST', '/password/email', [
            'email'  => $user->email,
            '_token' => csrf_token(),
        ]);

        $this->assertResponseOk();
    }

    /**
     * @When I go to the reset link
     */
    public function iGoToTheResetLink()
    {
        $token = $this->token = DB::table('password_resets')->where('email', $this->user->email)->first()->token;
        $this->visit('/password/reset/' . $token);
        $this->assertResponseOk();
    }

    /**
     * @When I reset my password to :password
     */
    public function iResetMyPasswordTo($password)
    {
        $user         = $this->user;
        $old_password = $user->password;

        $this->makeRequest('POST', '/password/reset', ['token' => $this->token, 'email' => $user->email, 'password' => $password, 'password_confirmation' => $password, '_token' => csrf_token()]);

        $new_password = User::find($user->id)->password;
        $this->assertNotEquals($old_password, $new_password);
    }

    /**
     * @When I create a user called :name
     */
    public function iCreateAUserCalled($name)
    {
        $this->withSession(['_token' => str_random(40)]);
        $this->call('POST', '/users', ['_token' => csrf_token(), 'full_name' => $name, 'email' => $this->faker->email]);
    }

    /**
     * @When I change users email to :email
     */
    public function iChangeUsersEmailTo($email)
    {
        $this->type($email, '#email');
        $this->press('Update User');
    }

    /**
     * @When I delete user :name
     */
    public function iDeleteUser($name)
    {
        $url = '/users/' . $this->user->identifier;
        $this->withSession(['_token' => str_random(40)]);
        $this->call('DELETE', $url, ['_token' => csrf_token()]);
    }

    /**
     * @When I search
     */
    public function iSearch()
    {
        $this->call('GET', '/search');
    }

    /**
     * @Then I should see a :type called :title
     */
    public function iShouldSeeACalled($type, $title)
    {
        $this->see($title);
    }

    /**
     * @Then I should not see a :type called :title
     */
    public function iShouldNotSeeACalled($type, $title)
    {
        if ('user' === $type) {
            $this->assertNotContains($title, User::get()->lists('full_name')->toArray());
        } else {
            $this->dontsee($title);
        }
    }

    public function assertPasswordResetEmailSentTo($recipient)
    {
        $email = $this->getLastEmail();

        $this->assertEmailContains('password/reset', $email);
        $this->assertEmailSentTo($recipient, $email);
    }

    /**
     * @Then I receive an email with the password reset link
     */
    public function iReceiveAnEmailWithThePasswordResetLink()
    {
        $this->assertPasswordResetEmailSentTo($this->user->email);
    }

    /**
     * @Then :recipient receives a password reset email
     */
    public function receivesAPasswordResetEmail($recipient)
    {
        $this->assertPasswordResetEmailSentTo($recipient);
    }

    /**
     * @Then I can log in with password :password
     */
    public function iCanLogInWithPassword($password)
    {
        $this->makeRequest('POST', '/login', ['email' => $this->user->email, 'password' => $password, '_token' => csrf_token()]);

        $this->assertResponseOk();
        $this->assertTrue(Auth::check());
    }

    /**
     * @Then I should be logged in
     */
    public function iShouldBeLoggedIn()
    {
        $this->assertTrue(Auth::check());
    }

    /**
     * @Then I should see a list of users
     */
    public function iShouldSeeAListOfUsers()
    {
        $this->assertViewHas('users');
        $this->assertViewHas('search');
    }

    /**
     * @Then I should see a message
     */
    public function iShouldSeeAMessage()
    {
        $this->assertSessionHas('message');
    }

    /**
     * @Then I should see an error
     */
    public function iShouldSeeAnError()
    {
        $this->assertSessionHas('error');
    }
}
