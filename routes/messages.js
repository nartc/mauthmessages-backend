const express = require('express');
const passport = require('passport');
const router = express.Router();
const mongojs = require('mongojs');

const Message = require('../models/message');
const User = require('../models/user');

router.get('/messages', (req, res, next) => {
    Message.getMessages((err, messages) => {
        if(err) {
            return res.json({
                success: false,
                msg: 'Error Occurred',
                err: err
            });
        }
        res.json({
            success: true,
            msg: 'Messages fetched',
            messages: messages
        });
    });
});

router.post('/addMessage', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    User.findById(req.user._id, (err, user) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Error Occurred',
                err: {message: 'Blah blah blah'}
            });
        }

        if(!user) {
            res.json({
                success: false,
                msg: 'Not authenticated',
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
                    err: {message: 'blah blah'}
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

router.delete('/deleteMessage/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
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

        if(JSON.stringify(message.user) != JSON.stringify(req.user._id)) {
            return res.json({
                    success: false,
                    msg: 'Not authenticated',
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

router.patch('/editMessage/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
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
                msg: 'No message found',
                err: {message: 'Message not found'}
            });
        }

        if(JSON.stringify(message.user) != JSON.stringify(req.user._id)) {
            return res.json({
                    success: false,
                    msg: 'Not authenticated',
                   });
        }

        message.content = req.body.message.content;
        message.save((err, message) => {
            if(err) {
                return res.json({
                    success: false,
                    msg: 'Error Occurred',
                    err: err
                });
            }
            res.json({
                success: true,
                msg: 'Updated message',
                message: message
            });
        });
    });
});



module.exports = router;