var login=document.getElementById("loginpage")
var signupcontainer=document.getElementById("signup-container");
function signup(){
    login.style.display="none";
    signupcontainer.style.display="block";
}
function afterform(){
    login.style.display="block";
    signupcontainer.style.display="none";
}
function loginfirst(){
    alert("Login to proceed");
}
function homepage(){
    let form=document.getElementById("loginform");
     if (form.checkValidity()) {
        window.location.href = "homepage.html";
    } else {
        form.reportValidity();
    }
}
function loginicon(){
    window.location.href="index.html";
}

let cartCount = 0;

function addtocart() {
    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    alert("Added to cart!");
}
document.addEventListener("DOMContentLoaded", function () {

    let questions = document.querySelectorAll(".faq-question");

    questions.forEach(function(question) {

        question.addEventListener("click", function() {

            let answer = question.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }

        });

    });

});
document.addEventListener("DOMContentLoaded", function(){

    let furnitureBtn = document.getElementById("furniture-btn");
    let sidebar = document.getElementById("sidebar");
    let closeBtn = document.getElementById("close-sidebar");

    furnitureBtn.addEventListener("click", function(){
        sidebar.classList.add("show");
    });

    closeBtn.addEventListener("click", function(){
        sidebar.classList.remove("show");
    });

});
document.addEventListener("DOMContentLoaded", function(){
    let sidebar = document.getElementById("sidebar");
    let productid = document.getElementById("allproduct");

    productid.addEventListener("click", function(){

        document.getElementById("featuredproduct")
                .scrollIntoView({
                    behavior: "smooth"
                });
                 sidebar.classList.remove("show");

    });

});

let cart = [];

function addtocart(name, price, image) {

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            qty: 1
        });
    }

    updateCartCount();

    alert(name + " added to cart!");
}

function updateCartCount() {

    let count = 0;

    cart.forEach(item => {
        count += item.qty;
    });

    document.getElementById("cart-count").innerText = count;
}

// Show cart
function showCart() {

    document.getElementById("cart-page").style.display = "block";

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" width="100">

                <div>
                    <h3>${item.name}</h3>

                    <p>Price: $${item.price}</p>

                    <p>Quantity: ${item.qty}</p>

                    <p>Total: $${item.price * item.qty}</p>

                    <button onclick="increaseQty(${index})">+</button>

                    <button onclick="decreaseQty(${index})">-</button>

                    <button onclick="removeItem(${index})">
                        Delete
                    </button>

                </div>

            </div>

            <hr>
        `;
    });

    document.getElementById("subtotal").innerText = "$" + total;
    document.getElementById("total-price").innerText = "$" + total;
}

function increaseQty(index) {

    cart[index].qty++;

    updateCartCount();

    showCart();
}

function decreaseQty(index) {

    if (cart[index].qty > 1) {
        cart[index].qty--;
    } else {
        cart.splice(index, 1);
    }

    updateCartCount();

    showCart();
}
function removeItem(index) {

    cart.splice(index, 1);

    updateCartCount();

    showCart();
}

function closeCart() {

    document.getElementById("cart-page").style.display = "none";
}