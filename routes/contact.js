var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var contactMenu = [
        {title:"Home",link:"#page-top"}
    ];
    res.render('contact',
        { title: 'Ibrahim Goddi\'s Contact Page',
        menu: contactMenu});
});

module.exports = router;

