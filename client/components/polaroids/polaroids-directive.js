app.directive('polaroids', ['myFactory', function(){
  return{
    restrict: 'E',
    templateUrl: 'components/polaroids/polaroids.html',
    controller: function($scope, myFactory){
      getPosts = function(url){
        myFactory.get(url)
          .then(function(res){
            $scope.posts = res.data;
            // console.log($scope.posts)
          });
      };
      $scope.getAllPosts = getPosts('/api/posts');
    }
  };
}]);