<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssueAreaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issue_area', function(Blueprint $table) {
            $table->integer('id', $autoIncrement = true, $unsigned = false);
            $table->string('issue_area');
            $table->string('identifier')->unique('identifier_2');
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `issue_area` CHANGE `id` `id` INT(10) NOT NULL AUTO_INCREMENT;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('issue_area');
    }
}
