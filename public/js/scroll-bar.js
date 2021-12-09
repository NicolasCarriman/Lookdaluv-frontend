
var navbar = document.getElementsByClassName("scroll-bar");
var menubar = document.getElementById("modules-link");

navbar[0].style.bottom = '86.6vh';

const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
}

async function slide() {
	
	if ( navbar[0].style.bottom == '86.6vh' ) {
		navbar[0].animate({
	    'bottom': 68 + 'vh',
	    }, 450);
	    await sleep(450)
		navbar[0].style.bottom = 68 + 'vh';
    }
}
async function slideoff() {
	
	if ( navbar[0].style.bottom == '68vh' ) {
		navbar[0].animate({
	    'bottom': 86.6 + 'vh',
	    }, 450);
	    await sleep(450)
		navbar[0].style.bottom = 86.6 + 'vh';
    }
}

menubar[0].addEventListener("mouseover", slide) ;
navbar[0].addEventListener("mouseleave", slideoff) ;

