var $ = require('jquery'),
    moment = require('moment')
;
require('datetimepicker');

class DateTimePicker
{
    constructor()
    {
        let $fields = $('.date .input-group');
        $fields.datetimepicker({
            format: 'YYYY-MM-DD',
            maxDate: moment(),
            viewMode: 'months',
            showClear: true,
            showClose: true,
        });

        this.initDateRange($('.date-range'));
    }

    initDateRange($fieldGroup)
    {
        let $fields = $fieldGroup.find('.input-group'),
            $start = $fields.first(),
            $end = $fields.last()
        ;

        $start.on('dp.change', (e) => {
            $end.data('DateTimePicker').minDate(e.date);
        });

        $end.on('dp.change', (e) => {
            // Work around for bug that fills out field if it's blank
            let clear = true;
            if ($start.data('DateTimePicker').date()) {
                clear = false;
            }

            $start.data('DateTimePicker').maxDate(e.date);

            // Reset the start date, if it didn't have a value before
            if (clear) { $start.data('DateTimePicker').date(null); }
        });
    }
}

module.exports = DateTimePicker;
