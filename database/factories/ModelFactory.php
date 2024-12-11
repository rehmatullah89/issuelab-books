<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
 */

$factory->define(App\User::class, function ($faker) {
    return [
        'full_name'      => $faker->name,
        'email'          => $faker->email,
        'password'       => bcrypt(str_random(10)),
        'remember_token' => bcrypt(str_random(10)),
    ];
});

$factory->define(App\Resource::class, function ($faker) {
    return [
        'title'          => $faker->text(30),
        'description'    => $faker->text(200),
        'rights'         => 'Copyright ' . $faker->year() . ' ' . $faker->company,
        'pub_date_month' => $faker->month(),
        'pub_date_day'   => $faker->dayOfMonth(),
        'pub_date_year'  => $faker->year(),
        'isbn'           => $faker->isbn13,
        'download_url'   => $faker->url,
        'filename'       => $faker->slug . '.' . $faker->fileExtension,
    ];
});

$factory->define(App\Author::class, function ($faker) {
    return [
        'first' => $faker->firstName,
        'last'  => $faker->lastName,
    ];
});

$factory->define(App\Coverage::class, function ($faker) {
    return [
        'location' => $faker->country,
    ];
});

$factory->define(App\Doctype::class, function ($faker) {
    return [
        'doctype' => $faker->word,
    ];
});

$factory->define(App\IssueArea::class, function ($faker) {
    return [
        'issue_area' => $faker->text(20),
    ];
});

$factory->define(App\Keyword::class, function ($faker) {
    return [
        'keyword' => $faker->word,
        'stem'    => $faker->word,
    ];
});

$factory->define(App\Language::class, function ($faker) {
    return [
        'abbrev'   => strtolower($faker->lexify('???')),
        'language' => ucfirst($faker->word),
    ];
});

$factory->define(App\Organization::class, function ($faker) {
    return [
        'organization'      => $faker->company,
        'mission_statement' => $faker->text(100),
        'url'               => $faker->url,
        'mailing_address'   => $faker->buildingNumber . ' ' . $faker->streetName,
        'mailing_address2'  => $faker->secondaryAddress,
        'country'           => $faker->country,
        'city'              => $faker->city,
        'state'             => $faker->state,
        'zip'               => $faker->postcode,
        'ein'               => $faker->randomNumber(9),
    ];
});

$factory->define(App\UniversalIdentifier::class, function ($faker) {
    return [
        'universal_identifier' => $faker->word,
        'type'                 => $faker->randomElement(\App\UniversalIdentifier::$types),
    ];
});

$factory->define(App\KnowledgeCenter::class, function ($faker) {
    return [
        'subdomain'   => strtolower($faker->word),
        'title'       => $faker->sentence(),
        'description' => $faker->paragraph(),
    ];
});
