<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableKcOptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kc_options', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('kc_id');
            $table->integer('resource_metadata_id');
            $table->string('custom_label');
            $table->integer('show_in_search');
            $table->integer('is_expanded');
            $table->integer('show_in_resourse');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('kc_options');
    }
}
