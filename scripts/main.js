const DETAIL_IMAGE_SELECTOR ='[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
    'use strict';
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src' , imageUrl);

    let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContext = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
addEventListener('click', function(event) {
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

function initializeEvents() {
    'use strict';
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

// run all the functions to link to the callback
// that will update the main detail image with the thumbnails image and title
initializeEvents();