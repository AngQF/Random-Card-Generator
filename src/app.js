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

//PRUEBA2
// if(suits[suitsIndex] === heart){ suits = [diamond, spade, club]}
// return suits[suitsIndex];
// } else if (suits[suitsIndex] === diamond) {
//   suits = [heart, spade, club];
//   return suits[suitsIndex];
// } else if (suits[suitsIndex] === spade) {
//   suits = [heart, diamond, club];
//   return suits[suitsIndex];
// } else {
//   suits = [heart, diamond, spade];
//   return suits[suitsIndex];
// }
// };

// const generateValue = () => {
//   const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

//   const valuesIndex = Math.floor(Math.random() * values.length);

//   //PRUEBA
//   // const counts = {};
//   // for (let i of values) {
//   //   if (counts[i] === undefined) {
//   //     counts[i] += values[valuesIndex];
//   //   } else if (counts[i].length - 1 === values[valuesIndex]) {
//   //     delete counts[i];
//   //   }
//   // }
//   return values[valuesIndex];
// };

buttonRandom.addEventListener("click", () => {
  generateCard(suits, values);
});

window.onload = () => {
  const top = document.querySelector(".top-card");
  const bottom = document.querySelector(".bottom-card");
  for (let i of suits) {
  }
  top.innerHTML = bottom.innerHTML = suits;
  if (top.innerHTML === heart || top.innerHTML === diamond) {
    top.style.color = bottom.style.color = "red";
  } else {
    top.style.color = bottom.style.color = "black";
  }

  const val = document.querySelector(".card-value");
  // val.innerHTML = generateValue();
};
