<?php

use Illuminate\Foundation\Testing\DatabaseTransactions;

class TestCase extends Illuminate\Foundation\Testing\TestCase
{
    use DatabaseTransactions;

    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://www.issuelab.test';

    /**
     * For creating mocks, stubs, and spies
     *
     * @var Prophecy\Prophet
     */
    protected $prophet;

    public function setUp()
    {
        if (!$this->app) {
            $this->refreshApplication();
        }

        $this->prophet = new Prophecy\Prophet;
    }

    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
    {
        $app = require __DIR__ . '/../bootstrap/app.php';

        $app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        return $app;
    }

    public function tearDown()
    {
        parent::tearDown();

        $this->prophet->checkPredictions();
    }
}
