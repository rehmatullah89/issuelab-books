var $ = require('jquery');
require('select2');

class MultiSelect
{
    constructor()
    {
        this.init( $('.select2') );
        this.initRepeater();
    }

    init($elements)
    {
        $elements.each((i, el) => {
            let $el         = $(el),
                allow_clear = $el.data('allow-clear'),
                placeholder = $el.data('placeholder')
            ;

            $el.select2({
              allowClear: allow_clear,
              placeholder: placeholder,
            });
        });
    }

    initRepeater()
    {
        if (!$('.form-group.repeater')) return;

        // Delegate this event so that it fires after the new repeater field is created
        $(document).on('click', '[data-repeater-create]', (e) => {
            let $newSelect2 = $(e.target).parents('.form-group.repeater').find('.select2').last();
            this.init($newSelect2);
        });
    }
}

module.exports = MultiSelect;
