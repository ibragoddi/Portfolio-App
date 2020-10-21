const config = require('./env/development');
const mongoose = require('mongoose');
module.exports = function() {
    const db = mongoose.connect(config.db);
    require('../models/user.model');
    return db;
};