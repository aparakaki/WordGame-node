function Letter(char, bool) {
    this.char = char,
    this.guess = bool,
    this.charReturn = function() {
        if(this.char === " ") {
            return " ";
        }
        else if(this.guess) {
            return this.char;
        }
        else {
            return "_";
        }

    },
    this.userGuess = function(userChar) {
        if(userChar.toLowerCase() === this.char.toLowerCase()) {
            this.guess = true;
        }
    }
}

module.exports = Letter;