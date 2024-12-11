var _ = require('lodash'),
    URI = require('URIjs')
;

module.exports = {
    toArray: function(value) {
        return _.isArray(value) ? value : [value];
    },
    getQuery: function() {
        // For browsers that don't support pushState, we need to grab the query string from after the `#` in the url
        if (window.location.hash) {
            let queryString = new URI(window.location).fragment();
            queryString = queryString.substr(queryString.indexOf('?'));
            return new URI(queryString).query(true);
        } else {
            return new URI(window.location).query(true);
        }
    }
}
