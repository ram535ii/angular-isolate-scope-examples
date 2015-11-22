var myModule = angular.module("directiveExample", ["ui.bootstrap"]);

myModule.directive("loginForm", function() {
  return {
    restrict: "E",
    templateUrl: "myModalContent.html",
    scope: { "submitLoginClose": "&" },
    controller: function ($scope) {
    }
  };
});

myModule.controller("sampleController", function($scope) {
  $scope.loginViewVisible = true

  $scope.handleLoginClose = function() {
    $scope.loginViewVisible = !$scope.loginViewVisible;
  }
});
