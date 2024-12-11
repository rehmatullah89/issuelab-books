<?php

namespace spec\App;

use PhpSpec\Laravel\LaravelObjectBehavior;
use Storage;

class ResourceSpec extends LaravelObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType('App\Resource');
    }

    public function it_can_be_approved()
    {
        // Bypass validation rules for this test
        $this->setRules([]);
        $this->setApproved();
        $this->approved->shouldBe(\App\Resource::$status['approved']);
    }

    public function it_can_be_available()
    {
        // Bypass validation rules for this test
        $this->setRules([]);
        $this->setAvailable();
        $this->available->shouldBe(true);
    }

    public function it_has_an_identifier_created_from_title()
    {
        $this->title = 'Research You Can\'t Argue With';
        $this->sluggify();
        $this->identifier->shouldBe('research_you_can_t_argue_with');
    }

    public function it_can_transform_pub_date_month_to_two_digits()
    {
        $this->pub_date_month = '1';
        $this->pub_date_month->shouldBe('01');
    }

    public function it_can_transform_pub_date_day_to_two_digits()
    {
        $this->pub_date_month = '9';
        $this->pub_date_month->shouldBe('09');
    }

    public function it_sets_a_default_pub_date_day_that_can_be_overridden()
    {
        $this->pub_date_day->shouldBe('01');

        $this->pub_date_day = '23';

        $this->pub_date_day->shouldBe('23');
    }

    public function it_sets_a_default_pub_date_month_that_can_be_overridden()
    {
        $this->pub_date_month->shouldBe('01');

        $this->pub_date_month = '11';

        $this->pub_date_month->shouldBe('11');
    }

    public function it_available_by_default()
    {
        $this->available->shouldBe(true);
    }

    public function it_is_pending_by_default()
    {
        $this->approved->shouldBe(\App\Resource::$status['pending']);
    }

    public function it_has_a_pub_date_in_mktime()
    {
        $this->pub_date_month = '02';
        $this->pub_date_day   = '15';
        $this->pub_date_year  = '1999';

        $this->setPubDate();

        $this->pub_date_mktime->shouldBe(mktime(0, 0, 0, 2, 15, 1999));
    }

    public function it_has_a_pub_date_attribute_that_is_an_instance_of_Carbon()
    {
        $this->pub_date_month = '07';
        $this->pub_date_day   = '11';
        $this->pub_date_year  = '2004';

        $this->pub_date->beAnInstanceOf(Carbon::class);
        $this->pub_date->toDateString()->shouldBe('2004-07-11');
    }

    public function it_has_a_cover_image()
    {
        $this->research_id = 7;
        $file_url          = "/application/images/cover_graphics/185/7.jpg";

        Storage::shouldReceive('exists')->once()->with($file_url)->andReturn(true);

        $this->getCoverImageAttribute()->shouldReturn("http://www.issuelab.org{$file_url}");
    }

    public function it_has_a_cover_image_fallback_if_file_not_found()
    {
        $this->research_id = 8;
        $file_url          = "/application/images/cover_graphics/185/8.jpg";

        Storage::shouldReceive('exists')->once()->with($file_url)->andReturn(false);

        $this->getCoverImageAttribute()->shouldBe('http://www.issuelab.org/img/generic_book.png');
    }
}
