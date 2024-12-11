var _ = require('lodash'),
    h = require('./helpers'),
    query = h.getQuery()
;

module.exports = {
    keywords: ('undefined' !== typeof(query['keywords'])) ? query['keywords'] : '',
    coverage: ('undefined' !== typeof(query['coverage'])) ? query['coverage'] : '',
    copyrights: _.mapValues(Data.Copyrights, (value, key) => {
        return _.contains(query['copyright[]'], key) ? true : false;
    }),
    doctypes: _.mapValues(Data.Doctypes, (value, key) => {
        return _.contains(query['doctype[]'], key) ? true : false;
    }),
    issueAreas: _.mapValues(Data.IssueAreas, (value, key) => {
        return _.contains(query['issue_area[]'], key) ? true : false;
    }),
    languages:  _.mapValues(Data.Languages, (value, key) => {
        return _.contains(query['language[]'], key) ? true : false;
    }),
    pubdate: {
        start: {
            year: ('undefined' !== typeof(query['pubdate_start_year'])) ? query['pubdate_start_year'] : window.Data.earliestPubdate.year,
            month: ('undefined' !== typeof(query['pubdate_start_month'])) ? query['pubdate_start_month'] : window.Data.earliestPubdate.month,
            day: ('undefined' !== typeof(query['pubdate_start_day'])) ? query['pubdate_start_day'] : window.Data.earliestPubdate.day,
        },
        end: {
            year: ('undefined' !== typeof(query['pubdate_end_year'])) ? query['pubdate_end_year'] : window.Data.now.year,
            month: ('undefined' !== typeof(query['pubdate_end_month'])) ? query['pubdate_end_month'] : window.Data.now.month,
            day: ('undefined' !== typeof(query['pubdate_end_day'])) ? query['pubdate_end_day'] : window.Data.now.day,
        },
    },
    resources: [],
    related:{
        authors:                {items:[], currentPage:1},
        special_collections:    {items:[], currentPage:1},
        publishers:             {items:[], currentPage:1},
        funders:                {items:[], currentPage:1},
    },
    author: ('undefined' !== typeof(query['author'])) ? query['author'] : '',
    funder: ('undefined' !== typeof(query['funder'])) ? query['funder'] : '',
    publisher: ('undefined' !== typeof(query['publisher'])) ? query['publisher'] : '',
    sort: ('undefined' !== typeof(query['sort'])) ? query['sort'] : '',
    loadRelated: true,
    perPage: 12,
    currentPage: 1,
    numFound: 0,
    query: query,
    showFilters: false,
    currentView: '',
    currentRelatedView: 'overview',
    relatedPerPage: 6,
    searchLoading: false,
    show: {
        doctypes: false,
        issueAreas: false,
        languages: false,
    },
};
