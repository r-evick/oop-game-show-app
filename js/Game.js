/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


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
    
    overlay.style.display = 'none';  //hides start screen
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay(); 
};


handleInteraction() {


};

/** 
* Checks for winning move 
* @return {boolean} True if game has been won, false if game wasn't won 
*/ 

checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide');

    return hiddenLetters.length === 0;
};


/** 
* Increases the value of the missed property 
* Removes a life from the scoreboard 
* Checks if player has remaining lives and ends game if player is out 
*/ 

removeLife() {
    const liveHeart = document.querySelectorAll('img');
    liveHeart[this.missed].src = 'images/lostHeart.png';
    this.missed++;

    if (this.missed === 5) {
        this.gameOver(false);
    }
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
    } else {
        overlay.className = 'lose';
        message.textContent = `Sorry, you did not win. Better luck next time!`;
    }    
    
};




};