var $ = require('jquery');

class AjaxForm
{
    constructor(){
        this.register();
    }

    register()
    {
       $('form[data-ajax]',).on('submit', (e) => {
            var $form  = $(e.target),
                method = $form.find('input[name="_method"]').val() || 'POST',
                url    = $form.prop('action')
            ;

            $.ajax({
                type: method,
                url: url,
                data: $form.serialize(),
                success: (data) => {

                },
            });

            e.preventDefault();
       });
    }
}

module.exports = AjaxForm;
