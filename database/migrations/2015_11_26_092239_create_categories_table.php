<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kc_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('p_id');
            $table->integer('kc_id');
            $table->string('category', 255);
            $table->string('identifier', 255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('kc_categories');
    }
}
