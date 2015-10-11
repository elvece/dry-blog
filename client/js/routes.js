// var appRoutes = angular.module('routes', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'mainController',
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'mainController',
    })
    .when('/authors', {
      templateUrl: 'views/authors.html',
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
    .when('/post/:_id/:firstName/interview', {
      templateUrl: 'views/individual.html',
      controller: 'postController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
