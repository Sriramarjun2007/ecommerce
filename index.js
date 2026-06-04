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
