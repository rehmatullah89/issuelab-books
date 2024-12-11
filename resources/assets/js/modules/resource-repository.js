var URI = require('URIjs'),
    url = new URI(window.location),
    h = require('./helpers')
;

module.exports = {
    url: function() {
        let subdomain = url.subdomain(),
            select
        ;

        if ('undefined' === typeof subdomain || !subdomain || 'www' === subdomain) {
            select = 'select';
        } else {
            select = 'select-issuelab';
        }

        return 'https://fconline.foundationcenter.org:8082/issuelab/' + select + '?';
    },
    query: h.getQuery(),
    buildRequest: function(currentPage, perPage, externalFilters, loadFacets) {
        this.query = h.getQuery();
        var params = {
            'wt'      : 'json',
            'defType' : 'edismax',
            'rows'    : perPage,
            'start'   : (currentPage - 1) * perPage,
            'fl'      : 'title,date_published,publisher,cover_graphic,id',
            'fq'      : this.buildFilters( externalFilters ),
            'sort'    : this.sort(),
            'q'       : this.keywords()
        };

        if(loadFacets){
            params['facet']             = true;
            params['facet.field']       = ['author', 'subdomain', 'publisher_ss', 'funder_ss'];
            params['facet.mincount']    = 1;
            params['facet.limit']       = 2000;
        }

        var queryString = [];
        for(var i in params){
            var param = params[i];
            if(typeof param == "object"){
                for(var j in param){
                    queryString.push( i + "=" + param[j] );
                }
            }else{
                queryString.push( i + "=" + params[i] );
            }
        }

        return this.url() + queryString.join("&");
    },
    buildFilters: function( externalFilters ) {
        return this.addExternalFilters([
                this.copyright(),
                this.coverage(),
                this.languageCodes(),
                this.pubdates(),
                this.pubtypes(),
                this.subjects(),
                this.author(),
                this.funder(),
                this.publisher(),
            ], externalFilters )
            .filter(function(value) {
                // Remove empty values from our filters
                return value ? value : null;
            })
            .join(' AND ')
        ;
    },
    addExternalFilters: function( filters, externalFilters ){
        for(var key in externalFilters){
            let value = externalFilters[key];
            filters.push( `${key}:"${value}"` );
        }
        return filters;
    },
    copyright: function() {
        var copyright = this.query['copyright[]'];
        if ('undefined' === copyright || !copyright) return;

        return 'rights:(Creative*)';
    },
    coverage: function() {
        var coverage = this.query['coverage'];
        if ('undefined' === typeof(coverage) || !coverage) return;

        return `coverage:"${coverage}"`
    },
    author: function() {
        var author = this.query['author'];
        if ('undefined' === typeof(author) || !author) return;

        return `author:"${author}"`
    },
    funder: function() {
        var funder = this.query['funder'];
        if ('undefined' === typeof(funder) || !funder) return;

        return `funder:"${funder}"`
    },
    publisher: function() {
        var publisher = this.query['publisher'];
        if ('undefined' === typeof(publisher) || !publisher) return;

        return `publisher:"${publisher}"`
    },
    keywords: function() {
        var keywords = this.query['keywords'];

        return ('undefined' !== typeof(keywords) && '' !== keywords) ? keywords : '*.*';
    },
    languageCodes: function() {
        var languages = this.query['language[]'];
        if ('undefined' === typeof(languages) || !languages) return;

        let languageFilter = h.toArray(languages).join(' OR ');

        return `language_code:(${languageFilter})`;
    },
    pubdates: function() {
        var start = this.defaultDate('pubdate_start'),
            end = this.defaultDate('pubdate_end')
        ;

        return `date_published:[${start} TO ${end}]`;
    },
    defaultDate: function(prefix) {
        var dateParts = ['year', 'month', 'day'];

        for (let part of dateParts) {
            let filter = `${prefix}_${part}`;

            if ('undefined' === typeof this.query[filter] || !this.query[filter]) {
                return '*';
            }
        }

        return this.query[`${prefix}_year`] + '-' + this.query[`${prefix}_month`] + '-' + this.query[`${prefix}_day`];
    },
    pubtypes: function() {
        var doctypes = this.query['doctype[]'];
        if ('undefined' === typeof(doctypes) || !doctypes) return;

        let doctypeFilter = h.toArray(doctypes).map( function(value) {
                let name = window.Data.Doctypes[value];

                return `"${name}"`;
            }).join(' OR ');
        return `pubtype:(${doctypeFilter})`;
    },
    subjects: function() {
        var issueAreas = this.query['issue_area[]'];
        if ('undefined' === typeof(issueAreas) || !issueAreas) return;

        var issueAreaFilter = h.toArray(issueAreas).map( function(value) {
                let name = window.Data.IssueAreas[value];
                return `"${name}"`;
            }).join(' AND ');

        return `subject:(${issueAreaFilter})`;
    },
    sort: function() {
        var sort = this.query['sort'];
        if ('undefined' === typeof(sort)) return;

        return sort;
    }
};
