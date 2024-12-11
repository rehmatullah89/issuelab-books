<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateKeyFindingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('key_finding', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('kc_id')->unsigned();
            $table->integer('resource_id')->unsigned();
            $table->text('key_finding');
            $table->integer('sort_order');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('key_finding');
    }
}
