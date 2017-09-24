const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

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

router.post('/signin', (req, res, next) => {
    console.log('Body coming in:', req.body);
    const email = req.body.credentials.email;
    const password = req.body.credentials.password;

    User.getUserByEmail(email, (err, user) => {
        if(err) {
            return res.json({
                success: false,
                message: 'Error',
                err: err
            });
        }

        if(!user) {
            return res.json({
                success: false,
                message: 'User not found'
            });
        }

        User.comparePassword(password, user.password, (err, isMatched) => {
            if(err) {
                return res.json({
                    success: false,
                    message: 'Error',
                    err: err
                });
            }
            if(isMatched) {
                const token = jwt.sign({user:user}, config.secret, {
                    expiresIn: 1800
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    message: 'Logged In',
                    user: {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    }
                });
            } else {
                return res.json({
                    success: false,
                    message: 'Wrong Password'
                });
            }
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;