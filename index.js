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