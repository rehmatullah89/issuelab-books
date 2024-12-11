module.exports = {
    template: '<div class="modal" tabindex="-1" role="dialog" v-show="show" v-transition="modal">' +
        '<div class="modal-dialog" role="document">' +
            '<div class="modal-content">' +
                '<content select=".modal-header">' +
                    '<div class="modal-header">' +
                       '<h4 class="modal-title">default header</h4>' +
                    '</div>' +
                '</content>' +
                '<content select=".modal-body">' +
                    '<div class="modal-body">' +
                        '<p>default body</p>' +
                    '</div>' +
                '</content>' +
                '<content select=".modal-footer">' +
                    '<div class="modal-footer">' +
                        '<button type="button" class="btn btn-default"' +
                            'v-on="click: show = false">' +
                            'Close' +
                        '</button>' +
                    '</div>' +
               '</content>' +
            '</div>' +
        '</div>' +
    '</div>',
    props: {
        show: {
            type: Boolean,
            required: true,
            twoWay: true,
        }
    }
};
