(function(){
  'use strict';

  angular.module('quikTask')
  .controller('PrioritiesCtrl', ['$scope', 'Priority', function($scope, Priority){
    $scope.sort = 'name';
    $scope.priority = {};
    $scope.priorities = [];

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });

    $scope.add = function(){
      Priority.create($scope.priority).then(function(response){ // response is where Node is calling you back
        $scope.priorities.push(response.data.priority);
        $scope.priority = {};
      });
    };
  }]);
})();
