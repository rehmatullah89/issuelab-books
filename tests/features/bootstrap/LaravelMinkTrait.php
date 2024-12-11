<?php

use Illuminate\Foundation\Testing\AssertionsTrait;
use Illuminate\Foundation\Testing\CrawlerTrait;

trait LaravelMinkTrait
{
    use AssertionsTrait, CrawlerTrait;

    /**
     * @When I go to the homepage
     */
    public function iGoToTheHomepage()
    {
        $this->visit('/');
    }

    /**
     * @Given I go to :uri
     */
    public function iGoTo($uri)
    {
        $this->visit($uri);
    }

    /**
     * @Then I should be on the homepage
     */
    public function iShouldBeOnTheHomepage()
    {
        $this->landOn('/');
    }

    /**
     * @Then I should be on :uri
     */
    public function iShouldBeOn($uri)
    {
        $this->followRedirects();
        $this->landOn($uri);
        $this->assertResponseOk();
    }

    /**
     * @Then I should not be on :uri
     */
    public function iShouldNotBeOn($uri)
    {
        $uri = $this->prepareUrlForRequest($uri);

        $this->assertNotEquals(
            $uri, $this->currentUri, "Did land on expected page [{$uri}].\n"
        );

        return $this;
    }

    /**
     * @Then I should see :text
     */
    public function iShouldSee($text)
    {
        $this->see($text);
    }

    /**
     * @Then I should not see :text
     */
    public function iShouldNotSee($text)
    {
        $this->dontsee($text);
    }

    /**
     * @When I press :buttonText
     */
    public function iPress($buttonText)
    {
        $this->press($buttonText);
    }
}
