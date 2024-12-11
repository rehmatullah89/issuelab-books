<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Auth;
use DB;

class AuthHelper
{
    public static function isKcAdmin()
    {
        $result = DB::table('kc_administrators')->where('user_id', '=', Auth::user()->id)->first();
        
        if($result)
            return true;
        else 
            return false;
    }
}
