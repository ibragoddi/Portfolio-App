// TO switch between "development config" and "production config"
const env = process.env.NODE_ENV || 'development';
module.exports = require(`./env/${env}`);