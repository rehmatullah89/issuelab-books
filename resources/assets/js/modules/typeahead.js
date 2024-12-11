var $ = require('jquery'),
    Modernizr = require('modernizr'),
    Bloodhound = require('bloodhound')
;
require('typeahead');

class Typeahead
{
    constructor()
    {
        let $typeaheads = $('.typeahead');

        this.datasources = this.initDatasources($typeaheads);
        this.init($typeaheads);
        this.initRepeater();
    }

    init($elements)
    {
        $elements.each((i, el) => {
            let $el = $(el),
                data = this.getData($el)
            ;

            $el.typeahead({
                minLength: 3,
                highlight: true
            },
            {
                name: data.name,
                source: this.datasources[data.name],
            });

            this.emitReadyEvent($el);
            this.registerEvents($el);
        });
    }

    initDatasources($elements) {
        let datasources = {};

        $elements.each((i, el) => {
            let $el = $(el),
                data = this.getData($el)
            ;

            if ('undefined' === typeof(datasources[name]) || !datasources[name]) {
                datasources[data.name] = this.initBloodhound(data.local, data.remote);
            }
        });

        return datasources;
    }

    initBloodhound(local, remote)
    {
        let settings = {
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            local: ('undefined' !== typeof(local) && local) ? window.Data[local] : [],
        };

        if ('undefined' !== typeof(remote) && remote) {
            settings.remote = {
                url: `${remote}%QUERY`,
                wildcard: '%QUERY',
            }
        }

        return new Bloodhound(settings);
    }

    getData($element)
    {
        let localData = $element.data('local'),
            remoteData = $element.data('remote'),
            dataName = $element.data('name'),
            name
        ;

        if ('undefined' !== typeof(dataName) && dataName) {
            name = dataName;
        } else if ('undefined' !== typeof(localData) && localData) {
            name = localData;
        } else {
            throw 'error: data-name property is required for typeahead module';
        }

        return {
            name: name,
            local: localData,
            remote: remoteData,
        };
    }

    registerEvents($el)
    {
        $el.on('typeahead:render', (e) => {
            $(e.target).addClass('with-suggestions');
        });

        $el.on('typeahead:select', (e, suggestion) => {
            $(e.target).trigger('input');
        });

        $el.on('typeahead:close', (e) => {
            $(e.target).removeClass('with-suggestions');
        });

        $el.closest('[data-repeater-item]').find('[data-repeater-delete]').on('click', (e) => {
            $($el).typeahead('destroy');
        });
    }

    initRepeater()
    {
        if (!$('.form-group.repeater')) return;

        // Delegate this event so that it fires after the new repeater field is created
        $(document).on('click', '[data-repeater-create]', (e) => {
            let $newTypeahead = $(e.target).parents('.form-group.repeater').find('.typeahead').last();
            this.init($newTypeahead);
            $newTypeahead.focus();
        });
    }

    emitReadyEvent($elements)
    {
        Modernizr.on('mutationobserver', function(pass) {
            if (pass) {
                // typeahead library doesn't emit a ready event, so we do this with a MutationObserver
                $elements.each((i, el) => {
                    let ready = false,
                        $el = $(el),
                        observer = new window.MutationObserver((mutations) => {
                            mutations.forEach(function(mutation) {
                                if ('attributes' === mutation.type
                                    && false === ready
                                    && $el.hasClass('tt-input')
                                ) {
                                    ready = true;
                                    $el.trigger('typeahead:ready');
                                }
                            });
                        })
                    ;

                    observer.observe(el, {
                        attributes: true,
                        childList: true,
                        characterData: true
                    });

                    $el.on('typeahead:ready', (e) => {
                        observer.disconnect();
                    });
                });
            }
        });
    }
}

module.exports = Typeahead;
