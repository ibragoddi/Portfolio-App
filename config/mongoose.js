const config = require('./config');
const mongoose = require('mongoose');
module.exports = function() {
    const db = mongoose.connect(config.db);
    require('../models/user.model');
    require('../models/contact.model');
    return db;
};