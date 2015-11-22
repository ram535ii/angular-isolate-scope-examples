var myModule = angular.module("directiveExample", ["ui.bootstrap"]);

myModule.directive("loginForm", function() {
  return {
    restrict: "E",
    templateUrl: "myModalContent.html",
    scope: { "title": "@" },
    controller: function ($scope) {
    }
  };
});

myModule.controller("sampleController", function($scope) {
  $scope.loginMode = "continue your session"
});
