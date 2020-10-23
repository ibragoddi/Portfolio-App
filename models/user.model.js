const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const argon2 = require('argon2');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await argon2.verify(user.password, password);

    return compare;
}

mongoose.model('User', UserSchema);
