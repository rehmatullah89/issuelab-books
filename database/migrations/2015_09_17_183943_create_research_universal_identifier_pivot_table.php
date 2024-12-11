<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateResearchUniversalIdentifierPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('link_resource_universal_identifier', function (Blueprint $table) {
            $table->bigInteger('id', $autoIncrement = true, $unsigned = false);
            $table->integer('resource_id')->unique('resource_id');
            $table->integer('universal_identifier_id')->index('universal_identifier_id');

            // Don't use foreign keys since they are not set in existing database schema
            // $table->foreign('resource_id')->references('id')->on('research')->onDelete('cascade');
            // $table->foreign('universal_identifier_id')->references('id')->on('universal_identifier')->onDelete('cascade');
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `link_resource_universal_identifier` CHANGE `id` `id` BIGINT(10) NOT NULL AUTO_INCREMENT;");
        DB::statement("ALTER TABLE `link_resource_universal_identifier` CHANGE `resource_id` `resource_id` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `link_resource_universal_identifier` CHANGE `universal_identifier_id` `universal_identifier_id` INT(10) NOT NULL;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('link_resource_universal_identifier');
    }
}
