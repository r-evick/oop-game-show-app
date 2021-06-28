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


};