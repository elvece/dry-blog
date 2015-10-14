//MAIN CONTROLLER
app.controller('mainController', function($scope, myFactory, $http, $location, $routeParams, $filter, $document){

  $scope.newPost = {};

  // $scope.toTheTop = function() {
  //   $document.scrollTopAnimated(1400).then(function() {
  //     console.log('You just scrolled to the top!');
  //   });
  // };

  go = function(marker){
    $location.path(marker);
  };

  //helper functions
  getPosts = function(url){
    myFactory.get(url)
      .then(function(res){
        $scope.posts = res.data;
      });
  };

  $scope.tempContent = [];
  $scope.tempImages = [];

  $scope.newPostContent = function(){
    var newContent = {question: $scope.question, answer: $scope.answer};
    $scope.tempContent.push(newContent);
    $scope.newPost.content = $scope.tempContent;
    $scope.question = "";
    $scope.answer = "";
    console.log(newContent);
    console.log($scope.tempContent);
  };

  $scope.deleteQuestion = function() {
    var index = this.$index;
    $scope.tempContent.splice(index, 1);
  };

  $scope.editQuestion = function() {
    $scope.question = this.content.question;
    $scope.answer = this.content.answer;
    var index = this.$index;
    $scope.tempContent.splice(index, 1);
  };

  $scope.newImage = function(){
    var images = {url: $scope.url};
    $scope.tempImages.push(images);
    $scope.newPost.content = $scope.tempImages;
    $scope.question = "";
    $scope.answer = "";
    console.log($scope.newPost);
  };

  //get all posts
  $scope.getAllPosts = getPosts('/api/posts');
  //globals
  $scope.metaForm = false;
  $scope.socialForm = true;
  $scope.interviewForm = true;
  $scope.photoForm = true;

  $scope.addBlogPost = function(){
    myFactory.post('/api/posts', $scope.newPost)
      .then(function(data){
        var blog = data.data[0];
        go('/post/' + blog._id + '/' + blog.firstName);
      });
      // .then(function(res){
      //   $scope.posts.push(res.data);
      //   console.log($scope.posts);
      // });
  };

  $scope.deleteBlogPost = function(id){
    myFactory.delete('/api/post/' + id)
      .then(function(res){
        $scope.getAllPosts();
      });
  };

  $scope.addQuestion = function(id){
    myFactory.put('/api/post/content/' + id)
      .then(function(res){
        console.log(res);
      });
  };

});

//POST PAGE CONTROLLER
app.controller('postController', function($scope, myFactory, $http, $location, $routeParams, $filter){

  $scope.thing = $routeParams._id;

  getSinglePost = function(id){
    myFactory.get('/api/post/' + id)
      .then(function(res){
        $scope.post = res.data;
      });
  };

  $scope.time = function(id){
   return new Date(parseInt(id.substring(0, 8), 16) * 1000);
  }


  getSinglePost($scope.thing);

});


