angular.module('dryApp').directive('dryNav', function() {
  return {
    restrict: 'E',
    templateUrl: '../views/header.html',
  };
});

app.directive('navHideDirective', function($window) {
  return {
    restrict: 'AE',
    link: function(s, e, a) {
      // var body = angular.element(document.getElementsByTagName("body"));


      $window.onresize = function(event) {
        var clientWidth = document.documentElement.clientWidth;

        if (clientWidth < 740) {
          e.attr('data-toggle', 'collapse');
          e.attr('data-target', '.navbar-main-collapse');
        } else {
          e.removeAttr('data-toggle', 'collapse');
          e.removeAttr('data-target', '.navbar-main-collapse');
        }
      };
    }
  };
});
