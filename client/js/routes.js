// var appRoutes = angular.module('routes', ['ngRoute']);

app.config(function($routeProvider, $locationProvider, $authProvider){
  $routeProvider
    .when('/', {
      title: 'Dry Blog',
      templateUrl: 'views/home.html',
      controller: 'mainController',
      meta: {
        name: 'home',
        content: 'A blog is a resource for women in technology. It provides insights into their successes and failures, provides resources worth pursuing, and creates a strong community of females pursuing careers in the tech space.'
      }
    })
    .when('/login', {
      title: 'Login',
      templateUrl: 'views/login.html',
      controller: 'loginController'
    })
    .when('/signup', {
      title: 'Signup',
      templateUrl: 'views/signup.html',
      controller: 'signupController'
    })
    .when('/about', {
      title: 'About Dry Blog',
      templateUrl: 'views/about.html',
      controller: 'mainController'
    })
    .when('/creators', {
      title: 'Dry Blog Creators',
      templateUrl: 'views/creators.html',
      controller: 'mainController'
    })
    .when('/add', {
      title: 'Add Interview',
      templateUrl: 'views/add.html',
      controller: 'mainController'
    })
    .when('/twitter', {
      title: 'Dry Blog Twitter Feed',
      templateUrl: 'views/twitter.html',
      controller: 'mainController'
    })
    .when('/resources', {
      title: 'Community Resources',
      templateUrl: 'views/resources.html',
      controller: 'mainController'
    })
    .when('/post/:lastName/:firstName', {
      title: 'Interview',
      templateUrl: 'views/individual.html',
      controller: 'postController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});
