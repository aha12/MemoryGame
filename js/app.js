let card = document.getElementsByClassName('card');

let cards = [...card];

for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', displayCard);

};

function displayCard () {
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('disable');
};




  function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
    
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    };
    

/*window.onload = startGame();

let deck = document.getElementbyId('card-deck');

function startGame () {
    var shuffleCards = shuffle(cards);
    for (var i = 0; i < shuffleCards.length; i++) {
        [].forEach.call(shuffleCards, function(item) {
            deck.appendChild(item);
        });
    }  
}


    

/* cards[i].classList.remove('show','open','match','disable');
    

/* 'fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb' */