const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    forename: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});



mongoose.model('Contact', contactSchema);
