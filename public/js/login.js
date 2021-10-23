document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", login);

//Declaracion de variables//
var formulario_login_register =  document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario__register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector("#back-login-box");
var caja_trasera_register = document.querySelector("#back-register-box");
var login_button = document.querySelector('#button-box-login');
var caja_trasera = document.querySelector('.caja__trasera');

caja_trasera_login.style.opacity = "0";

function register (){
    caja_trasera.style.background = 'linear-gradient(to right, rgb(43, 45, 71) 0%, rgba(51, 190, 255, 0) 50%, rgb(51, 190, 255, 0) 100%)';
    formulario__register.style.display ="block";
    formulario_login.style.opacity ="0";
    caja_trasera_login.style.opacity = "1";
    caja_trasera_register.style.opacity = "0";
    login_button.style.opacity = '0';
}

function login (){
    caja_trasera.style.background = 'linear-gradient(to left, rgb(43, 45, 71) 0%, rgba(51, 190, 255, 0) 50%, rgb(51, 190, 255, 0) 100%)';
    formulario__register.style.display ="none";
    formulario_login.style.opacity ="1";
    caja_trasera_login.style.opacity = "0";
    caja_trasera_register.style.opacity = "1";
    login_button.style.opacity = '1';
}


var imageOffset = 0

async function scrolling(evt) {

    document.getElementById("containerId").animate({
        'left': evt + 'px',
    }, 500);
    await sleep(500)
    document.getElementById("containerId").style.left = evt + 'px';
}
document.getElementById("btn__registrarse").addEventListener("click", (evt) => {
	scrolling(400);
    setTimeout (800);
}
);
document.getElementById("btn__iniciar-sesion").addEventListener("click", (evt) => {
	scrolling(18);
    setTimeout (800);
}
);