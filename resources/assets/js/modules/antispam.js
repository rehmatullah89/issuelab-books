var $ = require('jquery');

class Honeypot
{
    constructor()
    {
        $('input[type=submit]').removeAttr('disabled');
    }
}

module.exports = Honeypot;
