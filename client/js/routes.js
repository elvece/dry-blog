// var appRoutes = angular.module('routes', ['ngRoute']);

app.config(function($routeProvider, $locationProvider, $authProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'mainController',
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginController',
    })
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'signupController',
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'mainController',
    })
    .when('/creators', {
      templateUrl: 'viewscreators.html',
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
    .when('/resources', {
      templateUrl: 'views/resources.html',
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
