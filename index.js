var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordBank = ["Silence of the Lambs", "Transformers", "The Incredibles", "Lady Bird", "Shutter Island",
                "Slumdog Millionaire", "Scream", "Top Gun", "Crazy Rich Asians", "The Goonies"]
var newWord = new Word();
var wordInPlay;     //word that is currently being played
var usedChars;      //keeps track of the characters guessed by user
var chances;        //guesses per word
var usedIndex;      //keeps track of the words used from the wordbank, to avoid repeats
var gameCount = 0;  //keeps track of the number of words played, to decided when the game is over (run out of words)


function addWord() {
    chances = 10;
    usedChars = [];
    wordInPlay = wordBank[getIndex()];
    newWord.addLetter(wordInPlay);
    gameCount++;
    console.log(newWord.getLetters());
}

function getIndex() {
    var index;
    var done = false;   //if unique index has been created
    while(!done) {
        index = Math.floor(Math.random() * wordBank.length);
        if(usedIndex.indexOf(index) < 0) {
            usedIndex.push(index);
            return index;
        }
    }
}

addWord();
runGame();

function runGame() {
    inquirer.prompt([
        {
            name: "char",
            message: "Guess a letter: "
        }
    ]).then(function(answer) {
        // console.log(answer.char);
        if(usedChars.indexOf(answer.char) < 0) {
            newWord.charGuess(answer.char);
            usedChars.push(answer.char);

            if (answer.char.length > 1) {
                console.log("\r\nInvalid input. Try again.\r\n");
            }
            else if(wordInPlay.toLowerCase().indexOf(answer.char.toLowerCase()) < 0) {
                chances--;
                console.log("\r\nINCORRECT!\r\n" + chances + " guesses remaining!\r\n");
            }
            else {
                console.log("\r\nCORRECT!")
            }
        }
        else {
            console.log("\r\nLetter has already been used\r\n")
        }

        console.log(newWord.getLetters() + "\r\n");
        
        if (chances < 1) {
            console.log("You ran out of guesses!");

            inquirer.prompt([
                {
                    type: "confirm",
                    name: "userchoice",
                    message: "Play again?"
                }
            ]).then(function(answer) {
                    if(answer.userchoice) {
                        addWord();
                        runGame();
                    }
            })
        }
        else if(!newWord.wordCompleted()) {
            runGame();
        }
        else {
            console.log("You got it right!");
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "userchoice",
                    message: "Play again?"
                }
            ]).then(function(answer) {
                    if(answer.userchoice) {
                        addWord();
                        runGame();
                    }
            })
        }
    })
}
