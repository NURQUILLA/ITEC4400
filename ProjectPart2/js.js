 //global variables
 const EMP_COST = 100;
 const BOOK_COST = 350;
 const REPRO_COST = 1250;
 const TRAVEL_COST = 2;

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
 }
