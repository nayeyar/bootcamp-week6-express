const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/users', usersRouter);


// app.use('/static', express.static('public'));

// app.get('/', (req, res) => {
//     res.send(`This is a ${req.method} method`)
// })

module.exports = app;