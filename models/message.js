const mongoose = require('mongoose');
const User = require('./user');

const MessageSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

MessageSchema.post('remove', function(message) {
    console.log(message);
    User.findById(message.user, (err, user) => {
        console.log(user);
        user.messages.pull(message);
        user.save();
        console.log(user);
    });
});

const Message = module.exports = mongoose.model('Message', MessageSchema);

module.exports.addMessage = function(newMessage, callback) {
    newMessage.save(callback);
}

module.exports.getMessages = function(callback) {
    Message.find(callback);
}