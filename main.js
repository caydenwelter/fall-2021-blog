var isLoggedIn;
var name;
var createPageText = document.getElementById("username").textContent;

function login(){
    if(!isLoggedIn){
        name = prompt("Please enter your name:");
        isLoggedIn = true;
    }else{
        alert("You are already logged in!")
    }
}