var $ = require('jquery');

class OverlayModal
{
    constructor()
    {
        let $modal = $('.modal-overlay');
        $modal.on('show.bs.modal', (e) => {
            $(document.body).addClass('overlay');
        });

        $modal.on('hide.bs.modal', (e) => {
            $(document.body).removeClass('overlay');
        });
    }
}

module.exports = OverlayModal
