const slides = document.querySelectorAll(".slide");
var c = 0;
const totalSlides = slides.length;
const intervalTime = 3700;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const startSlider = () => {
    setInterval(() => {
        c++;
        if (c === totalSlides) {
            c = 0;
        }
        slideimg();
    }, intervalTime);
};

// Event listeners for buttons
const prev = () => {
    c--;
    if (c < 0) {
        c = totalSlides - 1;
    }
    slideimg();
};

const next = () => {
    c++;
    if (c === totalSlides) {
        c = 0; 
    }
    slideimg();
};

const slideimg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${c * 100}%)`;
    });
};
startSlider();
document.querySelector(".shop").addEventListener("click",function(){
    const car=document.querySelector(".list");
    car.classList.toggle("hide");
})
document.querySelector(".cart").addEventListener("click",function(){
    const l=document.querySelector(".list");
    l.classList.add("col-4");
})
function removeItem(item) {
    item.parentElement.remove(); // Remove the selected item from the cart
}
var totalCartPrice = 0; // Initialize totalCartPrice globally

function add(item) {
    var qua = 1; // Move the qua variable inside the add function
    var selected = document.createElement("div");
    selected.classList.add("crtimg");
    var cartitem = document.getElementById("title");
    var info = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", item.children[0].currentSrc);
    var n = document.createElement("h4");
    n.innerText = item.children[1].innerText;
    var price = document.createElement("h5");
    price.innerText = item.children[2].innerText;
    var quantity = document.createElement("span");
    quantity.classList.add("plusminus");
    var sp = document.createElement("span");
    sp.classList.add("box");
    var pricebox = parseInt(price.innerText.replace("₹", ""));
    var button1 = document.createElement("button");
    button1.innerText = "+";
    sp.innerText = 1;
    var span = document.createElement("span");
    span.classList.add("total");
    button1.onclick = function () {
        qua++;
        sp.innerText = qua;
        pricebox = (pricebox / (qua - 1)) * qua;
        span.innerText = pricebox;
        updateTotalPrice(); // Update the total price when quantity changes
    };
    var button2 = document.createElement("button");
    button2.innerText = "-";
    button2.onclick = function () {
        if (qua > 1) {
            qua--;
            sp.innerText = qua;
            pricebox = (pricebox / (qua + 1)) * qua;
            span.innerText = pricebox;
            updateTotalPrice(); // Update the total price when quantity changes
        }
    };
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        removeItem(selected);
        updateTotalPrice(); // Update the total price when an item is deleted
    };
    span.innerText = pricebox;
    quantity.append(button1);
    quantity.append(sp);
    quantity.append(button2);
    quantity.append(span);
    selected.append(img);
    info.append(n);
    info.append(price);
    selected.append(info);
    selected.append(quantity);
    cartitem.append(selected);
    // Update the total price function
    function updateTotalPrice() {
        totalCartPrice = calculateTotalPrice();
        console.log("Total Price:", totalCartPrice);
        document.getElementById("total").innerText = "Total: ₹" + totalCartPrice;
         // You can replace this with any action you want
    }

    // Calculate total price based on items in the cart
    function calculateTotalPrice() {
        var totalPrice = 0;
        // Iterate through each item in the cart and calculate the total price
        var cartItems = document.querySelectorAll(".crtimg");
        cartItems.forEach(function (cartItem) {
            var itemPrice = parseInt(cartItem.querySelector(".total").innerText);
            totalPrice += itemPrice;
        });
        return totalPrice;
    }
}
console.log(totalCartPrice);

