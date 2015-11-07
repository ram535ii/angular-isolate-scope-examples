var myModule = angular.module("directiveExample", ["ui.bootstrap"]);

myModule.directive("sampleDirective", function() {
  return {
    restrict: "E",
    templateUrl: "myModalContent.html",
    scope: { "passByExpressionFunction": "&" },
    controller: function ($scope) {
      $scope.childChange = 20
    }
  };
});

myModule.controller("sampleController", function($scope) {
  $scope.amount = 10;
  $scope.change = 5;

  $scope.changeAmount = function(change) {
    $scope.amount = change;
  }
});
