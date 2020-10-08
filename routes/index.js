var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var indexMenu = [
    {title:"About Me",link:"#aboutme"},
    {title: "Projects",link: "#projects"},
    {title: "Services",link: "#services"},
    {title: "Contact Me",link: "#contactme"}
  ];
  res.render('index', {
    title: 'Ibrahim Goddi\'s Personal Portfolio',
    menu: indexMenu
  });
});

module.exports = router;
