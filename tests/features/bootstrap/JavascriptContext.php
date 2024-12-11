<?php

use App\SearchRecord;
use Behat\Behat\Context\Context;
use Behat\Behat\Context\SnippetAcceptingContext;
use Behat\MinkExtension\Context\MinkContext;

/**
 * Defines application features from the specific context.
 */
class JavascriptContext extends MinkContext implements Context, SnippetAcceptingContext
{
    use LaravelContextTrait;

    /**
     * @Given I search for resources with keywords :keywords
     */
    public function iSearchForResourcesWithKeywords($keywords)
    {
        $this->visit("/search?keywords={$keywords}");
        $this->getSession()->wait(2000);
        $this->showLastResponse();
    }

    /**
     * @Then :keywords should be saved as a keyword search
     */
    public function shouldBeSavedAsAKeywordSearch($keywords)
    {
        $results = SearchRecord::where('keywords', $keywords)->firstOrFail();

        $this->assertEquals($keywords, $results->keywords);
    }
}
