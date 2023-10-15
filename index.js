
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const greetingAndRules = require('./utility/greeting');

// /* Test Code for counter */
// const counter = require('./utility/counter');
// // const word = ['w', 'u', 't'];
// const word = "wut";
// const c = counter(word);

// for (const [element, count] of c.entries()) {
//     console.log(`${element}: ${count}`)
// }

app.listen(port, () => {
    console.log(`The server is running on https://localhost:${port}`);
    greetingAndRules();
});