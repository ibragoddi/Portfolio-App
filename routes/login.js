const express = require('express');
// Construct a new REST service (Router) with express API
const router = express.Router();
// le deuxieme argument de la fonction "get" (une methode de l'objet router) est une lambda expression.
/* Lambda expression: (handler of an HTTP request/response)
    arg1: HTTP request
    arg2: HTTP response
    arg3: HTTP next handler
*/

router.get('/',(req, res, next) => {
    res.render('login');
});

module.exports = router;