var express = require('express');
var router = express.Router();

var users = require('../controllers/users.controller');

router.route('/')
      .post(users.create)
      .get(users.list);

module.exports = router;
