'use strict';

let cardsBlock = document.querySelector('.cards-block');
let modalBackground = document.querySelector('.modal-background');
let cardButton = document.querySelector('.card');
let closeX = document.querySelector('.close');
let greenButton = document.querySelector('.green-btn');
let redButton = document.querySelector('.red-btn');

cardButton.onclick = function () {
    modalBackground.style.display = "flex";
}

closeX.onclick = function () {
    modalBackground.style.display = "none";
}

greenButton.onclick = function () {
    modalBackground.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalBackground) {
        modalBackground.style.display = "none";
    }
}

redButton.onclick = function () {
    modalBackground.style.display = "none";
    cardsBlock.style.display = "none";
}