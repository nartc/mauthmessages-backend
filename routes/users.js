const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Register
router.post('/addUser', (req, res, next) => {
    let newUser = new User({
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        password: req.body.user.password
    });

    console.log('New User', newUser);

    User.registerUser(newUser, (err, user) => {
        if(err) {
            res.json({
                success: false,
                message: 'Failed to register user',
                err: err
            });
        } else {
            res.json({
                success: true,
                message: 'User registered',
                user: user
            });
        }
    });
});

module.exports = router;