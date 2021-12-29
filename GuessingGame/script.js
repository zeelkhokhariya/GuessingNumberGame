"use strict";

//Let's get the mysterious number
let mysteriousNumber = Math.floor(Math.random() * 20) + 1;

let checkButton = document.querySelector(".check");
let againButton = document.querySelector(".again");
checkButton.addEventListener("click", function() {
    let userInput = Number(document.querySelector(".guess").value);
    let score = Number(document.querySelector(".score").textContent);
    let highScore = Number(document.querySelector(".highscore").textContent);
    if (userInput === mysteriousNumber) {
        displayMessage("😄 Correct Answer! You Win🍾");
        document.querySelector("body").style.backgroundColor = "green";
        checkButton.disabled = true;
        document.querySelector(".number").textContent = mysteriousNumber;
        if (highScore < score) {
            highScore = score;
            document.querySelector(".highscore").textContent = String(highScore);
        }
    } else {
        if (userInput > mysteriousNumber) {
            displayMessage("📈 Too High!");
            score--;
        } else {
            displayMessage("📉 Too Low!");
            score--;
        }
    }
    if (score > 0) {
        document.querySelector(".score").textContent = String(score);
    } else {
        document.querySelector(".score").textContent = 0;
        displayMessage("😢You Lost! Try Again!");
        checkButton.disabled = true;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".number").textContent = mysteriousNumber;
    }
});

againButton.addEventListener("click", function() {
    checkButton.disabled = false;
    document.querySelector(".score").textContent = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    mysteriousNumber = Math.floor(Math.random() * 20) + 1;
});

let displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};