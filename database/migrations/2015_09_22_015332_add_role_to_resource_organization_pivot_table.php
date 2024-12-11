<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddRoleToResourceOrganizationPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('link_resource_organization', function (Blueprint $table) {
            $table->enum('role', ['organization', 'funder']);
            $table->dropUnique('resource_id');
            $table->index('resource_id', 'resource_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('link_resource_organization', function (Blueprint $table) {
            $table->dropColumn('role');
            $table->dropIndex('resource_id');
            $table->unique('resource_id', 'resource_id');
        });
    }
}
