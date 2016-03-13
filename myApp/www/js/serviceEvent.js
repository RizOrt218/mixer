angular.module('starter')
  .service('EventService', ['$http', function($http, socket){
    this.getEvents = function(){
      return $http.get('http://localhost:3000/api/users');
    };
    this.createEvent = function(event){
      socket.emit('create', 'room32');
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