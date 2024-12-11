<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoverageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coverage', function (Blueprint $table) {
            $table->bigInteger('id', $autoIncrement = true, $unsigned = false);
            $table->string('location');
            $table->string('identifier');
            $table->string('continent');
            $table->string('continent_region');
            $table->string('country');
            $table->string('country_region');
            $table->string('state');
            $table->string('state_region');
            $table->string('county');
            $table->string('county_region');
            $table->string('city');
            $table->string('city_region');
            $table->text('other');
            $table->string('longitude');
            $table->string('latitude');
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `coverage` CHANGE `id` `id` BIGINT(10) NOT NULL AUTO_INCREMENT;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('coverage');
    }
}
