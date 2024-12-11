<?php

namespace App\Traits;

trait MktimeTimestamps
{
    /**
     * Set date_added_mktime whenever date_added is updated
     *
     * @param Carbon\Carbon $date
     */
    public function setDateAddedAttribute($date) {
        $this->attributes['date_added'] = $date;
        $this->attributes['date_added_mktime'] = mktime($date->hour, $date->minute, $date->second, $date->month, $date->day, $date->year);
    }

    /**
     * Set date_modified_mktime whenever date_modified is updated
     *
     * @param Carbon\Carbon $date
     */
    public function setDateModifiedAttribute($date) {
        $this->attributes['date_modified'] = $date;
        $this->attributes['date_modified_mktime'] = mktime($date->hour, $date->minute, $date->second, $date->month, $date->day, $date->year);
    }
}
