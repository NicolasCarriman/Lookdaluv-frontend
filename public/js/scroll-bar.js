
var navbar = document.getElementsByClassName("scroll-bar");
var navbardown = document.getElementsByClassName("menu-bar-item1");
var tools = document.getElementsByClassName("menu-bar-item2");
navbar[0].style.bottom = '82vh';
navbar[0].style.position = 'absolute'
const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
}

async function slide() {
	
	if ( navbar[0].style.bottom == '82vh' ) {
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
	    'bottom': 82 + 'vh',
	    }, 450);
	    await sleep(450)
		navbar[0].style.bottom = 82 + 'vh';
    }
}

navbardown[0].addEventListener("mouseover", slide) ;
tools[0].addEventListener("mouseover", slide) ;
navbar[0].addEventListener("mouseleave", slideoff) ;

