var express = require('express');
var router = express.Router();
var Post = require('../models/posts.js');


//get all blog interviews
router.get('/posts', function(req, res, next) {
  Post.findQ()
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    })
    .done();
});

//get signgle blog interview
router.get('/post/:id', function(req, res, next) {
  Post.findByIdQ(req.params.id)
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    })
    .done();
});

//post new blog interview
router.post('/posts', function(req, res, next) {
  newPost = new Post({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    position: req.body.position,
    company: req.body.company,
    img: req.body.img,
    homeImage: req.body.homeImage,
    content: req.body.content,
    social: {
      github: req.body.github,
      website: req.body.website,
      twitter: req.body.twitter,
      linkedin: req.body.linkedin,
      instagram: req.body.instagram
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

//update blog interview
router.put('/post/:id', function(req, res, next) {
  var update = req.body;

  Post.findByIdAndUpdateQ(req.params.id, update, {new:true})
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    })
    .done();
});

//update content(question/answer) portion of single interview
router.put('/post/content/:id', function(req, res, next) {
  var newContent = {question: req.body.question, answer: req.body.answer};

  Post.findByIdAndUpdateQ(req.params.id, {$push: {content: newContent}}, {new:true})
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    })
    .done();
});

//delete single blog interview
router.delete('/post/:id', function(req, res, next) {
  Post.findByIdAndRemoveQ(req.params.id)
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    })
    .done();
});


module.exports = router;
