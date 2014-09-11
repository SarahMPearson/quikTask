(function(){
  'use strict';

  angular.module('quikTask')
  .controller('TaskCtrl', ['$scope', 'Task', 'Priority', function($scope, Task, Priority){
    $scope.sort = 'name';
    $scope.task = {};
    $scope.task = [];
    $scope.priorities = [];

    Task.all().then(function(response){
      $scope.tasks = response.data.tasks;
    });
    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });

    $scope.addTask = function(){
      Task.create($scope.task).then(function(response){ // response is where Node is calling you back
        $scope.tasks.push(response.data.task);
        $scope.task = {};
      });
    };
  }]);
})();

