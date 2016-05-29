var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chie - Software Engineer',
    me: "Written as Chie",
    author: 'Chiemezie Ichongiri',
    author_pronounce: "chee-aimey-ziyeh  | ee-chon-ghee-rhee",
    personal_statement: 'Computer Science Graduate from July 2016. Predicted grade: 1st.',
    linkedin: 'View my LinkedIn profile',
    my_cv: 'Download my CV',
    instagram: 'Snoop around my Instagram' });


});

module.exports = router;
