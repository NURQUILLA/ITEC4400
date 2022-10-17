"use strict";

window.addEventListener("load", addImages);

function addImages() { 

    for(let i = 0; i < imgCount; i++){

    let imgSrc = document.getElementById(i);

    let createdImg = document.createElement("div");
    
    imgSrc.appendChild(createdImg);
    createdImg.id = i;
    let image = document.createElement("img");
    image.src = images[i];
    let description = document.createElement("p");
    description.id = "desc";
    document.getElementById(i).appendChild(image);
    //document.getElementById('desc').innerHTML = para[i];


    }
    }
