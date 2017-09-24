const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongooseUnique = require('mongoose-unique-validator');

//User Schema
const UserSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

UserSchema.plugin(mongooseUnique);

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback) {
    const query = {email: email};
    User.findOne(query, callback);
}

module.exports.registerUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) {
                console.log('Error hashing new User password...', err);
            }

            newUser.password = hash;

            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatched) => {
        if(err) {
            console.log('Error comparing password...', err);
        }

        callback(null, isMatched);
    });
}