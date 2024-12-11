var Modernizr = require('modernizr');

Modernizr.on('history', (pass) => {
    if (!pass) {
        require('html5-history-api');
    }
});
