<?php

use Prophecy\Argument;

class SearchControllerTest extends TestCase
{
    public function testSearch()
    {
        // ArrayIterator stub
        $arrayIterator = $this->prophet->prophesize(ArrayIterator::class);

        // Collection stub
        $collection = $this->prophet->prophesize(Illuminate\Database\Eloquent\Collection::class);
        $collection->lists(Argument::type('string'), Argument::type('string'))->willReturn($collection->reveal());
        $collection->getIterator()->willReturn($arrayIterator->reveal());

        // Application Helper stub
        $helper = $this->prophet->prophesize(App\Helpers\ApplicationHelper::class);
        $helper->checkboxes($collection->reveal(), Argument::type('string'), Argument::type('bool'));
        $this->app->instance(App\Helpers\ApplicationHelper::class, $helper->reveal());

        // Coverage stub
        $coverage = $this->prophet->prophesize(App\Repositories\CoverageRepositoryInterface::class);
        $coverage->all()->willReturn($collection->reveal());
        $this->app->instance(App\Repositories\CoverageRepositoryInterface::class, $coverage->reveal());

        // Test route and response
        $this->visit('/search');
        $this->onPage('/search');

        // Check that expected methods calls have been made
        $collection->lists(Argument::type('string'), Argument::type('string'))->shouldHaveBeenCalled();
        $helper->checkboxes(Argument::type(Illuminate\Database\Eloquent\Collection::class), Argument::type('string'), Argument::type('bool'))->shouldHaveBeenCalled();
        $coverage->all()->shouldHaveBeenCalled();

        // Test view data
        $this->assertViewHas('copyright');
        $this->assertViewHas('coverage');
        $this->assertViewHas('doctypes');
        $this->assertViewHas('issueAreas');
        $this->assertViewHas('languages');
    }

    public function testFundersList()
    {
        $funder = $this->prophet->prophesize(App\Repositories\FunderRepositoryInterface::class);
        $this->app->instance(App\Repositories\FunderRepositoryInterface::class, $funder->reveal());

        $this->call('GET', '/search/funders/list?q=Institutie');

        $funder->searchList('Institutie')->shouldHaveBeenCalled();

        $this->followRedirects();
        $this->assertResponseOk();
    }

    public function testAuthors()
    {
        $author = $this->prophet->prophesize(App\Repositories\AuthorRepositoryInterface::class);
        $this->app->instance(App\Repositories\AuthorRepositoryInterface::class, $author->reveal());

        $this->call('GET', '/search/authors?fullname=Dale+Kunkel');

        $author->searchByFullname('Dale Kunkel')->shouldHaveBeenCalled();

        $this->followRedirects();
        $this->assertResponseOk();
    }

    public function testOrganizations()
    {
        $organization = $this->prophet->prophesize(App\Repositories\OrganizationRepositoryInterface::class);
        $this->app->instance(App\Repositories\OrganizationRepositoryInterface::class, $organization->reveal());

        $this->call('GET', '/search/organizations?organization=Annie+E+Cassie+Foundation');

        $organization->searchByName('Annie E Cassie Foundation')->shouldHaveBeenCalled();

        $this->followRedirects();
        $this->assertResponseOk();
    }

    public function testKnowledgeCenters()
    {
        $knowledgeCenter = $this->prophet->prophesize(App\Repositories\KnowledgeCenterRepositoryInterface::class);
        $this->app->instance(App\Repositories\KnowledgeCenterRepositoryInterface::class, $knowledgeCenter->reveal());

        $this->call('GET', '/search/knowledge-centers?subdomain=socialissue');

        $knowledgeCenter->searchBySubdomain('socialissue')->shouldHaveBeenCalled();

        $this->followRedirects();
        $this->assertResponseOk();
    }

    public function testRecordsKeywords()
    {
        $record = $this->prophet->prophesize(App\Repositories\SearchRecordRepositoryInterface::class);
        $this->app->instance(App\Repositories\SearchRecordRepositoryInterface::class, $record->reveal());

        $this->call('GET', '/search/records?keywords=water');

        $record->keywords('water')->shouldHaveBeenCalled();

        $this->followRedirects();
        $this->assertResponseOk();
    }

    public function testRecordsCreate()
    {
        $record = $this->prophet->prophesize(App\Repositories\SearchRecordRepositoryInterface::class);
        $this->app->instance(App\Repositories\SearchRecordRepositoryInterface::class, $record->reveal());

        $this->withoutMiddleware();
        $this->call('POST', '/search/records/create', []);

        $record->create(Argument::type('array'))->shouldHaveBeenCalled();

        $this->followRedirects();
        $this->assertResponseOk();
    }
}
