var app = angular.module('dryApp', ['ngRoute', 'angularMoment', 'duScroll', 'satellizer']);

app.value('duScrollDuration', 1400);
// app.value('duScrollOffset', 100);

app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
