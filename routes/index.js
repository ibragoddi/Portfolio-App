var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var indexMenu = [
    {title: "About Me",link:"#aboutme"},
    {title: "Projects",link: "#projects"},
    {title: "Services",link: "#services"},
    {title: "Contact Me",link: "#contactme"},
    {title: "Business Contacts", link: "/my-contacts"}
  ];
  var projectsVar = [
    {name: "Ecommerce", description: "<p class=\"text-black-50 mb-0\">The software is intended to be \n" +
          "                            implemented on an e-commerce store that sells limited editions and vintage \n" +
          "                            products and offer special services to registered users:</p>\n" +
          "                        <ul>\n" +
          "                            <li>Customization function that enable users to personalize their products</li>\n" +
          "                            <li>Fast delivery services:\n" +
          "                                <ul>\n" +
          "                                    <li>1-2 days shipping US and Canada</li>\n" +
          "                                    <li>3 days shipping for the rest of the world</li>\n" +
          "                                </ul>\n" +
          "                            </li>\n" +
          "                            <li>Shipping insurance policy</li>\n" +
          "                            <li>Tracking services</li>\n" +
          "                        </ul>",image:"/images/ecommerce.png" },
    {name: "TrakPak", description: "<p class=\"mb-0\">TrakPak is an independent corporation that sells a tangible product and provides several services for B2B and B2C. \n" +
          "                            There are two sides of the business; the first side is to provide the luggage information service to consumers, and \n" +
          "                            the second is to gather data to fuel marketing and any other application that it may be suitable for.</p>", image:"/images/trakpak.png"},
    {name: "Karting", description: "<p class=\"mb-0\">I have worked on a Karting project accompagnied with a center of entertainement, restaurant, and cafes. I have prepared the business plan needed for launching the project in Tunisia. The competitive advantage was that all the vehicles were fully electric and super powerful.</p>", image:"/images/karting.jpg"}
  ];
  var servicesVar = [

  ];
  res.render('index', {
    title: 'Ibrahim Goddi\'s Personal Portfolio',
    menu: indexMenu,
    projects: projectsVar,
    services: servicesVar,
    topLink: '#page-top'
  });
});

module.exports = router;
