function hangman() {
    // ===============================================================================================
    const randomChoice = require('./utility/randomChoice');
    const counter = require('./utility/counter');

    // ===============================================================================================
    // Create word list
    word_list = ["pickles", "stank", "heck", "meat", "bologna", "apple", "banana"]

    // Randomly choose a word
    const random_word = randomChoice(word_list);

    // Define the maps
    const random_word_map = counter(random_word);
    const user_guesses = counter("");

    // Define how many choices a player gets
    let chance_count = 3;

    // Create the board
    let board = [];
    for(const letter of random_word) {
        board.push("_");
    }
    console.log(board);

    // ===============================================================================================
    // Main loop
    // ===============================================================================================
    // const guessInput = document.querySelector('guess-input');
    // const guessButton = document.querySelector('guess-button')
    // guessButton.addEventListener('click', captureValue);








}; // End of Function

module.exports = hangman;

/*
    for (const letter of random_word) {
        while(true) {
            // Display remaining chances
            console.log(`You have ${chance_count} chances remaining!`);

            // Has the user spelled the word with all their guesses?
                // If yes, win the game

            // Has the user run out of chances to guess?
                // If yes, lose the game

        } // End of While Loop
    }; // End of For Loop
*/