<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResearchAuthorPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('link_resource_author', function (Blueprint $table) {
            $table->bigInteger('id', $autoIncrement = true, $unsigned = false);
            $table->integer('resource_id')->unique('resource_id');
            $table->integer('author_id')->index('author_id');

            // Don't use foreign keys since they are not set on existing database schema
            // $table->foreign('resource_id')->references('research_id')->on('research')->onDelete('cascade');
            // $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `link_resource_author` CHANGE `id` `id` BIGINT(10) NOT NULL AUTO_INCREMENT;");
        DB::statement("ALTER TABLE `link_resource_author` CHANGE `resource_id` `resource_id` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `link_resource_author` CHANGE `author_id` `author_id` INT(10) NOT NULL;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('link_resource_author');
    }
}
