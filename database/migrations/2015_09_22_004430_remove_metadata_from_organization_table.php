<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class RemoveMetadataFromOrganizationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('organization', function (Blueprint $table) {
            $table->dropColumn([
                'email',
                'password',
                'permission_to_add_research',
                'contact_firstname',
                'contact_lastname',
                'phone',
                'phone_ext',
                'fax',
                'budget',
                'staff',
                'found_issuelab',
                'active',
            ]);

            $table->string('fundref');
            $table->string('funder_id', 50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('organization', function (Blueprint $table) {
            $table->string('email');
            $table->string('password');
            $table->char('permission_to_add_research', 1);
            $table->string('contact_firstname')->default('');
            $table->string('contact_lastname')->default('');
            $table->string('phone', 25)->default('');
            $table->string('phone_ext')->default('');
            $table->string('fax', 25)->default('');
            $table->string('budget', 200);
            $table->string('staff', 200);
            $table->string('found_issuelab', 200);
            $table->char('active', 1)->index('active')->default('0');
            $table->dropColumn([
                'funder_id',
                'fundref',
            ]);
        });
    }
}
