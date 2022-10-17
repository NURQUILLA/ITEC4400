"use strict";

window.addEventListener("load", createLightbox);


function createLightbox(){
    //lightbox container
    let lightBox = document.getElementById("lightbox");
    let lbCounter = document.createElement("div");
    let lbPrev = document.createElement("div");
    let lbNext = document.createElement("div");
    let lbPlay = document.createElement("div");
    let lbImages = document.createElement("div");

//design the lightbox counter
lightBox.appendChild(lbCounter);
lbCounter.id = "lbCounter";
let currentImg = 1;
lbCounter.textContent = currentImg + " / " + imgCount;


lightBox.appendChild(lbPrev);
lbPrev.id = "lbPrev";
lbPrev.innerHTML = "&#9664;";
lbPrev.onclick = showPrev;

lightBox.appendChild(lbNext);
lbNext.id = "lbNext";
lbNext.innerHTML = "&#9654;";
lbNext.onclick = showNext;

lightBox.appendChild(lbPlay);
lbPlay.id = "lbPlay";
lbPlay.innerHTML = "&#9199;";
let timeID;
lbPlay.onclick = function(){
    if(timeID){
        //stop slideshow
        window.clearInterval(timeID);
        timeID = undefined;
    }else{
        //start slideshow
        showNext();
        timeID = window.setInterval(showNext, 1500);
    }
}

lightBox.appendChild(lbImages);
lbImages.id = "lbImages";

for (let i = 0; i < imgCount; i++) {
    let image = document.createElement("img");
    image.src = gba[i];
    //image.alt = imgCaptions[i];
    image.onclick = createOverlay;
    lbImages.appendChild(image);
}

//function moves forward through image list
function showNext() {
    lbImages.appendChild(lbImages.firstElementChild);
    (currentImg < imgCount) ? currentImg++ : currentImg = 1;
    lbCounter.textContent = currentImg + " / " + imgCount;
}

//function to move back through images
function showPrev() {
    lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
    (currentImg > 1) ? currentImg-- : currentImg = imgCount;
    lbCounter.textContent = currentImg + " / " + imgCount;
}

function createOverlay(){
    let overlay = document.createElement("div");
    overlay.id = "lbOverlay";

    let figureBox = document.createElement("figure");
    overlay.appendChild(figureBox);

    let overlayImage = this.cloneNode("true");
    figureBox.appendChild(overlayImage);

    let overlayCaption = document.createElement("figcaption");
    overlayCaption.textContent = this.alt;
    figureBox.appendChild(overlayCaption);

    //add close button to overlay
    let closeBox = document.createElement("div");
    closeBox.id = "lbOverlayClose";
    closeBox.innerHTML = "&times";

    //event handler for clicking the x
    closeBox.onclick = function(){
        document.body.removeChild(overlay);
    }

    overlay.appendChild(closeBox);
    document.body.appendChild(overlay);



}

}