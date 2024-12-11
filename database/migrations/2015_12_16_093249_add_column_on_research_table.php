<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnOnResearchTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("ALTER TABLE `research` ADD COLUMN `license` text NULL AFTER `rss_feed`");
        DB::statement("ALTER TABLE `research` ADD COLUMN `publish_status` enum('PENDING','DRAFT') NULL DEFAULT 'DRAFT' AFTER `license`");
        DB::statement("ALTER TABLE `research` ADD COLUMN `license_type` enum('NO_LICENCE','CC_LICENSE','CUSTOM') NULL AFTER `rss_feed`");
        DB::statement("ALTER TABLE `research` ADD COLUMN `creator_id`  int NULL AFTER `research_id`, ADD COLUMN `approved_by_id`  int NULL AFTER `creator_id`");
        DB::statement("ALTER TABLE `research` MODIFY COLUMN `publish_status` enum('PENDING','PUBLISHED','REJECTED','APPROVED','DRAFT') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'DRAFT' AFTER `license`");
        DB::statement("ALTER TABLE `research` ADD COLUMN `cover_graphic`  varchar(255) NULL DEFAULT default_cover.jpg AFTER `filename`, ADD COLUMN `duplicated_detected`  int NULL DEFAULT 0 AFTER `cover_graphic`");
        DB::statement("ALTER TABLE `research` ADD COLUMN `cover_graphic_type`  int NULL AFTER `cover_graphic`");
        DB::statement("ALTER TABLE `research` ADD COLUMN `publish_to_parent` tinyint NULL DEFAULT 0 AFTER `publish_status`");
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('research', function (Blueprint $table) {
            $table->dropColumn('license');
            $table->dropColumn('publish_status');
            $table->dropColumn('license_type');
            $table->dropColumn('creator_id');
            $table->dropColumn('approved_by_id');
            $table->dropColumn('cover_graphic');
            $table->dropColumn('duplicated_detected');
            $table->dropColumn('cover_graphic_type');
            $table->dropColumn('publish_to_parent');
        });
    }
}
