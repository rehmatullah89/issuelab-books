<?php

/*
 * app/validators.php
 */

Validator::extend('alpha_spaces', function($attribute, $value) {
            return preg_match('^\S+\w{8,32}\S{1,}', $value);
        });
