<?php

class KnowledgeCenterControllerTest extends TestCase
{
    private $url;
    private $subdomain;
    private $knowledgeCenter;
    private $templatePath;
    private $cssPath;

    /**
     * NOTE: You need to add `test.issuelab.test` to your hosts file for the knowledge center route to work correctly
     */
    public function setUp()
    {
        parent::setUp();

        // Create Knowledge Center
        $this->knowledgeCenter = factory(App\KnowledgeCenter::class)->create(['subdomain' => 'test']);
        $this->subdomain       = $this->knowledgeCenter->subdomain;
        $this->url             = "http://{$this->subdomain}.issuelab.test";
        $this->templatePath    = base_path() . "/resources/views/knowledge-centers/{$this->subdomain}";
        $this->cssPath         = "css/knowledge-centers/{$this->subdomain}.css";

        // Add custom header and footer files
        mkdir($this->templatePath);
        file_put_contents($this->templatePath . "/header.blade.php", '');
        file_put_contents($this->templatePath . "/footer.blade.php", '');
    }

    public function testIndex()
    {
        // Test route and response
        $this->visit($this->url);
        $this->onPage($this->url);

        // Test that we've loaded the appropriate custom css file
        $this->see($this->cssPath);
    }

    public function tearDown()
    {
        parent::tearDown();

        unlink($this->templatePath . "/header.blade.php");
        unlink($this->templatePath . "/footer.blade.php");
        rmdir($this->templatePath);
    }
}
