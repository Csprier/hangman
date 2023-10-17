const express = require('express');
const router = express.Router();
const hangman = require('../hangman');

router.post('/', (req, res) => {
    const guess = req.body.guessInput;
    res.send(`You guessed '${guess}'!`);
    hangman();
});

module.exports = router;