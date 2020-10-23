# Portfolio Application
## Install Express
`npm install express -g`
## Install Express Generator
`npm install express-generator -g`
## Generate the application
`express -e portfolioApp`
## Go to project folder
`cd portfolioApp`
## Install dependencies
`npm install`
## Run command
`SET DEBUG=portfolioapp:* & npm start`
## Set custom logo
* add favicon.ico file under public/images folder
* add link tag with rel  (relation) attribute value icon nested in head tag of the index.egs html template file

## Configure TLS (Transport Layer Security)
To use https protocol, we need to configure the TLS protocol. 
By doing so, we ensure the confidential exchange of data between browser and server.
For development, we need to configure a local certification authority: mkcert.
### install mkcert 
For windows, we need to install the chocalatey package manager.
#### Install Chocolatey Package Manager
Start Windows Power Shell with administrator privileges and run the following command.

`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`

#### Install mkcert
First, we run the following command:
`choco install mkcert`

#### Install the root certificate
Second, we need to install the root certificate of the local certification authority and add it to the
trust stores of the local machine.
Run the command in cmd with administrator privileges:
`mkcert -install`

#### Install the development certificate:
Finally, we generate the development certificate:
`mkcert localhost 127.0.0.1 ::1`

### Configure https with nodeJS
We need to generate a strong Diffie-Hellman paramater:

`openssl dhparam -out dh-strong.pem 2048`

Edit the "www" file under "bin" folder with the following:

`var port = normalizePort(process.env.PORT || '3443');
 app.set('port', port);`

`const https=require("https"),
     fs= require ("fs"),
     helmet = require("helmet");`
     
`const options ={
   key: fs.readFileSync("./tls/localhost+2-key.pem"),
   cert: fs.readFileSync("./tls/localhost+2.pem"),
   dhparam: fs.readFileSync("./tls/dh-strong.pem")
 };`
   
`app.use(helmet());`

`var server = https.createServer(options,app);`

Here, the helmet package is used to ensure HSTS (Http Strict Transport Security) which hint the 
browser to use exclusively https protocol.

### Comment header in contact.ejs
`<!--
 File name: contact.ejs
 Student’s Name: Ibrahim Goddi
 StudentID: 301122092
 Date: Oct 7, 2020
  -->`
### Comment header in error.ejs  
`<!--
 File name: error.ejs
 Student’s Name: Ibrahim Goddi
 StudentID: 301122092
 Date: Oct 3, 2020
  -->`
### Comment header in index.ejs
`<!--
 File name: index.ejs
 Student’s Name: Ibrahim Goddi
 StudentID: 301122092
 Date: Oct 3, 2020
  -->`
### Comment header in scripts.js
`/*!
 File name: scripts.ejs
 Student’s Name: Ibrahim Goddi
 StudentID: 301122092
 Date: Oct 7, 2020
 */`
### Comment header in style.css
`/*!
 File name: style.css
 Student’s Name: Ibrahim Goddi
 StudentID: 301122092
 Date: Oct 3, 2020
 */` 
### Comment header in theme.css
`/*!
 File name: theme.css
 Student’s Name: Ibrahim Goddi
 StudentID: 301122092
 Date: Oct 7, 2020
 */`
### Partials for Contact file
I created a new file called "contact.ejs".
I wrote html code for contact form.
I crated a contact Route (contact.js) for the EJS template:
`router.get('/', function(req, res, next) {
     res.render('contact', { title: 'Ibrahim Goddi\'s Contact Page'});
 });`
I imported the contact router in "app.js" file using:
`var contactRouter = require('./routes/contact');`
I added the contact Route to the express app in "app.js" file using:
`app.use('/contact', contactRouter);`


### Partials for footer file
I created a new file called " footer.ejs" under partials and added the following:
`<footer class="footer bg-black small text-center text-white-50"><div class="container">Copyright © Ibrahim Goddi 2020</div></footer>`
I have also modified the file "index.ejs" with:
`<%- include('partials/footer') %>`
  
### Partials for header file
I have created the "header.ejs" file.
I have added the following code in it:
`<% menu.forEach(function(item) { %>
                     <li class="nav-item"><a class="nav-link js-scroll-trigger" href="<%=item.link%>"><%= item.title %></a></li>
                 <% }); %>`

### Adding image to "about me page"
Download the image "me.png" from internet and add the following code:
`<img class="img-fluid" src="/images/me.png" alt="Ibrahim Goddi" style="width: 350px" />`

### Modifying the contact page with the following:
`target="_blank">Click Here!</a></div>`

### Adding to the "contact.ejs" file the following:
`<%- include('partials/footer') %>`
Adding the following code for the three sections (Forename, Surname, Email):
`md-form input-group mb-3` 
Adding the following attribute to the same sections:
`placeholder="section-name"`
Adding the following code in the same sections:
`class="input-group-prepend"><span class="input-group-text" id="basic-addon1">section-name: </span>`

### Modify the "index.js" file with the following:
`var indexMenu = [
     {title:"About Me",link:"#aboutme"},
     {title: "Projects",link: "#projects"},
     {title: "Services",link: "#services"},
     {title: "Contact Me",link: "#contactme"}
   ];
   res.render('index', {
     title: 'Ibrahim Goddi\'s Personal Portfolio',
     menu: indexMenu
   });`

### Modify the style sheet "style.css" with the following:
`.special-background {
   /* This class makes the background transparent.*/
   background-color: rgba(245, 245, 245, 1);
   opacity: .4;
 }`
 
## Assignment 2

### Install Mongoose
`npm install mongoose --save `

### Configue Mongoose
`process.env.NODE_ENV = process.env.NODE_ENV || 'development';`

`const configureMongoose = require('./config/mongoose');`

`const db = configureMongoose();`

### Connecting to MongoDB and storing application variables
#### Add the following in Mongoose.js file
`const config = require('./config');`

 `const mongoose = require('mongoose');`
 
 `module.exports = function() {`
     `const db = mongoose.connect(config.db);`
     `require('../models/user.model');`
     `return db;`
` };`


#### Add the following in development.ejs
`module.exports = {`

     `db: 'mongodb://localhost/portfolioDB',`
     `sessionSecret: 'developmentSessionSecret'`
 `};`

#### Add config.js


#### Create the user schema and model
`const mongoose = require('mongoose');`

` const Schema = mongoose.Schema;`
 `const UserSchema = new Schema({`
     `firstName: String,
     lastName: String,
     email: String,
     username: String,
     password: String
 });`
 `mongoose.model('User', UserSchema);`


#### Create new users using save
`
const User = require('mongoose').model('User');`
`exports.create = function(req, res, next) {`
`    const user = new User(req.body);`

    user.save((err) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(user);
        }
    });
`};`

#### Adding the following code in users.js
`var express = require('express');`
 `var router = express.Router();`
 
 `var users = require('../controllers/users.controller');`
 
 `router.route('/')`
       `.post(users.create)`
       `.get(users.list);`
 
 `module.exports = router;`

#### Find multiple user documents using find
`exports.list = function(req, res, next) {
     User.find({}, (err, users) => {
         if (err) {
             return next(err);
         } else {
             res.status(200).json(users);
         }
     });
 };
`


### Install passport:
`npm install passport --save `

## Configuration of development.js and production.js
### Add the following code in production.js:
`module.exports = {
     db: 'mongodb://localhost/portfolioDB',
     sessionSecret: 'productionSessionSecret',
     certFile: '/etc/letsencrypt/live/ibrahim-goddi.top/fullchain.pem',
     keyFile: '/etc/letsencrypt/live/ibrahim-goddi.top/privkey.pem'
 };`

### Add the following code in development.js
`module.exports = {
     db: 'mongodb://localhost/portfolioDB',
     sessionSecret: 'developmentSessionSecret',
     certFile: './tls/localhost+2.pem',
     keyFile: './tls/localhost+2-key.pem'
 };`

### To switch between "development config" and "production config"
`const env = process.env.NODE_ENV || 'development';`
`module.exports = require(`./env/${env}`);`

### Install argon2:
`npm install argon2 --save`

## Modify create function to support password hash
`const User = require('mongoose').model('User');`
 `const argon2 = require('argon2');`
 
 `exports.create = async function(req, res, next) {
     const user = new User(req.body);`
 
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
`
## Strengthen the hash password
`type: argon2.argon2id,
             memoryCost: 2 ** 16,
             hashLength: 64,
             saltLength: 32,
             parallelism: 2
`
## Add the following code in Mongoose.js
`const config = require('./config');
 const mongoose = require('mongoose');
 module.exports = function() {
     const db = mongoose.connect(config.db);
     require('../models/user.model');
     return db;
 };`
 
## Load the body parser API 
### Add the following code in app.js
`var bodyParser = require('body-parser');`
`app.use(bodyParser);`

`if (process.env.NODE_ENV === 'development') {
   app.use(logger('dev'));
 } else if (process.env.NODE_ENV === 'production') {
   app.use(compress());
 }`

## Create "user.model.js" and add the following code
`const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const argon2 = require('argon2');`
 
 `const UserSchema = new Schema({
     firstName: String,
     lastName: String,
     email: {
         type: String,
         required: true,
         unique: true
     },
     username: {
         type: String,
         required: true,
         unique: true
     },
     password: {
         type: String,
         required: true,
     }
 });`
 
 `UserSchema.methods.isValidPassword = async function(password) {`
     `const user = this;
     const compare = await argon2.verify(user.password, password);`
 
     return compare;
 `}`

 `mongoose.model('User', UserSchema);`
## Create "auth.controller.js" and add the following code
`const passport = require('passport');
 const localStrategy = require('passport-local').Strategy;
 const UserModel = require('../models/user.model');
 const JWTstrategy = require('passport-jwt').Strategy;
 const ExtractJWT = require('passport-jwt').ExtractJwt;`
  
 `passport.use(
     'signUp',
     new localStrategy(
         {
             usernameField: 'username',
             passwordField: 'password'
         },`
         `async (username, password, done) => {
             try {
                 const user = await UserModel.create({ username, password });`
 
                 `return done(null, user);`
             } catch (error) {
                 done(error);
             }
         }
     )
 `);`

 `passport.use(
     'signIn',
     new localStrategy(
         {
             usernameField: 'username',
             passwordField: 'password'
         },
         async (username, password, done) => {
             try {
                 const user = await UserModel.findOne({ username });`
 
                 if (!user) {
                     return done(null, false, { message: 'User not found' });
                 }
 
                 const validate = await user.isValidPassword(password);
 
                 if (!validate) {
                     return done(null, false, { message: 'Wrong Password' });
                 }
 
                 return done(null, user, { message: 'Logged in Successfully' });
             } catch (error) {
                 return done(error);
             }
         }
     )
 `);`
 
 `passport.use(
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
 );`
 
## Add the following code to users.js
`router.route('/')
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
`
`router.post(
     '/signIn',
     async (req, res, next) => {
         passport.authenticate(
             'signIn',
             async (err, user, info) => {
                 try {
                     if (err || !user) {
                         const error = new Error('An error occurred.');`
 
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
 `);`
 

