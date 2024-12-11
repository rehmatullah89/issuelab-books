<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AdvanceSearchFieldInKc extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('knowledge_centers',function(Blueprint $table){         
            $table->tinyInteger('advance_search_expanded')->after('kc_display');
            $table->enum('switch_category_view', array('optgroup_view', 'select_view'))->after('advance_search_expanded');
        });
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
