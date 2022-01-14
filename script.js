'use strict';

console.log(document.querySelector('.message').textContent);

//DOM not part of JAVASCRIPT language, but part of API which are libraries written in JS available for use, can access DOM using JS

//------------------SELECT AND MANIPULATE ELEMENTS

//start with document, select message element, get text content, change it

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //use .value for inputs
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//RESET GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Handling Click Events
//select check button
//isolate action for check button by attaching event handler and expression, create function for response
document.querySelector('.check').addEventListener('click', function () {
  //response for check button action
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHEN NO INPUT
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //highscore changes
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    //CSS changes
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //WHEN GUESS TOO HIGH OR LOW
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   //WHEN GUESS TOO LOW
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'Too low!';
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     //RUN OUT OF GUESSES
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
});
