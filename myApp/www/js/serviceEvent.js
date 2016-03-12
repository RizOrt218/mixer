angular.module('myApp')
  .service('EventService', ['$http', function($http){
    this.getEvents = function(){
      return $http.get('http://localhost:3000/api/users');
    };
    this.createEvent = function(event){
      return $http.post('/event', event);
    };







    this.login = function(user) {
      return $http.post('/login', user);
    };
    this.register = function(user) {
      return $http.post('/register', user);
    };
    this.logout = function() {
      return $http.post('/logout');
    };
  }]);