document.getElementById("btn__register").addEventListener("click", register);
document.getElementById("btn__start-session").addEventListener("click", login);

var login_form = document.querySelector(".login-form");
var register_form = document.querySelector(".register-form");
var back_box_login = document.querySelector("#back-login-box");
var back_box_register = document.querySelector("#back-register-box");
var login_button = document.querySelector('#button-box-login');
var back_box = document.querySelector('.back-box');

back_box_login.style.opacity = "0";

function register (){
    back_box.style.background = 'linear-gradient(to right, rgb(14, 14, 14) 1%,rgb(7, 7, 7) 15%, rgb(0, 0, 0) 65%, black 100%)';
    register_form.style.display ="block";
    login_form.style.opacity ="0";
    back_box_login.style.opacity = "1";
    back_box_register.style.opacity = "0";
    login_button.style.opacity = '0';
}

function login (){
    back_box.style.background = 'linear-gradient(to left, rgb(14, 14, 14) 1%,rgb(7, 7, 7) 15%, rgb(0, 0, 0) 65%, black 100%)';
    register_form.style.display ="none";
    login_form.style.opacity ="1";
    back_box_login.style.opacity = "0";
    back_box_register.style.opacity = "1";
    login_button.style.opacity = '1';
}

var imageOffset = 0

async function scrolling(evt) {

    document.getElementById("container-id").animate({
        'left': evt + 'px',
    }, 500);
    await sleep(500)
    document.getElementById("container-id").style.left = evt + 'px';
}

document.getElementById("btn__register").addEventListener("click", (evt) => {
        scrolling(400);
        setTimeout (800);
    }
);

document.getElementById("btn__start-session").addEventListener("click", (evt) => {
        scrolling(18);
        setTimeout (800);
    }
);