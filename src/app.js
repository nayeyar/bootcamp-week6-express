const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
})

app.post('/users', async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.json(user.username);
    } catch (error) {
        next(error);
    }
})

app.get('/users/:username', async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: { username: req.params.username }
        });
        res.send(user);
    } catch (error) {
        next(error);
    }
})

// app.use('/static', express.static('public'));

// app.get('/', (req, res) => {
//     res.send(`This is a ${req.method} method`)
// })

module.exports = app;