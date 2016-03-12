angular.module('myApp')
  .service('EventService', ['$http', function($http){
    this.getEvents = function(){
      return $http.get('http://localhost:3000/api/users');
    };
  }]);