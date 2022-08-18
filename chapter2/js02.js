/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Nelson Urquilla
      Date:   08/17/2022

      Filename: js02.js
 */

      //global variables for the application
      const EMP_COST = 100;
      const BOOK_COST = 350;
      const REPRO_COST = 1250;
      const TRAVEL_COST = 2;

      //settup the form when the page loads
      window.addEventListener("load", setupForm);

      //setup 
    function setupForm(){
        document.getElementById("photoNum").value = 1;
        document.getElementById("photoHrs").value = 2;
        document.getElementById("makeBook").value = false;
        document.getElementById("photoRights").value = false;
        document.getElementById("photoDist").value = 0;

        getEstimate();

        document.getElementById("photoNum").onchange = getEstimate;
        document.getElementById("photoHrs").onchange = getEstimate;
        document.getElementById("makeBook").onchange = getEstimate;
        document.getElementById("photoRights").onchange = getEstimate;
        document.getElementById("photoDist").onchange = getEstimate;

       // correctCode();

        document.getElementById("couponCode").onchange = getEstimate;

      }

      function getEstimate(){
        let totalCost = 0;
        let photographers = document.getElementById("photoNum").value;
        let hours = document.getElementById("photoHrs").value;
        let distance = document.getElementById("photoDist").value;
        let buyBook = document.getElementById("makeBook").checked;
        let buyRights = document.getElementById("photoRights").checked;

        totalCost += photographers * hours * EMP_COST;

        totalCost += photographers * distance * TRAVEL_COST;

        totalCost += buyBook ? BOOK_COST : 0;

        totalCost += buyRights ? REPRO_COST : 0;

        
        //sets value of inputCode to element couponCode
        let inputCode = document.getElementById("couponCode").value;

        /*
        checks if value in couponCode is equal to the correct coupon or is epmty
            if empty it will display nothing 
        if anything other than correct coupon code will return message
        
        nested if test which code had been applied and applies the 
        corresponding discount
        12345 = 5% discount
        98765 = 10% discount
        */
        if(inputCode === "12345" || inputCode === "" || inputCode === "98765"){
            document.getElementById("correct").innerHTML = "";
            if(inputCode === "12345"){
                totalCost -= .05 * totalCost;
            } if (inputCode === "98765"){
                totalCost -= .10 * totalCost;
            }
        } else{
            document.getElementById("correct").innerHTML = "invalid coupon code";
        }

        
        document.getElementById("estimate").innerHTML = "$" + totalCost;
      }

    //   //find if coupn code is valid
    //   function correctCode(){

    //     //sets value of inputCode to element couponCode
    //     let inputCode = document.getElementById("couponCode").value;

    //     /*
    //     checks if value in couponCode is equal to the correct coupon or is epmty
    //         if empty it will display nothing 
    //     if anything other than correct coupon code will return message
    //     */
    //     if(inputCode === "12345" || inputCode === "" || inputCode === "98765"){
    //         document.getElementById("correct").innerHTML = "";
    //     } else{
    //         document.getElementById("correct").innerHTML = "invalid coupon code";
    //     }

    //   }
