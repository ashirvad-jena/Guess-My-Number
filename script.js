'use strict';

let luckyNumber = Math.trunc(Math.random() * 20) + 1;
console.log(luckyNumber);
let score = 20;
let highScore = 0;
// Elements
const bodyElement = document.querySelector('body');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.label-score');
const checkElement = document.querySelector('.check');
const highscoreElement = document.querySelector('.label-highscore');

const displayMessage = message =>
    (document.querySelector('.message').textContent = `${message}`);

checkElement.addEventListener('click', function () {
    const guessValue = document.querySelector('.guess').value;
    if (!guessValue) {
        displayMessage(`Please input number !!`);
    } else if (guessValue < luckyNumber) {
        displayMessage('📉  Low');
        score--;
    } else if (guessValue > luckyNumber) {
        displayMessage('📈  High');
        score--;
    } else {
        displayMessage('💋 Nailed it !!');
        bodyElement.style.backgroundColor = 'green';
        numberElement.textContent = `${guessValue}`;
        numberElement.style.width = '25rem';
        highScore = Math.max(score, highScore);
        highscoreElement.textContent = `🥇 Highscore: ${highScore}`;
    }
    if (score <= 0) {
        displayMessage('👎 You lost it !!');
        score = 0;
        bodyElement.style.backgroundColor = 'red';
    }
    scoreElement.textContent = `💯  Score: ${score}`;
});

document.querySelector('.again').addEventListener('click', function () {
    displayMessage(`Start guessing...`);
    score = 20;
    luckyNumber = Math.trunc(Math.random() * 20) + 1;
    numberElement.textContent = `?`;
    scoreElement.textContent = `💯  Score: ${score}`;
    document.querySelector(`.guess`).value = '';
    bodyElement.style.backgroundColor = `black`;
    numberElement.style.width = '15rem';
});
