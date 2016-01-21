app.directive('polaroids', ['myFactory', function(){
  return{
    restrict: 'E',
    templateUrl: 'components/polaroids/polaroids.html',
    controller: function($scope){
      getPosts = function(url){
        myFactory.get(url)
          .then(function(res){
            $scope.posts = res.data;
            // console.log($scope.posts)
          });
      };
    }
  };
}]);