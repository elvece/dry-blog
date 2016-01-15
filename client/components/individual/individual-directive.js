app.directive('individualPage', ['myFactory', '$http', '$location', '$routeParams', '$filter', '$window', '$rootScope', '$anchorScroll', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/individual/individual-heading.html',
    controller: function($scope, myFactory, $http, $location, $routeParams, $filter, $window, $rootScope, $anchorScroll){
        $anchorScroll();
        // $scope.thing = $routeParams._id;
        $scope.timeStamp = function(id) {
          var dateBlock = new Date(parseInt(id.substring(0, 8), 16) * 1000);
          var year = dateBlock.slice(0,4);
          var month = dateBlock.slice(5,7);
          var day = dateBlock.slice(8,10);
          var dateString = '"' + day + '/' + week + '/' + year + '"';
          return dateString;
        };

        $scope.last = $routeParams.lastName;
        getSinglePost = function(id){
          myFactory.get('/api/post/' + id)
            .then(function(res){
              $scope.post = res.data;
            });
        };

        getSinglePost($scope.last);
    }
  };
}]);
