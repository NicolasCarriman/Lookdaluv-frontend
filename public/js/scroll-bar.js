
var navbar = document.getElementsByClassName("scroll-bar");
var navbardown = document.getElementsByClassName("menu-bar");
navbar[0].style.bottom = '86.6vh';

const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
}

async function slide() {
	
	if ( navbar[0].style.bottom == '86.6vh' ) {
		console.log("slide on");
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

navbardown[0].addEventListener("mouseover", slide) ;
navbar[0].addEventListener("mouseleave", slideoff) ;

