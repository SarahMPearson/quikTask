(function(){
  'use strict';

  angular.module('quikTask')
  .factory('Priority', ['$http', function($http){

    function create(priority){
      return $http.post('/priorities', priority);// angular is sending a message to node
    }

    function all(){
      return $http.get('/priorities');
    }

    return {create:create, all:all};
  }]);
})();

