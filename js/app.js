let card = document.getElementsByClassName('card');

let cards = [...card];

let deck = document.getElementById('card-deck');

let matchedCard = document.getElementsByClassName('match');

let openedCards = [];

let moves = 0;

let counter = document.getElementsByClassName('moves');

let stars = document.getElementsByClassName('fa-star');

for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', displayCard);

};

function displayCard () {
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('disabled');
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


function cardOpen () {
    openedCards.push(this);
    let opened = openedCards.length;

    if(opened === 2) {
        if(openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
         moveCounter();
    }
}

function matched() {
    openedCards[0].classList.add('match');
    openedCards[1].classList.add('match');
    openedCards[0].classList.remove('show', 'open');
    openedCards[1].classList.remove('show', 'open');
    openedCards = [];
}

function unmatched() {
    openedCards[0].classList.add('unmatched');
    openedCards[1].classList.add('unmatched');
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove('show', 'open', 'unmatched');
        openedCards[1].classList.remove('show','open','unmatched');
        enable();
        openedCards = [];
    }, 1100);
}

function disable() {
    Array.prototype.filter.call(cards, function(card) {
        card.classList.add('disabled');
    });
}

function enable() {
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for (let i = 0; i < matchedCard.length; i++) {
            matchedCard[i].classList.add('disabled');
        }
    });
}
for (let i=0; i <cards.length; i++) {
card = cards[i];
card.addEventListener('click', displayCard);
card.addEventListener('click', cardOpen);
}
/*
function moveCounter() {
    moves++;
    moves = counter.innerHTML;

    if(moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }

    if (moves > 8 && moves < 12) {
        for(i=0; i<3; i++) {
            if(i>1) {
                starts[i].style.visibility = 'collapse';
            }
        }
    }

    else if (moves > 13) {
        for(i=0; i<3; i++) {
            if(i>0) {
                starts[i].style.visibility = 'collapse';
            }
        }
    }
}

let second = 0; minute = 0; hour = 0;
let timer = document.getElementsByClassName('timer');
var interval;
function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = minute+' mins ' +second +' secs';
        second++;
        if(second == 60) {
            minute++;
            second=0;
        }
        if(minute==60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}



/* 'fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb' */