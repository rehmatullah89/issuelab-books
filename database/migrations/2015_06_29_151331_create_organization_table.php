<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organization', function(Blueprint $table) {
            $table->bigInteger('id', $autoIncrement = true, $unsigned = false);
            $table->string('email');
            $table->string('password');
            $table->string('organization')->index('organization');
            $table->string('identifier')->index('identifier');
            $table->char('permission_to_add_research', 1);
            $table->text('mission_statement');
            $table->string('contact_firstname')->default('');
            $table->string('contact_lastname')->default('');
            $table->string('phone', 25)->default('');
            $table->string('phone_ext')->default('');
            $table->string('fax', 25)->default('');
            $table->string('url')->default('');
            $table->string('mailing_address')->default('');
            $table->string('mailing_address2')->default('');
            $table->string('country')->default('');
            $table->string('city')->default('');
            $table->string('state', 100)->default('');
            $table->string('province')->default('');
            $table->string('zip', 100)->default('');
            $table->string('budget', 200);
            $table->string('staff', 200);
            $table->string('found_issuelab', 200);
            $table->char('active', 1)->index('active')->default('0');
            $table->string('date_added', 255);
            $table->integer('date_added_mktime');
            $table->string('date_modified', 255);
            $table->integer('date_modified_mktime');
            $table->string('ein');
            $table->string('gm_key', 100);
            $table->string('recipient_key', 100);
            $table->string('fc_name', 300);
            $table->string('fdo_url', 300);
            $table->string('guidestar_id', 100);
            $table->string('guidestar_name', 300);
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `organization` CHANGE `id` `id` BIGINT(20) NOT NULL AUTO_INCREMENT;");

        // Set _mktime integer sizes to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `organization` CHANGE `date_added_mktime` `date_added_mktime` INT(10) NOT NULL DEFAULT 0;");
        DB::statement("ALTER TABLE `organization` CHANGE `date_modified_mktime` `date_modified_mktime` INT(10) NOT NULL DEFAULT 0;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('organization');
    }
}
