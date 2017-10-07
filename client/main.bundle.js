"use strict";

var modalSignUp = document.getElementById('sign_up');
var modalLogIn = document.getElementById("log_in");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalSignUp || event.target == modalLogIn) {
        modalSignUp.style.display = "none";
        modalLogIn.style.display = "none";
    }
};
