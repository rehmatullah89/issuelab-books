$ = require("jquery");

module.exports = {
    twoWay: true,
    bind: function () {
        this.handler = function () {
                // set data back to the vm.
                // If the directive is bound as v-example="a.b.c",
                // this will attempt to set `vm.a.b.c` with the
                // given value.
                this.set($(this.el).val());
        }.bind(this)
        $(this.el).on('blur', this.handler);
    },
    update: function (value) {
        // sync vm data change to select2
        $(this.el).val(value).trigger('change');
    },
    unbind: function () {
        $(this.el).off('blur', this.handler);
    }
}
