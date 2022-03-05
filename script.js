`use strict`;

const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
const rollBtn = document.querySelector(`#roll-button`);
const newBtn = document.querySelector(`.btn--new`);
const dice1El = document.querySelector(`#dice1`);
const dice2El = document.querySelector(`#dice2`);

let score0 = 0;
let score1 = 0;
let istoric;

score0El.textContent = score0;
score1El.textContent = score1;

dice1El.classList.add(`hidden`);
dice2El.classList.add(`hidden`);

let playerActive = 0;
player0.classList.add(`player--active`);
player1.classList.remove(`player--active`);

const newGame = function () {
  score0 = 0;
  score1 = 0;
  playerActive = 0;
  player0.classList.add(`player--active`);
  player1.classList.remove(`player--active`);
  player0.classList.remove(`player--winner`);
  player1.classList.remove(`player--winner`);
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice1El.classList.add(`hidden`);
  dice2El.classList.add(`hidden`);
};

newBtn.addEventListener(`click`, function () {
  location.reload();
});

rollBtn.addEventListener(`click`, function () {
  dice1El.classList.remove(`hidden`);
  dice2El.classList.remove(`hidden`);

  let dice1Random = Math.trunc(Math.random() * 6) + 1;
  let dice2Random = Math.trunc(Math.random() * 6) + 1;

  console.log(dice1Random, dice2Random);

  dice1El.src = `dice-${dice1Random}.png`;
  dice2El.src = `dice-${dice2Random}.png`;

  if (playerActive === 0) {
    score0El.textContent = dice1Random + dice2Random;

    score0 = dice1Random + dice2Random;
    console.log(score0);
    if (dice1Random === 1 && dice2Random === 1) {
      player0.classList.add(`player--winner`);
      istoric = `[${score0} - ${score1}]`;
      document.querySelector(`.vector`).textContent += istoric;
    } else {
      playerActive = 1;
      player0.classList.remove(`player--active`);
      player1.classList.add(`player--active`);
    }
  } else if (playerActive === 1) {
    score1El.textContent = dice1Random + dice2Random;

    score1 = dice1Random + dice2Random;
    console.log(score1);
    if (dice1Random === 1 && dice2Random === 1) {
      player1.classList.add(`player--winner`);
      istoric = `[${score0} - ${score1}]`;
      document.querySelector(`.vector`).textContent += istoric;
    } else {
      if (score0 < score1) {
        player1.classList.add(`player--winner`);
        istoric = `[${score0} - ${score1}]`;
        document.querySelector(`.vector`).textContent += istoric;
      } else if (score0 === score1) {
        //adaugam new game rule
        player0.classList.add(`player--winner`);
        player1.classList.add(`player--winner`);
        istoric = `[${score0} - ${score1}]`;
        document.querySelector(`.vector`).textContent += istoric;
      } else {
        player0.classList.add(`player--winner`);
        istoric = `[${score0} - ${score1}]`;
        document.querySelector(`.vector`).textContent += istoric;
      }
    }
    playerActive = 2;
  } else if (playerActive === 2) newGame();
});
