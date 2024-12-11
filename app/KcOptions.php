<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class KcOptions extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'kc_options';

    /**
     * Indicates if the model should be timestamped.
     * @var bool
     */
    public $timestamps = true;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['resource_metadata_id','custom_label', 'show_in_search', 'is_expanded', 'show_in_resourse', 'enable_kc_opt'];
    
    /**
     * Indicates if the model should be timestamped.
     * @param int $kcid Knowledge center
     */
    public function getKcOptionsWithResourceMetaData($kcId = 0)
    {
        return DB::table('kc_options')
                        ->join('resource_metadata', 'kc_options.resource_metadata_id', '=', 'resource_metadata.id')
                        ->select('kc_options.*', 'resource_metadata.key')
                        ->where('kc_options.kc_id', '=', $kcId)
                        ->get();
    }

}
