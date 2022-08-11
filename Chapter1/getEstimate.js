let msg = "Thank You, ";
let totalmasg = " , your total is $";

document.getElementById("submitbutton").onclick = function() {

    let totalBlanket = document.getElementById("blanketQuantity").value * 25.69;
    let totalHedgeRose = document.getElementById("hedgeRoseQuantity").value * 20.99;
    let totalBLuestem = document.getElementById("bluestemQuantity").value * 18.99;

    let total = totalBlanket + totalBLuestem + totalHedgeRose;
    document.getElementById("submitMsg").innerHTML = msg + document.getElementById("nameinput").value + totalmasg + 
    Math.round(total * 100)/100; 
 }