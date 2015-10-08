// var appRoutes = angular.module('routes', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeController',
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'mainController',
    })
    .when('/add', {
      templateUrl: 'views/add.html',
      controller: 'mainController'
    })
    .when('/post/:_id/:firstName', {
      templateUrl: 'views/individual.html',
      controller: 'postController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
