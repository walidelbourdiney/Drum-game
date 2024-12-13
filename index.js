"use strict";

// Select the title of the game
const title = document.getElementById("title");

// Select all the drum buttons
const drumButtons = document.querySelectorAll(".drum");

// Select the footer element
const footer = document.querySelector("footer");

// Declare variables for each button
const wButton = document.querySelector(".w");
const aButton = document.querySelector(".a");
const sButton = document.querySelector(".s");
const dButton = document.querySelector(".d");
const jButton = document.querySelector(".j");
const kButton = document.querySelector(".k");
const lButton = document.querySelector(".l");

drumButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let soundFile = "";
    if (button.classList.contains("w")) {
      soundFile = "sounds/tom-1.mp3";
    } else if (button.classList.contains("a")) {
      soundFile = "sounds/tom-2.mp3";
    } else if (button.classList.contains("s")) {
      soundFile = "sounds/tom-3.mp3";
    } else if (button.classList.contains("d")) {
      soundFile = "sounds/tom-4.mp3";
    } else if (button.classList.contains("j")) {
      soundFile = "sounds/snare.mp3";
    } else if (button.classList.contains("k")) {
      soundFile = "sounds/crash.mp3";
    } else if (button.classList.contains("l")) {
      soundFile = "sounds/kick-bass.mp3";
    }
    let audio = new Audio(soundFile);
    audio.play();
  });
});
