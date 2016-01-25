app.controller('mainController', function($scope, myFactory, $http, $location, $routeParams, $filter, $document, $window, $auth, $rootScope, $anchorScroll){
  $anchorScroll();

  $scope.newPost = {};

  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  $scope.logout = function() {
    $auth.logout();
    delete $window.localStorage.currentUser;
  };

  $scope.toTheTop = function() {
    $document.scrollTopAnimated(0, 1400).then(function() {
    });
  };

  go = function(marker){
    $location.path(marker);
  };
});
