var myModule = angular.module("directiveExample", ["ui.bootstrap"]);

myModule.directive("loginForm", function() {
  return {
    restrict: "E",
    templateUrl: "myModalContent.html",
    scope: { "loginDetails": "=" },
    controller: function ($scope) {
    }
  };
});

myModule.controller("sampleController", function($scope) {
  $scope.userDetails = {username: "bob", timeSinceExpiration: "20secs"};
});
