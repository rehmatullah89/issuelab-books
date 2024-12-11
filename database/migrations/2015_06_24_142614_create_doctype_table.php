<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctype', function(Blueprint $table) {
            $table->integer('id', $autoIncrement = true, $unsigned = false);
            $table->string('doctype');
            $table->string('identifier');
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `doctype` CHANGE `id` `id` INT(10) NOT NULL AUTO_INCREMENT;");
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('doctype');
    }
}
