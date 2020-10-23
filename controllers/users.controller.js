const User = require('mongoose').model('User');
const argon2 = require('argon2');

exports.create = async function(req, res, next) {
    const user = new User(req.body);

    try {
        user.password = await argon2.hash(user.password, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16,
            hashLength: 64,
            saltLength: 32,
            parallelism: 2
        });
        user.save((err) => {
            if (err) {
                return next(err);
            } else {
                res.status(200).json(user);
            }
        });
    } catch (err) {
        return next(err);
    }

};

exports.changePassword = async function(req, res, next){
    User.findOne({username : req.params.username}, async (err, user) => {
        if (err) {
            return next(err);
        } else {
            try {
                //
                if (await argon2.verify(user.password, req.body.oldPassword)){
                    user.password = await argon2.hash(req.body.newPassword, {
                        type: argon2.argon2id,
                        memoryCost: 2 ** 16,
                        hashLength: 64,
                        saltLength: 32,
                        parallelism: 2
                    });
                    user.save((err) => {
                        if (err) {
                            return next(err);
                        } else {
                            res.status(200).json(user);
                        }
                    });
                } else{
                    res.status(401).json({"error" : "Unauthorized Access"});
                }

            } catch (err) {
                return next(err);
            }
        }
    });
}

exports.list = function(req, res, next) {
    User.find({}, (err, users) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(users);
        }
    });
};
