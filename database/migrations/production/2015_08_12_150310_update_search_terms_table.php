<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class UpdateSearchTermsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('search_terms', function (Blueprint $table) {
            $table->increments('id')->change();
            $table->renameColumn('timestamp', 'created_at');
            $table->timestamp('updated_at');
            $table->string('sort');
            $table->string('keywords')->nullable();
            $table->string('date_published_start')->nullable();
            $table->string('date_published_end')->nullable();
            $table->string('doctypes')->nullable();
            $table->string('issue_areas')->nullable();
            $table->string('languages')->nullable();
            $table->string('coverage')->nullable();
            $table->string('copyrights')->nullable();
            $table->string('authors')->nullable();
            $table->string('organizations')->nullable();
            $table->string('funders')->nullable();
            $table->string('categories')->nullable();
        });

        DB::statement("ALTER TABLE `search_terms` CHANGE `id` `id` INT(10) UNSIGNED AUTO_INCREMENT;");
        DB::statement("ALTER TABLE `search_terms` CHANGE `created_at` `created_at` TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00';");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('search_terms', function (Blueprint $table) {
            $table->bigInteger('id')->change();
            $table->renameColumn('created_at', 'timestamp');
            $table->dropColumn('updated_at');
            $table->dropColumn('sort');
            $table->dropColumn('keywords');
            $table->dropColumn('date_published_start');
            $table->dropColumn('date_published_end');
            $table->dropColumn('doctypes');
            $table->dropColumn('issue_areas');
            $table->dropColumn('languages');
            $table->dropColumn('coverage');
            $table->string('authors');
            $table->string('organizations');
            $table->string('funders');
            $table->string('categories');
        });

        DB::statement("ALTER TABLE `search_terms` CHANGE `id` `id` BIGINT(100) NOT NULL AUTO_INCREMENT;");
        DB::statement("ALTER TABLE `search_terms` CHANGE `timestamp` `timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ;");
    }
}
