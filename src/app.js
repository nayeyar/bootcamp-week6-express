const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send(`This is a ${req.method} method`)
})

module.exports = app;