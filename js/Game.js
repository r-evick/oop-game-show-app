/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


/*
Creates button that will play and pause background music
Portions of code used were found at https://jsfiddle.net/hibbard_eu/enoqwg5b/
*/


let audio = new Audio('audio/background_music.mp3');
let button = document.getElementById('button');

let musicButton = document.createElement('button');
    musicButton.type = 'button';
    musicButton.innerHTML = 'Click to Play/Pause Music';
    document.body.appendChild(musicButton);

musicButton.addEventListener("click", (e) => {
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
});

            
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }


/** 
* Creates phrases for use in game 
* @return {array} An array of phrases that could be used in the game 
*/ 

createPhrases() {
    const phrase = [
        new Phrase('Theres no place like home'),
        new Phrase('Youre gonna need a bigger boat'),
        new Phrase('Houston we have a problem'),
        new Phrase('Why so serious'),
        new Phrase('Say hello to my little friend'),
    ];

    return phrase;
};


/** 
* Selects random phrase from phrases property 
* @return {Object} Phrase object chosen to be used 
*/ 

getRandomPhrase() {  
    const randomPhraseFunction = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomPhraseFunction];

    return randomPhrase;
};


/** 
* Begins game by selecting a random phrase and displaying it to user 
*/ 

startGame() {
    const overlay = document.getElementById('overlay');
    const hearts = document.querySelectorAll('#scoreboard ol img');

    hearts.forEach(heart => {  //replaces old hearts with animated gif 
        heart.src = 'images/liveHeartAnimate.gif'
    });
    
    overlay.style.display = 'none';  //hides start screen
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay(); 
};


/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

handleInteraction(button) {
    const buttonText = button.textContent;

    button.disabled = true;
    
    if (this.activePhrase.checkLetter(buttonText)) {
        button.classList.add('chosen');
        this.activePhrase.showMatchedLetter(buttonText);

        if (this.checkForWin()) {
            this.gameOver(true);
        }
    } else {
        button.classList.add('wrong');
        this.removeLife();
    }  
};


/** 
* Checks for winning move 
* @return {boolean} True if game has been won, false if game wasn't won 
*/ 

checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');

    return hiddenLetters.length === 0;  //when there no no hidden letters left the phrase is solved
};


/** 
* Increases the value of the missed property 
* Removes a life from the scoreboard 
* Checks if player has remaining lives and ends game if player is out 
*/ 

removeLife() {
    let liveHeart = document.querySelectorAll('img');
    liveHeart[this.missed].src = 'images/lostHeart.png';
    this.missed++;
  
    //changes background color based off of how many misses
    if (this.missed == 2) {
        document.body.style.backgroundColor = '#FCFF9F';
    };
    
    if (this.missed == 3) {
        document.body.style.backgroundColor = '#FFD9B3';
    };
    
    if (this.missed == 4) {
        document.body.style.backgroundColor = '#FF8080';
    };
    
    if (this.missed == 5) {
        this.gameOver(false);
    };
};


/** 
* Displays game over message 
* @param {boolean} gameWon - Whether or not the user won the game 
*/ 

gameOver(gameWon) {
    let message = document.getElementById('game-over-message');
    overlay.style.display = '';

    if  (gameWon) {
        overlay.className = 'win';
        message.textContent = `Congratulations, you won!`;
        this.gameReset();
    } else {
        overlay.className = 'lose';
        message.textContent = `Sorry, you did not win. Better luck next time!`;
        this.gameReset();
    }
};


//method used to reset game after win or loss
gameReset() {
    const buttons = document.querySelectorAll('.keyrow button');
    const hearts = document.querySelectorAll('#scoreboard ol img');
    const uls = document.querySelectorAll('#phrase ul');
        
        uls.forEach(ul => {
            ul.innerHTML = '';
        });
        
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.add('key');
            button.classList.remove('wrong');
            button.classList.remove('chosen');
            document.body.style.backgroundColor = 'white';
        });

        hearts.forEach(heart => {
            heart.src = 'images/liveHeartAnimate.gif'
        });

        this.missed = 0;        
};

};