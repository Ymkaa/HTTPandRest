'use strict';

function cardBuilder(selector) {
    function addCard(face, suit) {
        const suits = new Map([['C', '\u2663'], ['D', '\u2666'], ['H', '\u2665'], ['S', '\u2660']]);

        let card = `${face} ${suits.get(suit)}`;
        let cardElement = $(`<div class="card">${card}</div>`);

        cardElement.on('click', function () {
            let previousElement = $(`${selector} div.zoomed`);
            let currentElement = $(this);

            if (previousElement[0] === currentElement[0]) {
                currentElement.hasClass('zoomed') ? currentElement.removeClass('zoomed') : currentElement.addClass('zoomed');
            } else {
                previousElement.removeClass('zoomed');
                currentElement.addClass('zoomed');
            }
        });

        $(selector).append(cardElement);
    }

    return {addCard};
}

$(function () {
    let builder = cardBuilder("#main");
    builder.addCard("10", "S");
    builder.addCard("Q", "D");
    builder.addCard("J", "C");
    builder.addCard("7", "H");
});