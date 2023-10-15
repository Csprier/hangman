const greetingAndRules = () => {
    console.log("======================================================================================");
    console.log("= Greetings! Welcome to Hangman! Save the man's life by guessing correctly! Good luck! ");
    console.log("======================================================================================");
    console.log("= Rules:");
    console.log("= Players get 3 chances to guess.");
    console.log("= There is no penalty for correct guesses, or repeated guesses.");
    console.log("= Every missed letter is -1 chance. Get to 0 and the man hangs!");
    console.log("======================================================================================");
};

module.exports = greetingAndRules;