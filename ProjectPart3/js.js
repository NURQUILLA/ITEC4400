
 let subTotalV = 0;
 let totalV = 0;
 let taxV = 0;
 let deliveryFeeV = 0;
 let qty = [];

//settup the form when the page loads
 window.addEventListener("load", setupForm);

 //setup 
function setupForm(){
   document.getElementById("number").value = 1;

   total();

   document.getElementById("number").onchange = total;

 }

 function total(){
   let subtotal = 120;
   let number = document.getElementById("number").value;
   let total = 0;
   let tax = 0;
   let deliveryFee = 0;

   subtotal = 120 * number;
   tax = subtotal * .05;
   deliveryFee = subtotal * .07;
   total = subtotal + tax + deliveryFee;
   
   document.getElementById("subtotal").innerHTML = "$" + subtotal;
   document.getElementById("tax").innerHTML = "$" + tax;
   document.getElementById("fee").innerHTML = "$" + deliveryFee;
   document.getElementById("total").innerHTML = "$" + total;

   subTotalV = subtotal;
   totalV = total;
   taxV = tax;
   deliveryFeeV = deliveryFee;
   qty = number;

 }
