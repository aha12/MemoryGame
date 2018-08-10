let card = document.getElementsByClassName('card');

let cards = [...card];

let deck = document.getElementById('card-deck');



let openedCards = [];

let moves = 0;

let counter = document.querySelector('.moves');

let stars = document.getElementsByClassName('fa-star');

let starList = document.getElementsByClassName('stars li');

let modal = document.getElementById('alert');

let matchedCard = document.getElementsByClassName('match');

let closeAlert = document.querySelector('.close');

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
         cards[i].classList.remove('show', 'open', 'match', 'disabled');   
        }

        //resetting number of moves
        moves = 0;
        counter.innerHTML = moves;

        //resetting star rating
        for (let i = 0; i < stars.length; i++) {
            stars[i].style.color = '#FFD700';
            stars[i].style.visibility = 'visible';
        }

        //resetting timer
        
    }


function cardOpen () {
    openedCards.push(this);
    let opened = openedCards.length;
    if(opened === 2) {
        moveCounter();
        if(openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
         
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

function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if (moves == 1) {
        sec = 0;
        min = 0;
        hr = 0
        startTimer();
    }
    

    // setting rating based on number of moves

    if (moves > 8 && moves < 12) {
        for(i = 0; i < 3; i++) {
            if(i > 1) {
                stars[i].style.visibility = 'collapse';
            }
        }
    }

    else if (moves > 13) {
        for(i = 0; i < 3; i++) {
            if(i > 0) {
                stars[i].style.visibility = 'collapse';
            }
        }
    }
}


let sec = 0; min = 0; hr = 0;
let timer = document.querySelector('.timer');
var interval;
function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = min+' mins ' +sec +' secs';
        sec++;
        if(sec == 60) {
            min++;
            sec=0;
        }
        if(min==60) {
            hr++;
            min = 0;
        }
    }, 1000);
}

function congrats () {
    if (matchedCard.length == 16) {
        clearInterval(interval);
        finalTime = timer.innerHTML;

        modal.classList.add('show');

        let starRating = document.querySelector('.stars').innerHTML;

        document.getElementById('finalMove').innerHTML = moves;
        document.getElementById('starRating').innerHTML = starRating;
        document.getElementById('totalTime').innerHTML = finalTime;
    }
}

for (let i=0; i <cards.length; i++) {
card = cards[i];
card.addEventListener('click', displayCard);
card.addEventListener('click', cardOpen);
}




    /* sec = 0;
        min = 0;
        hr = 0;
        let timer = document.querySelector('.timer');
        timer.innerHTML = '0 mins 0 secs';
        clearInterval(interval);
        */
/* 'fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb' */