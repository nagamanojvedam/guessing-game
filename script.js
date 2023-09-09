'use strict';

const changeQuestionText = text =>
  (document.querySelector('.question-text').textContent = text);

const changeGameText = text =>
  (document.querySelector('.game-info-text').textContent = text);

const changeCurrentScore = text =>
  (document.querySelector('.current-score').textContent = text);

const changeHighScore = text =>
  (document.querySelector('.high-score').textContent = text);

const getPlayerNumber = () =>
  Number(document.querySelector('.input-box').value);
const setPlayerNumber = () => (document.querySelector('.input-box').value = '');

const getGuessNumber = () =>
  Math.trunc(Math.random() * (MAX_RANGE - MIN_RANGE + 1)) + MIN_RANGE;

const MIN_RANGE = 1;
const MAX_RANGE = 20;

// let guessNumber = 0;
// for (let i = 0; i < 100; i++) {
//   guessNumber =
//     Math.trunc(Math.random() * (MAX_RANGE - MIN_RANGE + 1)) + MIN_RANGE;
//   console.log(guessNumber);
// }

let guessNumber = getGuessNumber();

let currentScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  let playerNumber = getPlayerNumber();

  if (currentScore > 0) {
    if (!playerNumber) {
      changeGameText('Not Number 😒');
    }
    if (playerNumber === guessNumber) {
      changeGameText('You Guessed right 👌');
      changeQuestionText(guessNumber);
      changeCurrentScore(currentScore);

      if (currentScore > highScore) {
        highScore = currentScore;
        changeHighScore(highScore);
      }
    }
    if (playerNumber !== guessNumber) {
      changeGameText(playerNumber > guessNumber ? 'Too High 👆' : 'Too Low 👇');
      currentScore--;
      changeCurrentScore(currentScore);
    }
  } else {
    changeGameText('You Lost 🥲, Play Again');
  }
});

document.querySelector('.play-again').addEventListener('click', () => {
  guessNumber = getGuessNumber();
  currentScore = 20;
  changeCurrentScore(currentScore);
  setPlayerNumber();
  changeQuestionText('?');
  changeGameText('Start Guessing...');
});
