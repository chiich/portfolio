var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Chie - Front-End Web Developer',
        me: "Chie",
        author: ['Chiemezie Ichongiri'],
        author_pronounce: ["chee-a-mey-ziyeh ee-chon-ghee-rhee"],
        personal_statement: 'Hi, ya!',
        linkedin: 'View my LinkedIn profile',
        cv: 'View my Resum',
        cv_link: "/docs/Chiemezie_Ichongiri_webCV.pdf",
        instagram: 'Snoop around my Instagram',
        react_link: "https://facebook.github.io/react/",
        mean_link: "http://meanjs.org/",
        footer: "This site uses Bootstrap, and a NodeJS server running on an AWS EC2 Linux instance."
    });


});

module.exports = router;



