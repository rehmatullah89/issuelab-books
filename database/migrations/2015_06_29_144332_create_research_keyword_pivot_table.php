<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResearchKeywordPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('link_resource_keyword', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('resource_id')->unique('resource_id');
            $table->integer('keyword_id')->index('keyword_id');
            $table->string('score', 100);

            // Don't use foreign keys since they are not set in existing database schema
            // $table->foreign('resource_id')->references('id')->on('research')->onDelete('cascade');
            // $table->foreign('keyword_id')->references('id')->on('keyword')->onDelete('cascade');
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `link_resource_keyword` CHANGE `id` `id` BIGINT(10) NOT NULL AUTO_INCREMENT;");
        DB::statement("ALTER TABLE `link_resource_keyword` CHANGE `resource_id` `resource_id` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `link_resource_keyword` CHANGE `keyword_id` `keyword_id` INT(10) NOT NULL;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('link_resource_keyword');
    }
}
