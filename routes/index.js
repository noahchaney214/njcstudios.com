var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/learn', function(req, res, next) {
  res.render('learn', { title: 'Learn' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Admin' });
});


module.exports = router;
