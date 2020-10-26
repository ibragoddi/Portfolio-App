var express = require('express');
var router = express.Router();
var contacts = require('../controllers/contacts.controller');

router.route('/')
    .post(contacts.create);
router.route('/:contactId')
    .patch(contacts.update)
    .delete(contacts.delete);


router.get('/', async function(req, res, next) {
    var contactsVar = await contacts.list();
    res.render('business-contacts',
        {
            title: 'Ibrahim Goddi\'s Business Contacts Page',
            contacts: contactsVar
        });
});

module.exports = router;