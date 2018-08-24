Project Dependencies:
- Resource/tutorial at: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
- DOM selectors: https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

index.html changes:
- added object type to each card.
- added the classes stars, deck, moves, timer, popup, close, overlay, message, content.
- added ids card-deck, alert, finalMove, totalTime, starRating, playAgain.
- called the functions startGame and playAgain with onclick.

app.css changes:
- set visibility for matched cards (.deck .card.match).
- set visibility for unmatched cards (.deck .card.unmatched).
- set appearance for congratulatory alert.

app.js additions:
- for loop calls on the displayCard function to allow player to click and turn cards over.
- shuffle function shuffles the cards randomly everytime the page reloads.
- function startGame():
    - starts with the shuffle function stored in the variable cardsShuffled.
    - for and for each loops are used to append turned over cards to a list.
    - number of moves are reset
    - number of stars are reset
    - timer is reset
- function cardOpen():
    - lets player open only two cards at a time.
    - calls on matched() and unmatched() functions.
    - matched() runs if the type of one card matches that of another (types added in index.html). Also leaves the cards open.
    - unmatched() is run if the types of two cards don't match. The cards are closed or turned back over.
- functions enable () and disable() control how many cards a player can open (which is two).
- function moveCounter():
    - counts number of moves player makes
    - determines star rating based on number of moves made.
    - calls the function startTimer() - which tracks how long it takes the player to win the game.
- function congrats ():
    - alerts player when they've matched all cards with:
        - a congratulations message.
        - their star rating.
        - how long it took to win the game.
        - ability to exit the alert.
        - option to play again.
- the functions cardOpen, displayCard and congrats are called at the end using event listeners.