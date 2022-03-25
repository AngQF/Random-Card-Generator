/* eslint-disable */
import "bootstrap";
import "./style.css";

const heart = "♥";
const diamond = "♦";
const spade = "♠";
const club = "♣";
const suits = [heart, diamond, spade, club];
const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const top = document.querySelector(".top-card");
const bottom = document.querySelector(".bottom-card");
const val = document.querySelector(".card-value");
const buttonRandom = document.querySelector("#button1");

const generateCard = (arr1, arr2) => {
  let arrCards = "";

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arrCards = arr1[i] + arr2[j];

      top.innerHTML = bottom.innerHTML = arr1[i];
      if (top.innerHTML === heart || top.innerHTML === diamond) {
        top.style.color = bottom.style.color = "red";
      } else {
        top.style.color = bottom.style.color = "black";
      }

      val.innerHTML = arr2[j];
    }
    return arrCards;
  }
};

buttonRandom.addEventListener("click", () => {
  generateCard(suits, values);
});

window.onload = () => {
  generateCard(suits, values);
};
