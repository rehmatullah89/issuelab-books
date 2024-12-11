<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizationUserPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization_affiliations', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('org_id');
            $table->integer('user_id');
            $table->integer('contact');
            $table->integer('superadmin');

            // Don't use foreign keys since they are not set on existing database schema
            // $table->foreign('organization_id')->references('id')->on('organization')->onDelete('cascade');
            // $table->foreign('user_id')->references('id')->on('user')->onDelete('cascade');
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `organization_affiliations` CHANGE `id` `id` BIGINT(10) NOT NULL AUTO_INCREMENT;");
        DB::statement("ALTER TABLE `organization_affiliations` CHANGE `org_id` `org_id` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `organization_affiliations` CHANGE `user_id` `user_id` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `organization_affiliations` CHANGE `contact` `contact` INT(1) NOT NULL DEFAULT 0;");
        DB::statement("ALTER TABLE `organization_affiliations` CHANGE `superadmin` `superadmin` INT(1) NOT NULL DEFAULT 0;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('organization_affiliations');
    }
}
