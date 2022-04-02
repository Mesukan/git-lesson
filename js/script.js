'use strict';

const check = document.querySelector('.check');
const again = document.querySelector('.again');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let highscore = document.querySelector('.highscore');

let score = 20;
let bestScore = 0;
let secretNumber = Math.trunc((Math.random() * 20) + 1);

function displayScore(message) {
    document.querySelector('.score').textContent = message;
}


again.addEventListener('click', resetGame);

function resetGame() {
    document.querySelector('body').style.backgroundColor = '#222';
    number.style.width = '15rem';
    message.textContent = 'Start guessing...';
    number.textContent = '?';
    score = 20;
    displayScore(score);
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc((Math.random() * 20) + 1);

}

check.addEventListener('click', () => {
    let guess = document.querySelector('.guess').value;
    
    guess = Number(guess);

    if (!guess) {
        message.textContent = '⛔ Podaj liczbę';
    
    } else if  (secretNumber === guess) {
        message.textContent = '🎉 Wygrałeś';
        number.textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        
        if (score > bestScore) {
            bestScore = score;
            highscore.textContent = score;
        }
        
        
    } else if (secretNumber !== guess) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? 'Za duża. Spróbuj jeszcze raz 💪' : 'Za mała. Spróbuj jeszcze raz 💪';
            score--;
            displayScore(score);
        
        } else {
            message.textContent = 'Game Over 💥';
            displayScore(0);

            document.querySelector('body').style.backgroundColor = 'red';
        }    
    }    
});


