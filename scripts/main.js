const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const DETAIL_DESCRIPTION_SELECTOR = '[data-image-role="description"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const ESC_KEY_CODE = 27;

function setDetails(imageUrl, descriptionText) {
    'use strict';
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    let description = document.querySelector(DETAIL_DESCRIPTION_SELECTOR);
    description.textContent = descriptionText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function descriptionFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-description');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail), 
    descriptionFromThumb(thumbnail));

}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function getThumbnailsArray() {
    'use strict';
    let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    let thumbnailArray = [].slice.call(thumbnails); // convert NodeList to an Array
    return thumbnailArray;
}

//add the CSS class to <body> to hide the detail image
function hideDetails() {
    'use strict'
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

// remove the CSS class from <body> to show the detail image 


function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function (event) {
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === ESC_KEY_CODE) {
            hideDetails();
        }
    });
}

function initializeEvents() {
    'use strict';
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

// run all the functions to link to the callback
// that will update the main detail image with the thumbnails image and title
initializeEvents();