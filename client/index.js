(function(){
  'use strict';

  angular.module('quikTask', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/priorities', {templateUrl:'/views/priorities/priorities.html', controller:'PrioritiesCtrl'})
    .when('/tasks', {templateUrl:'/views/tasks/tasks.html', controller:'TaskCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();

