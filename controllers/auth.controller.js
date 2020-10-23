const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('mongoose').model('User');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
    'signUp',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        async (username, password, done) => {
            try {
                const user = await UserModel.create({ username, password });

                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);

passport.use(
    'signIn',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ username: username });
                console.dir(username + "  " + password);
                console.dir(user);
                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }
                const validate = await user.isValidPassword(password);

                if (!validate) {
                    return done(null, false, { message: 'Wrong Password' });
                }
                return done(null, user, { message: 'Logged in Successfully' });
            } catch (error) {
                console.dir(error.message);
                return done(error);
            }
        }
    )
);

passport.use(
    new JWTstrategy(
        {
            secretOrKey: 'TOP_SECRET',
            jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);