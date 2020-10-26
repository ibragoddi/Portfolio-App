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

exports.list = async function() {
    const contacts = await Contact.find();
    return contacts;
};

exports.update = async function(req, res, next){
    Contact.findByIdAndUpdate(
        req.params.contactId,

        req.body,

        {new: true},

        (err, contact) => {
            // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(contact);
        }
    )
}

exports.delete = async function(req, res, next){
    Contact.findByIdAndRemove(req.params.contactId, (err, contact) => {
        if (err) return res.status(500).send(err);

        const response = {
            message: "Contact successfully deleted",
            id: contact._id
        };
        return res.status(200).send(response);
    });
}
