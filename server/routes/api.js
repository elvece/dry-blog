var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/post', function(req, res, next) {
  res.render('post');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/interview/:id', function(req, res, next) {
  res.render('interview');
});


module.exports = router;
