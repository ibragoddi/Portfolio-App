var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');



var users = require('../controllers/users.controller');

router.route('/')
      .post(users.create)
      .get(users.list);
router.route('/:username')
    .patch(users.changePassword);
router.route('/signUp')
    .post([passport.authenticate('signUp', { session: false }),
        async (req, res, next) => {
            res.json({
                message: 'Signup successful',
                user: req.user
            });
        }]);

router.post(
    '/signIn',
    async (req, res, next) => {
        passport.authenticate(
            'signIn',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error('An error occurred.');

                        return next(error);
                    }

                    req.login(
                        user,
                        { session: false },
                        async (error) => {
                            if (error) return next(error);

                            const body = { _id: user._id, email: user.email };
                            const token = jwt.sign({ user: body }, 'TOP_SECRET');

                            return res.json({ token });
                        }
                    );
                } catch (error) {
                    return next(error);
                }
            }
        )(req, res, next);
    }
);

module.exports = router;
