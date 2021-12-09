var mainBox = document.getElementsByClassName('main__box');

for (element of mainBox){
	element.childNodes[1].style.opacity = '0.1';
	element.childNodes[0].style.color = '#646464';
	element.childNodes[0].style.borderColor = '#646464'
	element.childNodes[0].style.textShadow = '0 0 0px #000000, 0 0 0px #000000, 0 0 0px'
	element.childNodes[0].style.boxShadow = '0 0 0px 0px white inset'
	element.style.background = 'radial-gradient(rgba( 0, 0, 0, 0), rgba(0, 15, 255, 0)) padding-box';
	element.style.boxShadow = '0 0 0px rgba( 0, 0, 0, 0), 0 0 0px rgba( 0, 0, 0, 0), 0 0 0px'
}

const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
}

async function intermitent (element) {
	for (let i = 0; i < 5; i++) {
		if (element.firstChild.childNodes[1].style.opacity == '0.1'){

			element.firstChild.childNodes[1].style.opacity = '1';
			element.firstChild.childNodes[0].style.color = '#fff';
            element.firstChild.childNodes[0].style.borderColor = '#fff'
            element.firstChild.childNodes[0].style.textShadow = '0 0 0.5vw #FF0000, 0 0 2vw #FF0000, 0 0 4vw'
            element.firstChild.childNodes[0].style.boxShadow = '0 0 0.2vw 0.05vw white inset'
			element.firstChild.style.background = 'radial-gradient(rgba( 0, 0, 0, 0), rgba(0, 15, 255, 0.7)) padding-box';
			element.firstChild.style.boxShadow = '0 0 2.5vw #0000FF, 0 0 6vw #0000FF, 0 0 12vw'

		} 
		else  {
			element.firstChild.childNodes[1].style.opacity = '0.1';
			element.firstChild.childNodes[0].style.color = '#646464';
            element.firstChild.childNodes[0].style.borderColor = '#646464'
            element.firstChild.childNodes[0].style.textShadow = '0 0 0px #000000, 0 0 0px #000000, 0 0 0px'
            element.firstChild.childNodes[0].style.boxShadow = '0 0 0px 0px white inset'
            element.firstChild.style.background = 'radial-gradient(rgba( 0, 0, 0, 0), rgba(0, 15, 255, 0)) padding-box';
            element.firstChild.style.boxShadow = '0 0 0px rgba( 0, 0, 0, 0), 0 0 0px rgba( 0, 0, 0, 0), 0 0 0px'
		}
		await sleep(80);
	}

}	

document.getElementById('button-box-register').addEventListener('mouseenter', function(element) {
	turnOn(element, 'button-box-register');
});

document.getElementById('button-box-login').addEventListener('mouseenter', function(element) {
	turnOn(element, 'button-box-login');
});

document.getElementById('button-box-login').addEventListener('mouseout', function(element) {
	turnOff(element);
});

document.getElementById('button-box-register').addEventListener('mouseout', function(element) {
	turnOff(element);
});


function turnOn(element, box) {
	if (element.target.id == box){
		intermitent(element.target);
		setTimeout(480);
	}
}


function turnOff(element) {
	if (element.target.id == 'btnneona' || element.target.id == 'btnneonb'){
		for (element of mainBox){
			element.childNodes[1].style.opacity = '0.1';
			element.childNodes[0].style.color = '#646464';
			element.childNodes[0].style.borderColor = '#646464'
			element.childNodes[0].style.textShadow = '0 0 0px #000000, 0 0 0px #000000, 0 0 0px'
			element.childNodes[0].style.boxShadow = '0 0 0px 0px white inset'
			element.style.background = 'radial-gradient(rgba( 0, 0, 0, 0), rgba(0, 15, 255, 0)) padding-box';
			element.style.boxShadow = '0 0 0px rgba( 0, 0, 0, 0), 0 0 0px rgba( 0, 0, 0, 0), 0 0 0px'
		}
	}
}