/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

  
let game;
const startButton = document.getElementById('btn__reset');

//starts game when button is clicked
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e.target);
    }
});


/*
Event listener to let players use their physical computer keyboard to enter guesses
*/

const keyboardKeys = document.querySelectorAll('.key');

document.addEventListener('keydown', (e) => {
        keyboardKeys.forEach(button => {
            if (button.textContent === e.key && button.disabled === false) {
                game.handleInteraction(button);
            } 
        });
    });


/*
Event listener to let players use the enter button to start the game
Disables enter button after initial press
*/

function gameStarted () {  
    return overlay.style.display === 'none';
};

document.addEventListener('keyup', (e) => {
    if (e.key == 'Enter' && !gameStarted()) {
        game = new Game();
        game.startGame();
    };
});
