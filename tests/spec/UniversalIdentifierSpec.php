<?php

namespace spec\App;

use PhpSpec\Laravel\LaravelObjectBehavior;

class UniversalIdentifierSpec extends LaravelObjectBehavior
{
    public function it_is_initializable()
    {
        $this->shouldHaveType('App\UniversalIdentifier');
    }

    public function it_should_have_a_valid_type()
    {
        $faker = \Faker\Factory::create();

        $this->universal_identifier = $faker->word;
        $this->type                 = $faker->randomElement(\App\UniversalIdentifier::$types);
        $this->isValid()->shouldBe(true);

        $this->type = 'notAnIdentifierType';
        $this->isValid()->shouldBe(false);
    }
}
