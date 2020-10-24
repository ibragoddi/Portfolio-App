var express = require('express');
var router = express.Router();
var contacts = require('../controllers/contacts.controller');

router.route('/')
    .post(contacts.create);

router.get('/', function(req, res, next) {
    var contactsTmp = contacts.list();
    console.dir(contactsTmp);
    var contactsVar = [
        { forename: "George", surname: "McKinsey", phoneNumber: "456-231-1795", email: "george-mk@my.ey.tn"},
        { forename: "Pascal", surname: "Stutart", phoneNumber: "893-460-1132", email: "pascast@my.email.com"},
        { forename: "Steven", surname: "Alonso", phoneNumber: "789-123-4556", email: "stev.alonso@gmail.com"},
        { forename: "Roberto", surname: "Hamadi", phoneNumber: "123-236-7139", email: "robert-hamadi@yahoo.com"},
        { forename: "Ali", surname: "Ben Ammar", phoneNumber: "896-314-5072", email: "ali-ben-am@hotmail.com"}
    ];
    res.render('business-contacts',
        {
            title: 'Ibrahim Goddi\'s Business Contacts Page',
            contacts: contactsVar
        });
});

module.exports = router;