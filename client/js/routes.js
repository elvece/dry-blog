// var appRoutes = angular.module('routes', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
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
    .when('/twitter', {
      templateUrl: 'views/twitter.html',
      controller: 'mainController'
    })
    .when('/post/:lastName/:firstName', {
      templateUrl: 'views/individual.html',
      controller: 'postController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});
