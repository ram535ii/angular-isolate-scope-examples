var myModule = angular.module("directiveExample", ["ui.bootstrap"]);

myModule.directive("loginForm", function() {
  return {
    restrict: "E",
    templateUrl: "myModalContent.html",
    scope: { "title": "@", "submitLoginClose": "&", "loginDetails": "=" },
    controller: function ($scope) {
    }
  };
});

myModule.controller("sampleController", function($scope) {
  $scope.loginMode = "continue your session"

  $scope.loginViewVisible = true
  $scope.handleLoginClose = function() {
    $scope.loginViewVisible = !$scope.loginViewVisible;
  }

  $scope.userDetails = {username: "bob", timeSinceExpiration: "20secs"};
});
