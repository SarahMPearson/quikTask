(function(){
  'use strict';

  angular.module('quikTask')
  .factory('Task', ['$http', function($http){

    function create(task){
      return $http.post('/tasks', task);// angular is sending a message to node
    }

    function all(){
      return $http.get('/priorities');
    }

    return {create:create, all:all};
  }]);
})();

