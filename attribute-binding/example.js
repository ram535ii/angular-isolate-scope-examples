var myModule = angular.module("directiveExample", ["ui.bootstrap"]);

myModule.directive("sampleDirective", function() {
  return {
    restrict: "E",
    templateUrl: "myModalContent.html",
    scope: { "passByValue": "@" },
    controller: function ($scope) {
    }
  };
});

myModule.controller("sampleController", function($scope) {
  $scope.amount = 10
});
