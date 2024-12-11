<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ActivityLog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activity_log', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('user_role', 255);
            $table->string('activity', 255);
            $table->integer('listing_id');
            $table->integer('organization_id');
            $table->integer('kc_id');
            $table->date('action_date');
            $table->timestamp('action_date_mktime');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('activity_log');
    }
}
