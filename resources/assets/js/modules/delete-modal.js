var $ = require('jquery'),
    _ = require('lodash')
;

class DeleteModal
{
    constructor()
    {
        this.deleteModal();
    }

    deleteModal()
    {
        $('.delete-modal').on('show.bs.modal', function (event) {
          var button = $(event.relatedTarget),
                name = button.data('name'),
                action = button.data('action'),
                $modal = $(this)
            ;

            $modal.find('.modal-body').html('You are about to delete <strong>' + _.escape(name) +'</strong>');
            $modal.find('form').prop('action', action);
        });
    }
}

module.exports = DeleteModal
