var Vue = require('vue'),
    $ = require('jquery'),
    _ = require('lodash'),
    h = require('../modules/helpers'),
    URI = require('URIjs'),
    url = new URI(window.location),
    query = h.getQuery(),
    Resource = require('../modules/resource-repository'),
    DateRangeFilter = require('../modules/date-range-filter')
;

module.exports = {
    computed:{
        doctypesCount: function() {
            return this.countFilter('doctypes');
        },
        issueAreasCount: function() {
            return this.countFilter('issueAreas');
        },
        languagesCount: function() {
            return this.countFilter('languages');
        },
        relatedNumFound: function(){
            return this.related.authors.items.length +
                    this.related.special_collections.items.length +
                    this.related.publishers.items.length +
                    this.related.funders.items.length;
        },
        relatedAuthorsPaged:function(){
            var authors = this.getRelatedPageItems( this.related.authors, 'authors' );
            var authorNames = _.map( authors, (author)=>{ return author.name });

            this.loadRelatedItemTitles( authors, 'author' );

            this.loadRelatedItemsData('/search/authors', { fullname: authorNames }, ( data ) => {
                var author = _.find( this.related.authors.items, {name: data.fullname });
                if ('undefined' !== typeof author) {
                   author.url = '/authors/profile/'+data.identifier;
                }
            });

            return authors;
        },
        relatedPublishersPaged:function(){
            var publishers = this.getRelatedPageItems( this.related.publishers, 'publishers' );
            var publisherNames = _.map( publishers, (publisher)=>{ return publisher.name });

            this.loadRelatedItemTitles( publishers, 'publisher' );

            this.loadRelatedItemsData('/search/organizations', { organization: publisherNames },function( data ){
                var publisher = _.find( this.related.publishers.items, {name: data.organization });
                if ('undefined' !== typeof publisher) {
                    publisher.description = data.mission_statement;
                    publisher.url = '/publishers/profile/'+data.identifier;
                }
            });

            return publishers;
        },
        relatedSpecialCollectionsPaged:function(){
            var special_collections = this.getRelatedPageItems( this.related.special_collections, 'special_collections' );
            var scNames = _.map( special_collections, (sc)=>{ return sc.name });

            this.loadRelatedItemTitles( special_collections, 'subdomain' );

            this.loadRelatedItemsData('/search/knowledge-centers', { subdomain: scNames },function( data ){
                var sc = _.find( this.related.special_collections.items, { name: data.subdomain });
                if ('undefined' !== typeof sc) {
                    sc.description = data.description;
                    sc.name = data.title;
                    sc.url  = 'http://'+data.subdomain+'.issuelab.org/';
                }
            });

            return special_collections;
        },
        relatedFundersPaged:function(){
            var funders = this.getRelatedPageItems( this.related.funders, 'funders' );
            var funderNames = _.map( funders, (funder)=>{ return funder.name });

            this.loadRelatedItemTitles( funders, 'funder' );

            this.loadRelatedItemsData('/search/organizations', { organization: funderNames },function( data ){
                var funder = _.find( this.related.funders.items, {name: data.funder });
                if ('undefined' !== typeof funder) {
                    funder.url = '/funders/profile/'+data.identifier;
                }
            });

            return funders;
        }
    },
    created: function() {
        // Init jQuery related items here, when existing dom elements become available
        $('.vue-loading').removeClass('vue-loading');
        new DateRangeFilter;
    },
    ready: function() {
        this.resetRelated();
        this.resolveView();
        this.buildPath();
        this.setEvents();
        this.$emit('search');
    },
    events: {
        pageChange: function(){
            this.buildPath();
        },
        search: function() {
            // console.log(Resource.buildRequest(this.currentPage, this.perPage));
            // console.log(this.buildRecord());

            // Save search record
            if (this.isFiltered()) {
                $.post(
                    '/search/records/create',
                    this.buildRecord()
                ).fail(function(e, status, statusText) {
                    console.log(e, status, statusText);
                });
            }

            this.searchLoading = true;

            $.ajax({
                url: Resource.buildRequest(this.currentPage, this.perPage, this.getMainQueryFilters(), this.shouldGetFacets() ),
                dataType: 'jsonp',
                jsonp: 'json.wrf',
                success: (data, status, request) => {

                    console.log(data);

                    if ('undefined' !== typeof(data.response.docs)) {
                        _.forEach(data.response.docs, (doc) => {
                            this.resources.push(doc);
                        });
                    }
                    this.$set('numFound', data.response.numFound);

                    if( typeof(data.facet_counts) !== 'undefined' && this.loadRelated == true ){
                        let facetFields = data.facet_counts.facet_fields;

                        if ('undefined' !== typeof( facetFields.author )) {
                            this.setupRelatedItems( facetFields.author, 'authors' );
                        }

                        if ('undefined' !== typeof( facetFields.subdomain )) {
                            this.setupRelatedItems( facetFields.subdomain, 'special_collections', window.Data.specialCollections );
                        }

                        if ('undefined' !== typeof( facetFields.publisher_ss )) {
                            this.setupRelatedItems( facetFields.publisher_ss, 'publishers' );
                        }

                        if ('undefined' !== typeof( facetFields.funder_ss )) {
                            this.setupRelatedItems( facetFields.funder_ss, 'funders' );
                        }

                        this.loadRelated = false;
                    }

                    this.searchLoading = false;
                }
            });
        }
    },
    components: {
        'modal': require('../components/modal'),
        'resource': {
            template: '#resource-template',
            props: {
                class: {
                    type: String,
                    default:"col-xs-4"
                }
            }
        },
        'related': {
            template: '#related-template',
            props: {
                class: {
                    type: String,
                    default:"col-xs-6"
                }
            }
        },
        'pagination': require('../components/pagination'),
    },
    directives: {
        'date': require('../directives/date'),
        'select': require('../directives/select'),
    },
    filters: {
        'date': require('../filters/date'),
        'truncate': require('../filters/truncate')
    },
    methods: {
        getMainQueryFilters: function(){
            return {};
        },
        shouldGetFacets: function(){
            return this.isFiltered() && this.loadRelated;
        },
        getRelatedPageItems: function( relatedObject, slug ){
            if(this.currentRelatedView == slug){
                var offset = (relatedObject.currentPage-1) * this.relatedPerPage;
                var items = relatedObject.items.slice( offset , offset+this.relatedPerPage );
            }else{
                var items = relatedObject.items.slice(0,2);
            }
            return items;
        },

        setupRelatedItems: function( items, type, filter ){
            for(var i=0; i<items.length; i+=2){

                if('undefined' != typeof(filter) && !_.contains(filter,items[i]) ) continue;

                this.related[ type ].items.push({
                    name        : items[i],
                    occurrences : items[i+1],
                    resources   : [],
                    loaded      : 0,
                    url         : "#"
                });
            }
        },

        loadRelatedItemsData: function( url, rdata, callback ){
            var self = this;
            $.get( url, rdata, function(data, status, request) {
                if(data && data.length){
                    _.forEach(data, (itemData) => {
                        callback.apply(self, [itemData]);
                    });
                }
            }).fail(function(e, status, statusText) {
                console.log(e, status, statusText);
            });
        },

        loadRelatedItemTitles: function( items, filterName ){
            _.each( items, ( item ) => {
                if(item.loaded == 0){
                    var filter = {};
                    filter[ filterName ] = item.name;
                    this.loadSingleRelatedItemTitles( item, filter );
                    item.loaded = 1;
                }
            } );
        },

        loadSingleRelatedItemTitles: function( item , requestFilter ){
            $.ajax({
                url: Resource.buildRequest(1, 2, requestFilter ),
                dataType: 'jsonp',
                jsonp: 'json.wrf',
                success: (data, status, request) => {
                    if ('undefined' !== typeof(data.response.docs)) {
                        _.forEach(data.response.docs, (doc) => {
                            item.resources.push(doc);
                        });
                        item.loaded = 2;
                    }
                }
            });
        },

        setEvents: function(){
            window.onpopstate = (event) => {

                this.resolveView();

                console.log("PopState", window.location.href, event);

                if(this.currentView == 'titles'){ // !_.isEqual(newQuery,this.query)
                    this.setSearchFilters( h.getQuery() );

                    this.resetRelated();
                    this.resources = [];
                    this.$emit('search');
                }
            };

            this.$watch('sort',this.sortChange);
            this.$watch('currentPage', (event) => {
                this.resources = [];
                this.$emit('search');
            });
        },

        sortChange: function(){
            this.buildPath();

            this.resources = [];
            this.$emit('search');
        },

        switchView: function(view){
            this.currentView = view;
            this.buildPath();
        },

        switchRelatedView: function( relatedGroupName ){
            this.currentRelatedView = relatedGroupName;
            this.buildPath();
        },

        resolveView: function(){
            var parts = _.filter( window.location.pathname.split("/"), function(a){ return a != "" });
            if(parts.length >= 2 && parts[1] == "related"){
                this.currentView = 'related';
                if(parts.length >= 3){
                    this.currentRelatedView = parts[2];
                    if(parts.length >= 4){
                        this.related[ this.currentRelatedView ].currentPage = parseInt(parts[3]);
                    }else{
                        this.related[ this.currentRelatedView ].currentPage = 1;
                    }
                }else{
                    this.currentRelatedView = "overview";
                }
            }else{
                this.currentView = 'titles';

                if(parts.length >= 2){
                    this.currentPage = parseInt(parts[1]);
                }else{
                    this.currentPage = 1;
                }
            }
        },

        buildPath: function(){
            var path = [''];

            path.push('search');

            if( this.currentView != 'titles' ){

                path.push(this.currentView);

                if( this.currentRelatedView != "overview" ){

                    path.push(this.currentRelatedView);

                    let relatedViewPage = this.related[ this.currentRelatedView ].currentPage;
                    if(relatedViewPage > 1){
                        path.push(relatedViewPage);
                    }

                }
            }else{
                if(this.currentPage != 1){
                    path.push(this.currentPage);
                }
            }

            // Pass only the query string to pushState() so that it's easier to parse hashchange for IE
            history.pushState(null, '', path.join('/') + "?" + url.query(this.buildQuery()).query() );
            this.query = h.getQuery();
        },

        resetRelated: function(){
            this.loadRelated = true;
            var relatedData = ['authors', 'publishers', 'special_collections', 'funders'];
            for(var i in relatedData){
                this.related[ relatedData[i] ].items = [];
                this.related[ relatedData[i] ].currentPage = 1;
            }
        },

        submit: function(e) {
            e.preventDefault();
            this.resetModals();
            this.resetRelated();
            this.resources = [];
            this.currentPage = 1;
            this.buildPath();
            this.$emit('search');
        },
        nextPage: function() {
            this.currentPage += 1;
            // // history.pushState(null, '', url.query(this.buildQuery()));
            // this.query = url.query(true);
            this.$emit('search');
        },
        buildQuery: function() {
            return {
                'copyright[]': _.map(this.copyrights, (value, key) => {
                    if (true === value) { return key; }
                }),
                'coverage': this.coverage,
                'doctype[]': _.map(this.doctypes, (value, key) => {
                    if (true === value) { return key; }
                }),
                'issue_area[]': _.map(this.issueAreas, (value, key) => {
                    if (true === value) { return key; }
                }),
                'keywords': this.keywords,
                'language[]': _.map(this.languages, (value, key) => {
                    if (true === value) { return key; }
                }),
                'pubdate_start_year': this.pubdate.start.year,
                'pubdate_start_month': this.pubdate.start.month,
                'pubdate_start_day': this.pubdate.start.day,
                'pubdate_end_year': this.pubdate.end.year,
                'pubdate_end_month': this.pubdate.end.month,
                'pubdate_end_day': this.pubdate.end.day,
                'sort': this.sort,
                'author': this.author,
                'funder': this.funder,
                'publisher': this.publisher,
            }
        },
        buildRecord: function() {
            return {
                keywords: this.query['keywords'],
                date_published_start: this.query['pubdate_start_year'] + '-' + this.query['pubdate_start_month'] + '-' + this.query['pubdate_start_day'],
                date_published_end: this.query['pubdate_end_year'] + '-' + this.query['pubdate_end_month'] + '-' + this.query['pubdate_end_day'],
                doctypes: this.query['doctype[]'],
                issue_areas: this.query['issue_area[]'],
                languages: this.query['language[]'],
                coverage: this.query['coverage'],
                copyrights: this.query['copyright[]'],
                sort: this.query['sort'],
            };
        },
        reset: function() {
            let filters = [
                'copyrights',
                'coverage',
                'doctypes',
                'issueAreas',
                'keywords',
                'languages',
                'pubdate',
                'author',
                'funder',
                'publisher'
            ];

            _.each(filters, (filter) => {
                this.resetFilter(filter);
            });
        },
        resetFilter: function(filter) {
            if ('pubdate' === filter) {
                this[filter] = {
                    start: {
                        year: window.Data.earliestPubdate.year,
                        month: window.Data.earliestPubdate.month,
                        day: window.Data.earliestPubdate.day,
                    },
                    end: {
                        year: window.Data.now.year,
                        month: window.Data.now.month,
                        day: window.Data.now.day,
                    },
                };
                // Compensate for vuejs querk that displays select value as whatever option has "selected" markup, even when the modal data is updated
                this.setSelected('pubdate_start_year', window.Data.earliestPubdate.year);
                this.setSelected('pubdate_start_month', window.Data.earliestPubdate.month);
                this.setSelected('pubdate_start_day', window.Data.earliestPubdate.day);
                this.setSelected('pubdate_end_year', window.Data.now.year);
                this.setSelected('pubdate_end_month', window.Data.now.month);
                this.setSelected('pubdate_end_day', window.Data.now.day);
            } else if (null !== this[filter] && 'object' === typeof this[filter]) {
                this[filter] = _.mapValues(this[filter], (value, key) => {
                    return false;
                });
            } else {
                this[filter] = '';
            }
        },
        setSelected: function(id, value) {
            $(document.getElementById(id)).find('option').each((i, el) => {
                let $el = $(el);
                $el.removeAttr('selected');
                if (value == $el.attr('value')) {
                    $el.attr('selected', 'selected');
                }
            });
        },
        setSearchFilters: function( data ) {
            this.keywords = ('undefined' !== typeof(data['keywords'])) ? data['keywords'] : '';
            this.coverage = ('undefined' !== typeof(data['coverage'])) ? data['coverage'] : '';
            this.copyrights = _.mapValues(this.copyrights, (value, key) => {
                return _.contains(data['copyright[]'], key) ? true : false;
            });
            this.doctypes = _.mapValues(this.doctypes, (value, key) => {
                return _.contains(data['doctype[]'], key) ? true : false;
            });
            this.issueAreas = _.mapValues(this.issueAreas, (value, key) => {
                return _.contains(data['issue_area[]'], key) ? true : false;
            });
            this.languages =  _.mapValues(this.languages, (value, key) => {
                return _.contains(data['language[]'], key) ? true : false;
            });
            this.pubdate = {
                start: {
                    year: ('undefined' !== typeof(data['pubdate_start_year'])) ? data['pubdate_start_year'] : window.Data.earliestPubdate.year,
                    month: ('undefined' !== typeof(data['pubdate_start_month'])) ? data['pubdate_start_month'] : window.Data.earliestPubdate.month,
                    day: ('undefined' !== typeof(data['pubdate_start_day'])) ? data['pubdate_start_day'] : window.Data.earliestPubdate.day,
                },
                end: {
                    year: ('undefined' !== typeof(data['pubdate_end_year'])) ? data['pubdate_end_year'] : window.Data.now.year,
                    month: ('undefined' !== typeof(data['pubdate_end_month'])) ? data['pubdate_end_month'] : window.Data.now.month,
                    day: ('undefined' !== typeof(data['pubdate_end_day'])) ? data['pubdate_end_day'] : window.Data.now.day,
                },
            }
            this.sort = ('undefined' !== typeof(data['sort'])) ? data['sort'] : '';
            this.author = ('undefined' !== typeof(data['author'])) ? data['author'] : '';
            this.funder = ('undefined' !== typeof(data['funder'])) ? data['funder'] : '';
            this.publisher = ('undefined' !== typeof(data['publisher'])) ? data['publisher'] : '';
        },
        isFiltered: function() {
            var filtered = false,
                query = this.query
            ;

            for (var filter in query) {
                if(query.hasOwnProperty(filter) && 'undefined' !== typeof(query[filter]) && query[filter] && 'sort' !== filter) {
                    filtered = true;
                    continue;
                }
            }

            return filtered;
        },
        resetModals: function() {
            _.each(this.show, function(value, key, collection) {
                collection[key] = false;
            });
        },
        countFilter: function(filter) {
            let count = 0;
            _.each(this[filter], (value, key, collection) => {
                if (true === value) {
                    count++;
                }
            });
            return count > 0 ? `(${count})` : '';
        }
    }
}
