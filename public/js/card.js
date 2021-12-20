var cardSelect = document.getElementsByClassName('card-item')

var instag = (e) => {
    var newCardSelecte = Array.from(cardSelect).indexOf(e);
    console.log(newCardSelecte)
    cardSelect[3].classList.toggle('active');
};
  for (i = 0 ; i<cardSelect.length; i++){
    cardSelect[i].addEventListener('click', instag);
};
