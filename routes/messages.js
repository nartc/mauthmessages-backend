const express = require('express');
const passport = require('passport');
const router = express.Router();
const mongojs = require('mongojs');

const Message = require('../models/message');
const User = require('../models/user');

router.post('/addMessage', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    User.findById(req.user._id, (err, user) => {
        if(err) {
            return res.json({
                success: false,
                msg: 'Error Occurred',
                err: err
            });
        }
        
        let newMessage = new Message({
            content: req.body.message.content,
            user: user
        });

        Message.addMessage(newMessage, (err, result) => {
            if(err) {
                return res.json({
                    success: false,
                    msg: 'Error adding message',
                    err: err
                });
            }

            user.messages.push(result._id);
            user.save();
            res.json({
                success: true,
                msg: 'New message added',
                message: result
            });
        });
    });
});

router.delete('/deleteMessage/:id', (req, res, next) => {
    Message.findById(req.params.id, (err, message) => {
        if(err) {
            return res.json({
                success: false,
                msg: 'Error Occurred',
                err: err
            });
        }
        if(!message) {
            return res.json({
                success: false,
                msg: 'no message found'
            });
        }
        message.remove((err, result) => {
            if(err) {
                return res.json({
                    success: false,
                    msg: 'Error Occurred',
                    err: err
                });
            }
            res.json({
                success: true,
                msg: 'deleted',
                message: result
            });
        });
    });
});



module.exports = router;