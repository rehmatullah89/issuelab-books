var Vue = require('vue'),
    resourceSearchMixin = require('../mixins/resource-search'),
    $ = require('jquery'),
    _ = require('lodash'),
    h = require('./helpers'),
    query = h.getQuery()
;

class ResourceSearch
{
    constructor()
    {
        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-CSRF-TOKEN', document.querySelector('#token').getAttribute('value'));
            }
        });

        new Vue({
            el: '#resource-search',
            data: require("./resource-search-data"),
            mixins: [resourceSearchMixin],
        });

    }
}

module.exports = ResourceSearch;
