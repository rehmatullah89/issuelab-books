<?php

use Illuminate\Database\Migrations\Migration;

class DropFunderTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('funder');
        Schema::dropIfExists('link_resource_funder');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
