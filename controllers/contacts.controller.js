const Contact = require('mongoose').model('Contact');

exports.create = async function(req, res, next) {
    const contact = new Contact(req.body);

    try {
        contact.save((err) => {
            if (err) {
                return next(err);
            } else {
                res.status(200).json(contact);
            }
        });
    } catch (err) {
        return next(err);
    }
};

exports.list = function() {
    Contact.find().lean().exec(function (err, contacts){
        return contacts;
    });
};
