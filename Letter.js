function Letter(char) {
    this.char = char,
    this.guess = false,
    this.charReturn = function() {
        if(this.guess) {
            return this.char;
        }
        else {
            return "_";
        }

    },
    this.userGuess = function(userChar) {
        if(userChar === this.char) {
            this.guess = true;
        }
    }
}

module.exports = Letter;