const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const LINK_SELECTOR = '[data-image-role="trigger"]';
const URL = document.querySelector(LINK_SELECTOR).getAttribute('alt');

var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function addIconClickHandler() {
    'use strict';
    addEventListener('click', function(event) {
        event.preventDefault();
        setDetails();
    });
}

function setDetails() {
    'use strict';
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', URL);
}

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

function initializeEvents() {
    'use strict';
    addIconClickHandler(URL);
}

initializeEvents();
