var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Chie - Front-End Web Developer',
        me: "Chie",
        author: ['Chiemezie Ichongiri'],
        meta_desc: 'nigerian, norwich, greenwich, graduate, london, web developer, javascript, developer, drupal, front-end, frontend',
        author_pronounce: ["chee-a-mey-ziyeh ee-chon-ghee-rhee"],
        personal_statement: 'Announcement',
        sub_personal_statement: 'February, 2017',
        linkedin: 'View my LinkedIn profile',
        cv: 'View my (outdated) Resum',
        cv_link: "/docs/Chiemezie_Ichongiri_webCV.pdf",
        instagram: 'Snoop around my Instagram',
        jekyll_link: "http://jekyllrb.com/",
        footer: "This site uses Bootstrap, and a NodeJS server running on an AWS EC2 Linux instance."
    });


});

module.exports = router;



