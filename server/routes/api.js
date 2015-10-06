var express = require('express');
var router = express.Router();
var Post = require('../models/posts.js');

router.get('/', function(req, res, next) {
  Post.findQ()
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    })
    .done();
});

router.get('/add', function(req, res, next) {
  res.render('add');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/post/:id', function(req, res, next) {
  Post.findByIdQ(req.params.id)
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    })
    .done();
});


router.post('/add', function(req, res, next) {
  newPost = new Post({
    firstName: req.body.first,
    lastName: req.body.last,
    position: req.body.position,
    company: req.body.company,
    social: {
      gitHub: req.body.gitHub,
      website: req.body.website,
      twitter: req.body.twitter,
      linkedIn: req.body.linkedIn,
      instagram: req.body.instagram,
      facebook: req.body.facebook
    }
  })
    .save()
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    })
    .done();
});

// router.put('/add/:id', function(req, res, next) {
//   var newContent = {
//     question: req.body.question,
//     answer: req.body.answer
//   };
//   console.log(newContent);
//   var update = content.push(newContent);
//   console.log(content);
//   Post.findByIdAndUpdateQ(req.params.id, update, {new:true})
//     .then(function(results){
//       res.json(results);
//     }).catch(function(results){
//       res.json({'message': results});
//     })
//     .done();
// });

module.exports = router;
