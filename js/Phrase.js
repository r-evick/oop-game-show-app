/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/** 
* Display phrase on game board 
*/ 

// adds letter placeholders to the display when the game starts
addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');

    for(let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement('li');
      
      if (this.phrase[i] === ' ') {
          li.textContent = this.phrase[i];
          li.classList.add('space');  //add class 'space' to CSS if space
          ul.appendChild(li);
      } else {
          li.textContent = this.phrase[i];
          li.classList.add('hide');  //hides all letters
          li.classList.add('letter');  //add class 'letter' to CSS if letter
          li.classList.add(this.phrase[i]);
          ul.appendChild(li); 
      }
    }  
};


/** 
* Checks if passed letter is in phrase 
* @param (string) letter - Letter to check 
*/ 

checkLetter(letter) {
    if (this.phrase.includes(letter)) {  //the includes() method was used from https://www.w3schools.com/Jsref/jsref_includes.asp
        return true;
    } else {
        return false;
    }
};


/** 
* Displays passed letter on screen after a match is found 
* @param (string) letter - Letter to display 
*/

showMatchedLetter(letter) {
    const matchedLetter = document.getElementsByClassName(letter);

    for (let i = 0; i < matchedLetter.length; i++) {
        matchedLetter[i].classList.remove('hide');
        matchedLetter[i].classList.add('show');
    }
};

};
