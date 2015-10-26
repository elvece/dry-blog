app.controller('signupController', function($scope, $http, $auth, $location) {

  $scope.signup = function() {

    var user = {
      email: $scope.email,
      password: $scope.password
    };

    $auth.signup(user)
      .then(function(response){
        $location.path('/login');
      })
      .catch(function(response) {
        console.log(response.data);
      });

  };

});
