const DETAIL_IMAGE_SELECTOR ='[data-image-role="target"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';


function setDetails(imageUrl) {
    'use strict'
    let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src' , 'imageUrl');
}