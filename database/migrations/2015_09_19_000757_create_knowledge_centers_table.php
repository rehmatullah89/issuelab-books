<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateKnowledgeCentersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('knowledge_centers', function (Blueprint $table) {
            $table->bigInteger('id', $autoIncrement = true, $unsigned = false);
            $table->integer('client_id');
            $table->string('subdomain');
            $table->string('title');
            $table->text('description');
            $table->integer('results_per_page');
            $table->integer('number_of_page_links');
            $table->integer('include_key_findings');
            $table->integer('tweet');
            $table->integer('include_teasers');
            $table->integer('include_kc_menu');
            $table->string('kc_menu_title');
            $table->integer('search_form_keyword_input');
            $table->integer('search_form_pubdate_menu');
            $table->string('search_form_selects');
            $table->string('search_form_checkboxes');
            $table->enum('kc_display', array('grid_view', 'list_view'));
            $table->string('service_type', 50);
        });

        // Set `id` integer size to match existing database schema (not supported by Eloquent)
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `id` `id` BIGINT(10) NOT NULL AUTO_INCREMENT;");
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `client_id` `client_id` INT(10) NOT NULL;");
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `results_per_page` `results_per_page` INT(10) NOT NULL DEFAULT 10;");
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `number_of_page_links` `number_of_page_links` INT(10) NOT NULL DEFAULT 1;");
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `include_key_findings` `include_key_findings` INT(1) NOT NULL DEFAULT 0;");
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `tweet` `tweet` INT(1) NOT NULL DEFAULT 0;");
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `include_teasers` `include_teasers` INT(1) NOT NULL DEFAULT 0;");
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `include_kc_menu` `include_kc_menu` INT(10) NOT NULL DEFAULT 0;");
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `search_form_keyword_input` `search_form_keyword_input` INT(10) NOT NULL DEFAULT 1;");
        DB::statement("ALTER TABLE `knowledge_centers` CHANGE `search_form_pubdate_menu` `search_form_pubdate_menu` INT(10) NOT NULL DEFAULT 1;");

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('knowledge_centers');
    }
}
