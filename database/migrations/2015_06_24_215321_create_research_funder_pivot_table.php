<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResearchFunderPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('link_resource_funder', function(Blueprint $table) {
            $table->bigInteger('id', $autoIncrement = true, $unsigned = false);
            $table->integer('resource_id')->unique('resource_id');
            $table->integer('funder_id')->index('funder_id');

            // Don't use foreign keys since they are not set in existing database schema
            // $table->foreign('resource_id')->references('id')->on('research')->onDelete('cascade');
            // $table->foreign('funder_id')->references('id')->on('funder')->onDelete('cascade');
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `link_resource_funder` CHANGE `id` `id` BIGINT(10) NOT NULL AUTO_INCREMENT;");
        DB::statement("ALTER TABLE `link_resource_funder` CHANGE `resource_id` `resource_id` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `link_resource_funder` CHANGE `funder_id` `funder_id` INT(10) NOT NULL;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('link_resource_funder');
    }
}
