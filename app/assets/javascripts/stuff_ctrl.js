(function () {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope, $http) {

    $scope.message = "Hello!";

    $scope.persons = [];

    $scope.setup = function() {
      console.log('im setting it up');
    }

    $scope.exampleObject = {
      someKey: "yes",
      someOtherKey: "no"
    };

    console.log(this);

    $scope.sortDesc = false;

    $scope.toggleDesc = function() {
      console.log('im toggling');
      console.log($scope.sortDesc);
      $scope.sortDesc = !$scope.sortDesc;
      console.log($scope.sortDesc);

    }

    $scope.isACoolPerson = function(inputPerson) {
      console.log(inputPerson);
      if (inputPerson[0] === 'o') {
        return false;
      } else {
        return true;
      }
    }
  });
})();
