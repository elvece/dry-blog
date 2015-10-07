app.controller('mainController', function($scope, myFactory, $http, $location, $routeParams, $filter){

  // $scope.posts = {};

  //helper function
  getPosts = function(url){
    myFactory.get(url)
      .then(function(res){
        $scope.posts = res.data;
      });
  };


  //get all posts
  $scope.getAllPosts = getPosts('/api/posts');

  $scope.getPost = function(id){
    $scope.test = $filter('filter')($scope.posts, {_id: id});
    // var test = $scope.posts.filter(function(obj){
    //   return $routeParams.firstName === obj.firstName;
    // });
console.log($scope.test[0].firstName)
  };



  $scope.getSingleBlogPost = function(){
    myFactory.get('api/post/' + id)
      .then(function(res){

      });
  };

  $scope.addBlogPost = function(){
    myFactory.post('/api/posts', $scope.newPost)
      .then(function(res){
        console.log(data);
        $scope.posts.push(res.data);
      });
  };

  $scope.deleteBlogPost = function(id){
    myFactory.delete('/api/post/' + id)
      .then(function(res){
        $scope.getAllPosts;
      });
  };


});

//how to apply id to partial view (individual page)
