// user 1
// 1. first generate random number from 1-6

// we are adding +1 because the Math.floor will give only upto 5 in our specified range
const firstRandomNum = Math.floor(Math.random() * 6) + 1;

// 2. get the images from image folder
//  string with images/dice + depending on what number is being generated + it is going to append that number
// eg. lets say it generated number 4 --> diceImages/dice4.png
const firstDiceImage = "diceImages/dice" + firstRandomNum + ".png";

// target dom, target img tag and set souce to this firstDiceImage
// but here we are only targeting img tag inside user1 div
// so we use zero index [0], user 1 img only
const firstDiceImageValue = document
  .querySelectorAll("img")[0]
  .setAttribute("src", firstDiceImage);

// user 2
const secondRandomNum = Math.floor(Math.random() * 6) + 1;
const secondDiceImage = "diceImages/dice" + secondRandomNum + ".png";
const secondDiceImageValue = document
  .querySelectorAll("img")[1]
  .setAttribute("src", secondDiceImage);

// winner logic
if (firstRandomNum > secondRandomNum) {
  // we need to target span
  document.querySelector("p").innerHTML = "the winner is User 1";
} else if (firstRandomNum < secondRandomNum) {
  document.querySelector("p").innerHTML = "the winner is User 2";
} else {
  document.querySelector("p").innerHTML = "its a draw";
}
