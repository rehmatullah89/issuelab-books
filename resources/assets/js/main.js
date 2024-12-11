var $ = require('jquery'),
    _ = require('lodash')
;

require('./polyfills');
require('bootstrap');

var App = {
    common: require('./modules/common'),
    antispam: require('./modules/antispam.js'),
    dateRangeFilter: require('./modules/date-range-filter'),
    dateTimePicker: require('./modules/date-time-picker'),
    deleteModal: require('./modules/delete-modal'),
    multiSelect: require('./modules/multi-select'),
    overlayModal: require('./modules/overlay-modal'),
    repeater: require('./modules/repeater'),
    searchInput: require('./modules/search-input'),
    typeahead: require('./modules/typeahead'),
    resourceSearch: require('./modules/resource-search'),
    kcResourceSearch: require('./modules/kc-resource-search'),
};

var Router = {
    fire: (module, args) => {
        var namespace = App;  // indicate your obj literal namespace here

        if (module !== '' && namespace[module] && typeof namespace[module] == 'function'){
            // call a new instance of the module, which should be the name of a class
            new namespace[module](args);
        }
    },

    loadModules: () => {
        var modules = document.body.getAttribute('data-modules');

        // hit up common first.
        Router.fire('common');

        // do all the modules.
        if (modules) {
            $.each(modules.split(/\s+/), (i,module) => {
                module = _.camelCase(module);
                Router.fire(module);
            });
        }
    }
};

// kick it all off here
$(document).ready(Router.loadModules);
