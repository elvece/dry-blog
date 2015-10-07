// var appRoutes = angular.module('routes', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'layout.html',
      controller: 'mainController'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'mainController'
    })
    .when('/add', {
      templateUrl: 'add.html',
      controller: 'mainController'
    })
    .when('/post', {
      templateUrl: 'individual.html',
      controller: 'mainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
