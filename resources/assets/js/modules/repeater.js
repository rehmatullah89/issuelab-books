var $ = require('jquery');
require('repeater');

class Repeater
{
    constructor()
    {
        let $repeater = $('.form-group.repeater');
        $repeater.repeater();
    }
}

module.exports = Repeater;
