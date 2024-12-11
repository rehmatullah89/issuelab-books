<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSearchTermsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('search_terms', function (Blueprint $table) {
            $table->increments('id');
            $table->string('domain', 200);
            $table->text('search');
            $table->string('sort')->nullable();
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
            $table->string('ip_address', 300);
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
        Schema::drop('search_terms');
    }
}
