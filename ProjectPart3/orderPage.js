"use strict"

let subButton = document.getElementById("submitBtn");
subButton.addEventListener("click", validateName);
subButton.addEventListener("click", validateCard);
//window.addEventListener("load", setup);

function setup(){
    document.getElementById("qty").innerHTML = subtotalV;
  }

function validateName(){
    let cardName = document.getElementById("cardName");

    if(cardName.validity.valueMissing){
        cardName.setCustomValidity("Enter The Name Printed On Card");
    }else{
        cardName.setCustomValidity("");
    }
}

function validateCard(){
    let card = document.forms.payment.elements.credit[0];
    if(card.validity.valueMissing){
        card.setCustomValidity("Select Card Type");
    }else{ 
        card.setCustomValidity("");
    }
}

function validateCVC(){
    let card = document.querySelector('input[name="credit"]:checked').value;
    let cvc = document.getElementById("cvc");

    if(cvc.validity.valueMissing){
        cvc.setCustomValidity("Enter CVC on Back of Card");
    }else if((card === "amex") && !(/^\)d(4)$/.test(cvc.value))) {
        cvc.setCustomValidity("Enter a 4-Digit Number");
    }else if((card !== "amex") && !(/^\)d(3)$/.test(cvc.value))) {
        cvc.setCustomValidity("Enter a 3-Digit Number");
    }else{
        cvc.setCustomValidity("");
    }
}