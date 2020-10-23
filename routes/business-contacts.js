var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var businessContactsMenu = [
    ];
    res.render('business-contacts',
        {
            title: 'Ibrahim Goddi\'s Business Contacts Page',
            menu: businessContactsMenu
        });
});

module.exports = router;