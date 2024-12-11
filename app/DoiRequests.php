<?php

namespace App;

class DoiRequests extends BaseModel
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'doi_requests';

    /**
     * The "booting" method of the model.
     *
     * Register handler functions that responding to model events here. Be sure to call the parent's boot method;
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        // Set priority higher than `0` so that this runs before validation
        static::saving(
            function ($model) {
                $model->sluggify();
            },
            $priority = 10
        );
    }
}
