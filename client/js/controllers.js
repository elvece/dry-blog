app.controller('mainController', function($scope, myFactory, $http, $location, $routeParams, $filter){

  //helper function
  getPosts = function(url){
    myFactory.get(url)
      .then(function(res){
        $scope.posts = res.data;
      });
  };

  //get all posts
  $scope.getAllPosts = getPosts('/api/posts');


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

//how to apply id to partial view (individual page)
