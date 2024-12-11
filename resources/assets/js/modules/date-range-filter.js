var $ = require('jquery'),
    _ = require('lodash'),
    moment = require('moment')
;

class DateFilterRange
{
    constructor()
    {
        let $dateRanges = $('.date-range-filter');
        this.dates = {};
        this.initDateRanges($dateRanges);
        this.initEvents();
    }

    initDateRanges($elements)
    {
        $elements.each((i, el) => {
            let $el = $(el);

            this.setDate($el.find('.date-range-start'));
            this.setDate($el.find('.date-range-end'));
            this.checkDates($el);
        });
    }

    initEvents()
    {
        let $document = $(document);

        $document.on('change', '.date-range-filter select', (e) => {
            this.setDate($(e.target).parent());
            this.checkDates($(e.target));
        });
    }

    setDate($element)
    {
        let year = $element.find('.year').val(),
            month = $element.find('.month').val(),
            day = $element.find('.day').val(),
            key = $element.data('key')
        ;

        this.dates[key] = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
    }

    getDate($element) {
        return this.dates[$element.data('key')];
    }

    checkDates($element)
    {
        let $dateRangeEl = $element.hasClass('date-range-filter') ? $element : $element.parents('.date-range-filter'),
            $startDateEl = $dateRangeEl.find('.date-range-start'),
            $endDateEl = $dateRangeEl.find('.date-range-end'),
            startDate = this.getDate($startDateEl),
            endDate = this.getDate($endDateEl),
            now = moment(),
            sameYear = startDate.year() === endDate.year(),
            sameMonth = startDate.month() === endDate.month()
        ;

        // End date
        // Always validate year
        this.setValidDateOptions($endDateEl.find('.year'), startDate.year(), now.year());
        // Only validate month when start and end date have the same year
        this.setValidDateOptions($endDateEl.find('.month'), startDate.month() + 1, now.month() + 1, sameYear, endDate.year() === now.year());
        // Only validate day when start and end date have the same year and month
        this.setValidDateOptions($endDateEl.find('.day'), startDate.date(), now.date(), sameYear && sameMonth, endDate.year() === now.year() && endDate.month() === now.month());

        // Start date
        this.setValidDateOptions($startDateEl.find('.year'), null, endDate.year());
        this.setValidDateOptions($startDateEl.find('.month'), null, endDate.month() + 1, false, sameYear);
        this.setValidDateOptions($startDateEl.find('.day'), null, endDate.date(), false, sameYear && sameMonth);
    }

    /**
     * Loop through a list of date options and disable the options that are not relevant
     *
     * @param  jQuery       $date
     * @param  Moment|null  minDate  the minimum date value that should be set
     * @param  Moment|null  maxDate  the maximum date value that should be set
     * @param  boolean      applyMin whether or not to apply the minimum date to the options
     * @param  boolean      applyMax whether or not to apply the maximum date to the options
     * @return void
     */
    setValidDateOptions($date, minDate = null, maxDate = null, applyMin = true, applyMax = true)
    {
        let validateMin = 'null' !== typeof minDate && applyMin ? true : false,
            validateMax = 'null' !== typeof maxDate && applyMax ? true : false,
            dayFilter = $date.hasClass('day'),
            month = parseInt($date.siblings('.month').val(), 10),
            monthLimit = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        ;

        $date.find('option').each((i, el) => {
            let $el = $(el),
                value = parseInt($el.val(), 10)
            ;

            $el.removeAttr('disabled');

            if (
                (validateMin && value < minDate)
                || (validateMax && value > maxDate)
                || (dayFilter && value > monthLimit[month - 1])
            ) {
                $el.attr('disabled', 'disabled');
            }
        });
    }
}

module.exports = DateFilterRange;
