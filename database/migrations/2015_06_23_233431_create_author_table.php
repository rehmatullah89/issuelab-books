<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('author', function (Blueprint $table) {
            $table->bigInteger('id', $autoIncrement = true, $unsigned = false);
            $table->string('fullname')->unique('fullname');
            $table->string('identifier');
            $table->string('first', 100);
            $table->string('middle1', 100);
            $table->string('middle2', 100);
            $table->string('middle3', 100);
            $table->string('last', 100);
            $table->string('suffix', 10);
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `author` CHANGE `id` `id` BIGINT(10) NOT NULL AUTO_INCREMENT;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('author');
    }
}
