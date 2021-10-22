
var neonActive = document.getElementById('btnneona');
var neonActiveb = document.getElementById('btnneonb'); 
var mainBox = document.getElementsByClassName('main__box');

neonActive.style.borderColor = '#646464'
neonActiveb.style.opacity = '0.1';
neonActive.style.color = '#646464';
neonActive.style.textShadow = '0 0 0px #000000, 0 0 0px #000000, 0 0 0px'
neonActive.style.boxShadow = '0 0 0px 0px white inset'
mainBox[0].style.background = 'radial-gradient(rgba( 0, 0, 0, 0), rgba(0, 15, 255, 0)) padding-box';
mainBox[0].style.boxShadow = '0 0 0px rgba( 0, 0, 0, 0), 0 0 0px rgba( 0, 0, 0, 0), 0 0 0px'

const sleep = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
}

async function intermittent () {
	for (let i = 0; i < 5; i++) {
		if (neonActiveb.style.opacity == '0.1'){
			/*asignacion*/
			neonActiveb.style.opacity = '1';
			neonActive.style.color = '#fff';
            neonActive.style.borderColor = '#fff'
            neonActive.style.textShadow = '0 0 10px #FF0000, 0 0 40px #FF0000, 0 0 80px'
            neonActive.style.boxShadow = '0 0 5px 1px white inset'
            mainBox[0].style.background = 'radial-gradient(rgba( 0, 0, 0, 0), rgba(0, 15, 255, 0.7)) padding-box';
            mainBox[0].style.boxShadow = '0 0 15px #0000FF, 0 0 40px #0000FF, 0 0 80px'
		} 
		else  {
			neonActiveb.style.opacity = '0.1';
			neonActive.style.color = '#646464';
            neonActive.style.borderColor = '#646464'
            neonActive.style.textShadow = '0 0 0px #000000, 0 0 0px #000000, 0 0 0px'
            neonActive.style.boxShadow = '0 0 0px 0px white inset'
            mainBox[0].style.background = 'radial-gradient(rgba( 0, 0, 0, 0), rgba(0, 15, 255, 0)) padding-box';
            mainBox[0].style.boxShadow = '0 0 0px rgba( 0, 0, 0, 0), 0 0 0px rgba( 0, 0, 0, 0), 0 0 0px'
		}
		console.log('i')
		await sleep(80)
	}

}	

neonActiveb.addEventListener('mouseenter', () => {
	intermittent();
	setTimeout(function() {}, 480);
});

neonActiveb.addEventListener('mouseout', () => {
	neonActiveb.style.opacity = '0.1';
    neonActive.style.color = '#646464';
    neonActive.style.borderColor = '#646464'
    neonActive.style.textShadow = '0 0 0px #000000, 0 0 0px #000000, 0 0 0px'
    neonActive.style.boxShadow = '0 0 0px 0px white inset'
    mainBox[0].style.background = 'radial-gradient(rgba( 0, 0, 0, 0), rgba(0, 15, 255, 0)) padding-box';
    mainBox[0].style.boxShadow = '0 0 0px rgba( 0, 0, 0, 0), 0 0 0px rgba( 0, 0, 0, 0), 0 0 0px'
});