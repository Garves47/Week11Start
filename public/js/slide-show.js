"use strict";

const $ = (selector) => document.querySelector(selector);
const caption =$("#caption")
const mainImage =$("#main_image")
let imageCache = [];
let imageCounter = 0;

const swapImage = ()=>{
    imageCounter = (imageCounter+1) % (imageCache.length-1);
    mainImage.src = imageCache[imageCounter].src
    mainImage.alt = imageCache[imageCounter].alt
    caption.textContent = imageCache[imageCounter].alt

}

document.addEventListener("DOMContentLoaded", () => {
    const links= document.querySelectorAll("a");

    let image;

    for(let link of links){
        image = new Image();
        image.src = link.href;
        image.alt = link.title;

        imageCache.push(image);
    }
    setInterval(swapImage,2000)
});