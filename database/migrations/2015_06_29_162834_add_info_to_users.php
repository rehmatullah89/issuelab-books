<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddInfoToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @todo convert timestamps
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('name', 'full_name');
            $table->string('password', 255)->change();
            $table->string('identifier')->unique('identifier');
            $table->string('employer');
            $table->string('title');
            $table->integer('terms_accepted');
            $table->string('org_id', 10);
            $table->string('date_added', 10);
            $table->integer('date_added_mktime');
            $table->string('date_modified', 10);
            $table->integer('date_modified_mktime');
        });

        DB::statement("ALTER TABLE `users` CHANGE `id` `id` BIGINT(10) NOT NULL AUTO_INCREMENT;");
        DB::statement("ALTER TABLE `users` CHANGE `terms_accepted` `terms_accepted` INT(1) NOT NULL;");
        DB::statement("ALTER TABLE `users` ADD `active` INT(1) NOT NULL DEFAULT 0 AFTER `terms_accepted`;");
        DB::statement("ALTER TABLE `users` CHANGE `date_added_mktime` `date_added_mktime` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `users` CHANGE `date_modified_mktime` `date_modified_mktime` INT(10) NOT NULL;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('full_name', 'name');
            $table->dropColumn('identifier');
            $table->dropColumn('employer');
            $table->dropColumn('title');
            $table->dropColumn('terms_accepted');
            $table->dropColumn('active');
            $table->dropColumn('org_id');
        });
    }
}
