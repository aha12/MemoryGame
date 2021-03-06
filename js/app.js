let card = document.getElementsByClassName('card');

let cards = [...card];

const deck = document.getElementById('card-deck');

let openedCards = [];

let moves = 0;

let counter = document.querySelector('.moves');

let stars = document.getElementsByClassName('fa-star');

let starList = document.querySelectorAll('.stars li');

let modal = document.getElementById('alert');

let matchedCard = document.getElementsByClassName('match');

let closeAlert = document.querySelector('.close');


// calls displayCard function for each card
for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', displayCard);

};

//lets player click on cards and turn them over
function displayCard () {
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('disabled');
};



//shuffles location of cards each time the page is reloaded
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

    
    //resets the game
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
        second = 0;
        minute = 0;
        hour = 0;
        let timer = document.querySelector('.timer');
        timer.innerHTML = '0 mins 0 secs';
        clearInterval(interval);
        
    }

// lets player turn over two cards at a time, and keeps track of matched and unmatched cards
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
//when cards are matched, function leaves them turned over
function matched() {
    openedCards[0].classList.add('match');
    openedCards[1].classList.add('match');
    openedCards[0].classList.remove('show', 'open');
    openedCards[1].classList.remove('show', 'open');
    openedCards = [];
}

//when cards are unmatched, function flips them back over
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
// counts number of moves; 2 clicks equal one move.
function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    //start timer on first move
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

// timer specifications
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
// modal pops up when all cards are matched
function congrats () {
    if (matchedCard.length == 16) {
        clearInterval(interval);
        finalTime = timer.innerHTML;

        modal.classList.add('show');

        let starRating = document.querySelector('.stars').innerHTML;

        document.getElementById('finalMove').innerHTML = moves;
        document.getElementById('starRating').innerHTML = starRating;
        document.getElementById('totalTime').innerHTML = finalTime;

        closeModal();
    }
}

// closes the modal
function closeModal () {
    closeAlert.addEventListener('click', function(e) {
        modal.classList.remove('show');
        startGame();
    })
}

// offers player option to play again
function playAgain() {
    modal.classList.remove('show');
    startGame();

}


// loop uses event listeners to call necessary functions for each click.
for (let i=0; i <cards.length; i++) {
card = cards[i];
card.addEventListener('click', displayCard);
card.addEventListener('click', cardOpen);
card.addEventListener('click', congrats);
}
