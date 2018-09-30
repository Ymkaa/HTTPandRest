'use strict';

function attachEvents() {
    $('#addBtn').on('click', function () {
        let inputBox = $('#newItem');

        if(inputBox.val() === '') {
            return;
        }

        $('#towns').append($(`<option>${inputBox.val()}</option>`));
        inputBox.val('');
    });

    $('#removeBtn').on('click', function () {
        $('#towns option:selected').remove();
    });
}