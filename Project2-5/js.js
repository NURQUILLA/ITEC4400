"use strict";

let pizzaPrice = {
    thin: 0,
    thick: 0,
    stuffed: 0,
    pan: 0,
    doubleSauce: 1.5,
    doubleCheese: 1.5,
    topping: 1.5,
    size12: 11,
    size14: 13,
    size16: 16,
    size18: 20
};

function cart() {
    this.totalCost = 0;
    this.items = [];
}

cart.prototype.total = function () {
    let cartTotal = 0;
    this.items.forEach(function (item) {
        cartTotal += item.price;
    });
    this.totalCost = cartTotal;
    return this.totalCost;
}

function item() {
    this.price;
    this.qty;
}

item.prototype.cost = function () {
    return this.price * this.qty;
}

item.prototype.addTC = function (cart) {
    cart.items.push(this);
}

item.prototype.removeFC = function (cart) {
    for (let i = 0; i < cart.items.length; i++) {
        if (this === cart.items[i]) {
            cart.items.splice(i, 1);
            break;
        }
    }
}


function pizza() {
    this.size;
    this.crust;
    this.doubleSauce;
    this.doubleCheese;
    this.toppings = [];
}

pizza.prototype.addT = function (topping) {
    this.toppings.push(this);
}
pizza.prototype.calcPizzaPrice = function () {
    if (this.size === "12") {
        this.price = pizzaPrice.size12;
    } else if (this.size === "14") {
        this.price = pizzaPrice.size14;
    } else if (this.size === "16") {
        this.price = pizzaPrice.size16;
    } else if (this.size === "18") {
        this.price = pizzaPrice.size18;
    }

    if (this.crust === "stuffed") {
        this.price += pizzaPrice.stuffed;
    } else if (this.crust === "pan") {
        this.price += pizzaPrice.pan;
    } else if (this.crust === "thin") {
        this.price += pizzaPrice.thin;
    } else if (this.crust === "thick") {
        this.price += pizzaPrice.thick;
    }

    if (this.doubleSauce) {
        this.price += pizzaPrice.doubleSauce;
    }
    if (this.doubleCheese) {
        this.price += pizzaPrice.doubleCheese;
    }

    this.price *= this.qty;

    for (let i = 0; i < this.toppings.length; i++) {
        this.price += this.toppings[i].qty * pizzaPrice.topping;
    }

    return this.price;
}

function topping() {
    this.name;
    this.side;
}


let toppings = new item();
topping.prototype = new item();




window.addEventListener("load", function () {

    let size = document.getElementById("size");
    let crust = document.getElementById("crust");
    let cartButton = document.getElementById("addToCart");
    let cart = document.getElementById("cart");
    let total = document.getElementById("total");
    let preview = document.getElementById("preview");
    let summary = document.getElementById("summary");
    let sauce = document.getElementById("sauce");
    let cheese = document.getElementById("cheese");
    let toppings = document.getElementsByClassName("topping");
    let quantity = document.getElementById("quantity");

    size.onchange = dp;
    crust.ochange = dp;
    sauce.onclick = dp;
    cheese.onclick = dp;
    for (let i = 0; i < toppings.length; i++) {
        toppings[i].onclick = dp;
    }

    let myCart = cart;
    cartButton.onclick = addCart;

    function create(Piz) {
        Piz.qty = quantity.selectedValue();
        Piz.size = size.selectedValue();
        Piz.crust = crust.selectedValue();
        Piz.doubleSauce = sauce.checked;
        Piz.doubleCheese = cheese.checked;

        let tops = document.querySelectorAll("input.topping:checked");
        for (let i = 0; i < tops.length; i++) {
            if (tops[i].value !== "none") {
                let newT = new topping();
                newT.name = tops[i].parentNode.firstChild.value;
                newT.side = tops[i].value;

                if (tops[i].value === "full") {
                    item.price = 1;
                } else {
                    item.price = 0.5;
                }
                Piz.addT(newT);
            }
        }
    }

    function addCart() {
        let myPizza = pizza;
        create(myPizza);
        myPizza.addTC(myCart);

        let rowI = document.createElement("tr");
        cart.appendChild(rowI);

        let summary = document.createElement("td");
        summary.textContent = summary.textContent;
        rowI.appendChild(summary);

        let qty = document.createElement("td");
        qty.textContent = myPizza.qty;
        rowI.appendChild(qty);

        let price = document.createElement("td");
        price.textContent = myPizza.calcPizzaPrice().toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
        rowI.appendChild(price);

        let remove = document.createElement("td");
        let rb = document.createElement("input");
        rb.value = "X";
        rb.type = "button";
        remove.appendChild(rb);
        rowI.appendChild(remove);

        total.value = myCart.total().toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });


        rb.onclick = function () {
            myPizza.removeFC(myCart);
            cart.removeChild(rowI);
            total.value = myCart.total().toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            });
            console.log(myCart);
        };

        reset();
    }


    function dp() {
        preview.removeChildren();
        let pizzaDescription = "";

        pizzaDescription += size.selectedValue() + '" pizza ';
        pizzaDescription += crust.selectedValue() + ", ";
        if (sauce.checked) {
            let sauceImg = document.createElement("img");
            sauceImg.src = "doublesauce.png";
            preview.appendChild(sauceImg);
            pizzaDescription += "double sauce, ";
        }
        if (cheese.checked) {
            let cheeseImg = document.createElement("img");
            cheeseImg.src = "doublecheese.png";
            preview.appendChild(cheeseImg);
            pizzaDescription += "double cheese, ";
        }

        let tops = document.querySelectorAll("input.topping:checked");
        for (let i = 0; i < tops.length; i++) {
            if (tops[i].value !== "none") {
                pizzaDescription +=
                    tops[i].name + "(" + tops[i].value + "), ";
                let toppingImage = document.createElement("img");
                toppingImage.src = tops[i].name + ".png";
                preview.appendChild(toppingImage);

                if (tops[i].value === "left") {
                    toppingImage.style = "rect(0px, 150px, 300px, 0px)";
                } else if (tops[i].value === "right") {
                    toppingImage.style = "rect(0px, 300px, 300px, 150px)";
                }
            }
        }

        summary.textContent = pizzaDescription;
    }


    function reset() {
        let none = document.querySelectorAll("input.topping[value='none']");

        size.selectedIndex = 1;
        crust.selectedIndex = 0;
        sauce.checked = false;
        cheese.checked = false;

        for (let i = 0; i < none.length; i++) {
            none[i].checked = true;
        }
        summary.textContent =
            size.selectedValue() +
            '" pizza, ' +
            crust.selectedValue();
        preview.removeChildren();
        quantity.selectedIndex = 0;
    }
});

HTMLElement.prototype.removeChildren = function () {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
};

HTMLSelectElement.prototype.selectedValue = function () {
    let sIndex = this.selectedIndex;
    return this.options[sIndex].value;
};