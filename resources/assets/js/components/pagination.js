var _ = require('lodash');

module.exports = {
    template: '<nav>' +
            '<ul class="pagination">' +
                '<li v-if="boundaryLinks" v-class="disabled: currentPage === 1">' +
                    '<a href="#" aria-label="First" v-on="click: setPage(1, $event)">' +
                        '<span aria-hidden="true">{{{ firstText }}}</span>' +
                    '</a>' +
                '</li>' +
                '<li v-if="directionLinks" v-class="disabled: currentPage === 1">' +
                    '<a href="#" aria-label="Previous" v-on="click: setPage(currentPage - 1, $event)">' +
                        '<span aria-hidden="true">{{{ prevText }}}</span>' +
                    '</a>' +
                '</li>' +
                '<li v-class="active : page.value == this.currentPage" v-repeat="page in pages" v-on="click: setPage(page.value, $event)">' +
                    '<a href="#">{{ page.label }}</a>' +
                '</li>' +
                '<li v-if="directionLinks" v-class="disabled: currentPage === totalPages">' +
                    '<a href="#" aria-label="Next" v-on="click: setPage(currentPage + 1, $event)">' +
                        '<span aria-hidden="true">{{{ nextText }}}</span>' +
                    '</a>' +
                '</li>' +
                '<li v-if="boundaryLinks" v-class="disabled: currentPage === totalPages">' +
                    '<a href="#" aria-label="Last" v-on="click: setPage(totalPages, $event)">' +
                        '<span aria-hidden="true">{{{ lastText }}}</span>' +
                    '</a>' +
                '</li>' +
            '</ul>' +
        '</nav>',
    props: {
        currentPage: {
            type: Number,
            required: true,
            twoWay: true,
            default: 1,
        },
        totalItems: {
            type: Number,
            required: true,
        },
        perPage: {
            type: Number,
            default: 10,
        },
        // How many pages to display in the list before and after the current page
        displayRange: {
            type: Number,
            default: 3,
        },
        // Whether to display Prev/Next Buttons
        directionLinks: {
            type: Boolean,
            default: true,
        },
        nextText: {
            type: String,
            default: 'Next',
        },
        prevText: {
            type: String,
            default: 'Prev',
        },
        // Whether to display First/Last buttons
        boundaryLinks: {
            type: Boolean,
            default: true,
        },
        firstText: {
            type: String,
            default: 'First',
        },
        lastText: {
            type: String,
            default: 'Last',
        },
    },
    computed: {
        totalPages: function() {
            return Math.ceil(this.totalItems/this.perPage);
        },
        pages: function() {
            return this.paginate();
        },
        showDirectionLinks: function() {
            console.log(this.directionLinks);
            return this.directionLinks;
        }
    },
    methods:{
        paginate: function() {
            var threshold = 2 * this.displayRange + 3,
                lowerLimit = this.displayRange + 3,
                upperLimit = this.totalPages - this.displayRange - 2,
                displayFirst,
                displayLast,
                rangeLocation,
                rangeLabel = '...',
                pages = []
            ;

            // We need leading and/or trailing `...` b/c there are too many pages to display all at once
            if (this.totalPages > threshold) {

                // We're at the lower end of the page range: `1,2,3,4,5,...`
                if (this.currentPage < lowerLimit) {
                    rangeLocation = 'lower';
                    displayFirst = 1;
                    displayLast = threshold;

                // We're at the upper end of the page range: `...,24,25,26,27,28`
                } else if (upperLimit < this.currentPage) {
                    rangeLocation = 'upper';
                    displayFirst = this.totalPages - 2 * this.displayRange - 1;
                    displayLast = this.totalPages + 1;

                // We're somewhere in the middle of the page range: `...,11,12,13,14,...`
                } else {
                    rangeLocation = 'middle';
                    displayFirst = this.currentPage - this.displayRange;
                    displayLast = this.currentPage + this.displayRange + 1;
                }

            // We don't need any leading/trailing `...` because all the pages fit in the list
            } else {
                rangeLocation = 'n/a';
                displayFirst = 1;
                displayLast = this.totalPages + 1;
            }

            // Build page list

            // Leading `...`
            if ('middle' === rangeLocation || 'upper' === rangeLocation) {
                pages.push({label: rangeLabel, value: this.currentPage - this.displayRange - 2});
            }

            // Page list
            for (let pageNumber of _.range(displayFirst, displayLast)) {
                pages.push({label: pageNumber, value: pageNumber});
            }

            // Trailing `...`
            if ('lower' === rangeLocation || 'middle' === rangeLocation) {
                pages.push({label: rangeLabel, value: this.currentPage + this.displayRange + 2})
            }

            return pages;
        },
        setPage: function(page, e) {
            e.preventDefault();

            if (page == '' || page < 1 || page > this.totalPages) return;

            if (this.currentPage != page) {
                this.currentPage = page;
                this.$dispatch('pageChange');
            }
        },
    },
};
