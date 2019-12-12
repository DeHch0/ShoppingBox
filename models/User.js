const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const usersSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: [true, 'User input is empty !'],
        unique: [true, 'Username is already taken !'],
    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: [true, 'email input is empty !'],
        unique: [true, 'email is already taken !'],
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: [true, 'Password input is empty !'],
    },
    orders: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product',
    }],
    balance: {
        type: mongoose.SchemaTypes.Number,
    },
    admin: {
        type: mongoose.SchemaTypes.Boolean,
        default: false
    }
});

usersSchema.methods = {
    matchPassword: function(password) {

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, this.password, (err, data) => {
                if (err) { reject(err); return; }
                resolve(data);
            });
        });
    }
};

usersSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) { next(err); return; }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return; }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = mongoose.model('Users', usersSchema);