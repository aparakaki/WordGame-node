var Letter = require("./Letter.js");

function Word() {
    this.letterArray = [],
    this.addLetter = function(word) {
         for (var i = 0; i < word.length; i++) {
            this.letterArray.push(new Letter(word[i]));
        }
    },
    this.getLetters = function() {
        let wordStr = "";
        for (let i = 0; i < this.letterArray.length; i++) {
            wordStr += this.letterArray[i].charReturn() + " ";
        }
        return wordStr
    },
    this.charGuess = function(char) {
        for (let i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].userGuess(char);
        }
    }, 
    this.wordCompleted = function() {
        for (let i = 0; i < this.letterArray.length; i++) {
            if(!letterArray[i].guess) {
                return false;
            }
        }
        return true;
    }
}
 
module.exports = Word;