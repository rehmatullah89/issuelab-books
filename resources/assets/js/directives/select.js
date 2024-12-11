var $ = require('jquery');
require('select2');

module.exports = {

  // Since we expect to sync value back to the vm,
  // we need to signal this is a two-way directive
  // so that we can use `this.set()` inside directive
  // functions.
  twoWay: true,

  bind: function () {
    var optionsData;

    console.log("Select:",this, $(this.el));

    // retrive the value of the options attribute
    var optionsExpression = this.el.getAttribute('options');

    if (optionsExpression) {
      // if the value is present, evaluate the dynamic data
      // using vm.$eval here so that it supports filters too
      optionsData = this.vm.$eval(optionsExpression);
    }

    // initialize select2
    var $el = $(this.el),
        placeholder = $el.data('placeholder'),
        allowClear = $el.data('allow-clear'),
        ajaxUrl = $el.data('ajax-url')
    ;

    var selectOptions = {
        placeholder: ('undefined' !== typeof(placeholder) && placeholder) ? placeholder : null,
        allowClear: ('undefined' !== typeof(allowClear) && '' !== allowClear) ? allowClear : false,
        width:'100%'
    };

    if('undefined' !== typeof(ajaxUrl) && ajaxUrl){
        selectOptions['ajax'] = {
            url: ajaxUrl,
            dataType: 'jsonp',
            delay: 250,
            processResults: function (data, page) {
              return {
                results: data
              };
            }
        };
        selectOptions['minimumInputLength'] = 2;
    }

    $el
        .select2(selectOptions)
        .on('change', (e) => {
            // sync the data to the vm on change.
            // `this` points to the directive instance, since we're using `=>` notation
            this.set($(e.target).val())
        })
    ;
  },

  update: function (value) {
    // sync vm data change to select2
    var ajaxUrl = $(this.el).data('ajax-url');
    if('undefined' !== typeof(ajaxUrl) && ajaxUrl){
        $(this.el).empty().append('<option value="'+value+'">'+value+'</option>').val(value).trigger('change');
    }else{
        $(this.el).val(value).trigger('change');
    }
  },

  unbind: function () {
    // don't forget to teardown listeners and stuff.
    $(this.el).off().select2('destroy')
  }
}
