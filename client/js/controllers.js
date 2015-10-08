//MAIN CONTROLLER
app.controller('mainController', function($scope, myFactory, $http, $location, $routeParams, $filter){

  //helper functions
  getPosts = function(url){
    myFactory.get(url)
      .then(function(res){
        $scope.posts = res.data;
      });
  };

  $scope.tempContent = [];

  $scope.newPostContent = function(){
    var newContent = {question: $scope.question, answer: $scope.answer};
    $scope.tempContent.push(newContent);
    $scope.question = "";
    $scope.answer = "";
    console.log('new content', newContent);
    console.log('temp content array', $scope.tempContent);
  };

  //get all posts
  $scope.getAllPosts = getPosts('/api/posts');
  //globals
  $scope.metaForm = false;
  $scope.interviewForm = true;
  $scope.photoForm = true;


  $scope.addBlogPost = function(){
    myFactory.post('/api/posts', $scope.newPost)
      .then(function(res){
        $scope.posts.push(res.data);
        console.log(res.data);
        console.log($scope.posts);
      });
  };

  $scope.deleteBlogPost = function(id){
    myFactory.delete('/api/post/' + id)
      .then(function(res){
        $scope.getAllPosts;
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

  getSinglePost($scope.thing);

});

