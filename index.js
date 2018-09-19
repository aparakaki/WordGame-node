var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordBank = []

// var word = new Word();
// word.addLetter("notebook");
// console.log(word.getLetters())
function addWord() {
    var newWord = new Word();
    newWord.addLetter(wordBank)
}

inquirer.prompt([
    {
        name: "char",
        message: "Guess a letter: "
    }
]).then(function() {

})