
const express = require('express');
const cors = require('cors');
const port = 3000;

// Create the app instance
const app = express();

// ===============================================================================================
// CORS
app.use(cors());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.options('*', cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ===============================================================================================
// Routers
const guessRouter = require('./routes/guess.routes');
app.use('/guess', guessRouter);

// Serve static files
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`The server is running on https://localhost:${port}`);
    // greetingAndRules();
});

module.exports = app;