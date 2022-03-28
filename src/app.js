/* eslint-disable */
import { afterWrite } from "@popperjs/core";
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
const btnRandom = document.querySelector("#button1");
const btnReset = document.querySelector("#button2");

const generateCard = () => {
  let arrCards = [];

  for (let i of suits) {
    for (let j of values) {
      let newCard = [i, j];
      arrCards.push(newCard);
      arrCards.sort(() => Math.random() - 0.5);
    }
  }
  console.log(arrCards.length);

  top.innerHTML = bottom.innerHTML = arrCards[0][0];
  if (top.innerHTML === heart || top.innerHTML === diamond) {
    top.style.color = bottom.style.color = "red";
  } else {
    top.style.color = bottom.style.color = "black";
  }

  val.innerHTML = arrCards[0][1];
};

let countClick = 0;
btnRandom.addEventListener("click", () => {
  generateCard();
  countClick += 1;
  if (countClick === 51) {
    btnRandom.disabled = true;
  }
  if (btnRandom.disabled == true) {
    setTimeout(function() {
      alert("Ya mostró todo");
    }, 1000);
  }
});

btnReset.addEventListener("click", () => {
  location.reload();
});

window.onload = () => {
  generateCard();
};
