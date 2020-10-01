// card  options

const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// Making the Board

function createBoard() {
  for (var i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", "images/Capture.PNG");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);

    grid.appendChild(card);
  }
}

// check for matches

function checkForMatch() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/Capture.PNG");
    cards[optionTwoId].setAttribute("src", "images/Capture.PNG");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/Capture.PNG");
    cards[optionTwoId].setAttribute("src", "images/Capture.PNG");
  }

  cardsChosenId = [];
  cardsChosen = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    $("button").css("opacity", "1");
    resultDisplay.textContent = "You Won !!!!";
  }

  $('button').on('click' , function () {
    location.reload();
  })

}

// Flip Card

function flipCard() {
  var cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();
