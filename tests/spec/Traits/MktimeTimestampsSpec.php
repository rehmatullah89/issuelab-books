<?php

namespace spec\App\Traits;

use PhpSpec\Laravel\LaravelObjectBehavior;
use Prophecy\Argument;
use Illuminate\Database\Eloquent\Model;
use App\Traits\MktimeTimestamps;
use Carbon\Carbon;

class MktimeTimestampsSpec extends LaravelObjectBehavior
{
    function let()
    {
        $this->beAnInstanceOf('spec\App\Traits\MktimeTimestampsStub');
    }

    function it_is_initializable()
    {
        $this->shouldHaveType('spec\App\Traits\MktimeTimestampsStub');
    }

    function it_has_a_date_added_timestamp() {
        $now = Carbon::now();
        $this->setCreatedAt($now);
        $this->date_added->shouldBe($now);
    }

    function it_has_a_date_added_mktime_unix_timestamp() {
        $now = time();
        $this->setCreatedAt(Carbon::createFromTimestamp($now));
        $this->date_added_mktime->shouldBe($now);
    }

    function it_has_a_date_modified_timestamp() {
        $now = Carbon::now();
        $this->setUpdatedAt($now);
        $this->date_modified->shouldBe($now);
    }

    function it_has_a_date_modified_mktime_unix_timestamp() {
        $now = time();
        $this->setUpdatedAt(Carbon::createFromTimestamp($now));
        $this->date_modified_mktime->shouldBe($now);
    }
}

class MktimeTimestampsStub extends Model {
    use MktimeTimestamps;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * The name of the "created at" column.
     *
     * @var string
     */
    const CREATED_AT = 'date_added';

    /**
     * The name of the "updated at" column.
     *
     * @var string
     */
    const UPDATED_AT = 'date_modified';
}
