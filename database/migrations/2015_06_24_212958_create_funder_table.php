<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFunderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('funder', function (Blueprint $table) {
            $table->bigInteger('id', $autoIncrement = true, $unsigned = false);
            $table->string('gm_key');
            $table->string('ein', 20);
            $table->string('funder')->unique('funder');
            $table->string('identifier');
            $table->string('fc_name', 200);
            $table->string('street_addr', 200);
            $table->string('street_addr2', 200);
            $table->string('city', 200);
            $table->string('zipcode', 20);
            $table->string('state_code', 20);
            $table->string('state', 20);
            $table->string('country', 200);
            $table->string('email', 200);
            $table->string('phone', 20);
            $table->string('fax', 20);
            $table->string('url');
            $table->string('fdo_url', 200);
            $table->string('date_modified', 20);
            $table->string('date_modified_mktime', 20);
            $table->string('guidestar_id', 100);
            $table->string('guidestar_name', 300);
            $table->string('fundref', 150);
            $table->timestamp('date_added');
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `funder` CHANGE `id` `id` BIGINT(100) NOT NULL AUTO_INCREMENT;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('funder');
    }
}
