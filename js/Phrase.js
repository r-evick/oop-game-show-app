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


};
