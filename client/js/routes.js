// var appRoutes = angular.module('routes', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'mainController',
      // css: 'css/main.css'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'mainController',
      // css: ['css/main.css', 'css/about.css']
    })
    .when('/add', {
      templateUrl: 'views/add.html',
      controller: 'mainController'
    })
    .when('/post/:firstName', {
      templateUrl: 'views/individual.html',
      controller: 'mainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
