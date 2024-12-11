<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InsertDefaultResourceMetadataFilters extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'keywords',
			'value'    => 'Keywords'
		)
            );
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'pubdate',
			'value'    => 'Publication Date'
		)
            );
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'authors',
			'value'    => 'Authors'
		)
            );
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'funder',
			'value'    => 'Funder'
		)
            );
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'publisher',
			'value'    => 'Publisher'
		)
            );
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'doctypes',
			'value'    => 'Document Types'
		)
            );
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'issueareas',
			'value'    => 'Issue Areas'
		)
            );
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'language',
			'value'    => 'Languages'
		)
            );
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'geography',
			'value'    => 'Geography'
		)
            );
        DB::table('resource_metadata')->insert(
                array(
			'key'          => 'copyright',
			'value'    => 'Copyright'
		)
            );
            
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('resource_metadata')->truncate();
    }
}
