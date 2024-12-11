var $ = require('jquery'),
    _ = require('lodash')
;

class SearchInput
{
    constructor()
    {
        var $inputs = $('input.search');

        this.init($inputs);
    }

    init($inputs)
    {
        $inputs.each((i, el) => {
            let $el = $(el),
                $input,
                $closeIcon
            ;

            if ($el.hasClass('typeahead')) {
                // Wait until typeahead field is rendered to init elements
                $el.on('typeahead:ready', (e) => {
                    $input = $(e.target);
                    $closeIcon = $input.parents('.form-group').find('.glyphicon-remove');
                    this.renderCloseIcon($input, $closeIcon);
                    this.registerEvents($input, $closeIcon);
                });
            } else {
                $input = $el;
                $closeIcon = $input.siblings('.glyphicon-remove');
                this.renderCloseIcon($input, $closeIcon);
                this.registerEvents($input, $closeIcon);
            }
        });
    }

    registerEvents($input, $closeIcon)
    {
        $input.on('keyup', _.debounce( (e) => {
                this.renderCloseIcon($input, $closeIcon);
            },
            200,
            {
                'leading': true,
                'trailing': false
            })
        );

        $closeIcon.on('click', (e) => {
            e.preventDefault;
            this.clearInput($input, $closeIcon);
        });
    }

    renderCloseIcon($input, $closeIcon)
    {
        if('' === $input.val()) {
            this.hide($closeIcon);
        } else {
            this.show($closeIcon);
        }
    }

    clearInput($input, $closeIcon)
    {
        $input.val('').trigger('input').focus();
        this.hide($closeIcon);
    }

    hide($el){
        $el.addClass('hidden');
    }

    show($el)
    {
        $el.removeClass('hidden');
    }
}

module.exports = SearchInput
