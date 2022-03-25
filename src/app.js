/* eslint-disable */
import "bootstrap";
import "./style.css";

const heart = "♥";
const diamond = "♦";
const spade = "♠";
const club = "♣";
const suits = [heart, diamond, spade, club];
const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const top = document.querySelector(".top-card");
const bottom = document.querySelector(".bottom-card");
const val = document.querySelector(".card-value");
const buttonRandom = document.querySelector("#button1");

const generateCard = () => {
  let arrCards = [];

  for (let i of suits) {
    for (let j of values) {
      let newCard = [i, j];
      arrCards.push(newCard);
      val.innerHTML = [j];
    }
  }
  let arrCardsRandom = Math.floor(Math.random() * arrCards.length);
  let resultCards = arrCards[arrCardsRandom];

  top.innerHTML = bottom.innerHTML = resultCards[0];
  if (top.innerHTML === heart || top.innerHTML === diamond) {
    top.style.color = bottom.style.color = "red";
  } else {
    top.style.color = bottom.style.color = "black";
  }

  val.innerHTML = resultCards[1];
};

buttonRandom.addEventListener("click", generateCard);

window.onload = () => {
  generateCard();
};
