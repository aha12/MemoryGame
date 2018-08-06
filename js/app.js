let card = document.getElementsByClassName('card');

let cards = [...card];

let deck = document.getElementById('card-deck');

for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', displayCard);

};

function displayCard () {
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('disable');
};




function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }
        return array;
    };

    document.body.onload = startGame();
    
    function startGame(){
        
       let cardsShuffled = shuffle(cards);
        
        for (let i = 0; i < cardsShuffled.length; i++){
            [].forEach.call(cardsShuffled, function(item) {
                deck.appendChild(item);
            });
            
        }
    }



/* cards[i].classList.remove('show','open','match','disable');
    

/* 'fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb' */