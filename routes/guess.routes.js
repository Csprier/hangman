const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const guess = req.body.guessInput;
    res.send(`You guessed '${guess}'!`);
});

module.exports = router;