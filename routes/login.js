var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var loginMenu = [
    ];
    res.render('login',
        {
            title: 'Ibrahim Goddi\'s Login Page',
            menu: loginMenu,
            topLink: '/'
        });
});

module.exports = router;