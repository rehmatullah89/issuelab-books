<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResearchTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research', function (Blueprint $table) {
            $table->bigIncrements('research_id');
            $table->string('listing_org');
            $table->string('title', 300);
            $table->string('identifier', 300)->index('identifier');
            $table->text('description');
            $table->text('subject1');
            $table->text('rights');
            $table->string('language');
            $table->char('lang_code', 3);
            $table->text('coverage');
            $table->integer('pub_date_month')->unsigned();
            $table->integer('pub_date_day')->unsigned();
            $table->integer('pub_date_year');
            $table->integer('pub_date_mktime')->index('pub_date_mktime');
            $table->string('isbn')->nullable()->default(NULL);
            $table->string('download_url')->nullable()->default(NULL);
            $table->string('filename')->nullable()->default(NULL);
            $table->string('doc_viewer');
            $table->text('how_to_obtain')->nullable();
            $table->char('ok_to_share', 1);
            $table->string('date_added', 10);
            $table->integer('date_added_mktime')->index('date_added_mktime');
            $table->string('date_modified', 10);
            $table->integer('date_modified_mktime')->index('date_modified_mktime');
            $table->text('special_comments')->nullable();
            $table->char('available', 1)->default('0');
            $table->char('approved', 1)->default('0');
            $table->char('subdomain', 1)->default('0');
            $table->text('include_in_subdomain');
            $table->char('rss_feed', 1)->default('0');
        });

        // For publish dates, add manually to set zerofill and integer lengths to match existing database, since Eloquent doesn't offer these as options
        DB::statement("ALTER TABLE `research` CHANGE `pub_date_month` `pub_date_month` INT(2) UNSIGNED ZEROFILL NOT NULL;");
        DB::statement("ALTER TABLE `research` CHANGE `pub_date_day` `pub_date_day` INT(2) UNSIGNED ZEROFILL NOT NULL DEFAULT '01';");
        DB::statement("ALTER TABLE `research` CHANGE `pub_date_year` `pub_date_year` INT(4) NOT NULL;");

        // Set _mktime integer sizes to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `research` CHANGE `pub_date_mktime` `pub_date_mktime` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `research` CHANGE `date_added_mktime` `date_added_mktime` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `research` CHANGE `date_modified_mktime` `date_modified_mktime` INT(10) NOT NULL;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('research');
    }
}
