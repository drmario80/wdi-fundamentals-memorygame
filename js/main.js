//console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* ...from ex 8...
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/

/* ... commented out for part 10
var cards = ["queen","queen","king","king"];
*/

// ...Part 10-cards array holding objects
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
},
];

cardsInPlay = [];

// first user card flipped
var cardOne;

/* ...from ex 8...
cardOne = cards[0];

add the first card to the empy cardsInPlay array
cardsInPlay.push(cardOne); */

// second user card flipped
var cardTwo;
cardTwo = cards[2];

/* ...from ex 8...
... add the second card to the  cardsInPlay array
cardsInPlay.push(cardTwo); */

// console.log(cardsInPlay.length);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[2]) {
    alert("You found a match");
  } else {
    alert("Try Again");
  }
};

// ... check for matching cards
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
 console.log("You found a match!");
 } else {
 // console.log("Sorry, try again.");
 alert("Sorry, try again.");
 }
}

var flipCard = function (cardId) {
  checkForMatch();
  console.log("User flipped " + cards[cardId].rank)
  cardsInPlay.push(cards[cardId].rank)
// ..Next 2 lines added for step 10
  console.log("User flipped " + cards[cardId].cardImage)
  console.log("User flipped " + cards[cardId].suit)
};

// ..added for exercise 11
/*var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img')
    cardElement.setAttribute('src', 'images/back.png')
    cardElement.setAttribute('data-id', i)
    cardElement.document.addEventListener('click', flipCard())
    cardElement.appendChild(game-board)
};
*/

// Call the function function to simulate the user flipping a card.
/* ..commented out for ex 11
flipCard(0);
flipCard(2);
*/

// createBoard()
