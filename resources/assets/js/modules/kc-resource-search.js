var Vue = require('vue'),
    resourceSearchMixin = require('../mixins/resource-search'),
    $ = require('jquery'),
    _ = require('lodash'),
    h = require('./helpers'),
    URI = require('URIjs'),
    url = new URI(window.location),
    query = h.getQuery()
;

class KcResourceSearch
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
            methods:{
                buildQuery: function() {
                    var params = {};

                    if(Data.filters.copyrights){
                        params['copyright[]'] = _.map(this.copyrights, (value, key) => {
                            if (true === value) { return key; }
                        });
                    }
                    if(Data.filters.coverage){
                        params['coverage'] = this.coverage;
                    }
                    if(Data.filters.doctypes){
                        params['doctype[]'] = _.map(this.doctypes, (value, key) => {
                            if (true === value) { return key; }
                        });
                    }
                    if(Data.filters.issue_areas){
                        params['issue_area[]'] = _.map(this.issueAreas, (value, key) => {
                            if (true === value) { return key; }
                        });
                    }
                    if(Data.filters.keywords){
                        params['keywords'] = this.keywords;
                    }
                    if(Data.filters.languages){
                        params['language[]'] = _.map(this.languages, (value, key) => {
                            if (true === value) { return key; }
                        });
                    }
                    if(Data.filters.dates){
                        params['pubdate_start_year'] = this.pubdate.start.year;
                        params['pubdate_start_month'] = this.pubdate.start.month;
                        params['pubdate_start_day'] = this.pubdate.start.day;
                        params['pubdate_end_year'] = this.pubdate.end.year;
                        params['pubdate_end_month'] = this.pubdate.end.month;
                        params['pubdate_end_day'] = this.pubdate.end.day;
                    }
                    params['sort'] = this.sort;
                    params['author'] = this.author;
                    params['funder'] = this.funder;
                    params['publisher'] = this.publisher;

                    return params;
                },
                shouldGetFacets: function(){
                    return false;
                },
                getMainQueryFilters:function(){
                    var filters = {};
                    filters["client_include_"+Data.subdomain] = 1;
                    return filters;
                },
                resolveView: function(){
                    var parts = _.filter( window.location.pathname.split("/"), function(a){ return a != "" });

                    this.currentView = 'titles';

                    if(parts.length == 1){
                        this.currentPage = parseInt(parts[0]);
                    }else{
                        this.currentPage = 1;
                    }

                },

                buildPath: function(){
                    var path = [''];

                    path.push(this.currentPage);

                    // Pass only the query string to pushState() so that it's easier to parse hashchange for IE
                    history.pushState(null, '', path.join('/') + "?" + url.query(this.buildQuery()).query() );
                    this.query = h.getQuery();
                },
            },
            mixins: [resourceSearchMixin],
        });

    }
}

module.exports = KcResourceSearch;
