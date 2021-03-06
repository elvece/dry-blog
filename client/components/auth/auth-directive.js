app.directive('authDirective', [function(){
  return {
    restrict: 'E',
    templateUrl: 'components/auth/login.html',
    controller: function($scope, $auth, $rootScope, $window, $location){
      $scope.login = function() {
        var user = {
          email: $scope.email,
          password: $scope.password
        };

        $auth.login(user)
          .then(function(response) {
            $window.localStorage.currentUser = JSON.stringify(response.data.user);
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
            $location.path('/home');
          })
          .catch(function(response) {
            // console.log(response);
          });
      };
    }
  };
}]);