angular.module('starter')
  .service('EventService', ['$http', function($http){
    this.getEvents = function(){
      return $http.get('/event');
    };
    this.createEvent = function(event){
      return $http.post('/event', event);
    };


    // this.login = function(user) {
    //   return $http.post('/login', user);
    // };
    // this.register = function(user) {
    //   return $http.post('/register', user);
    // };
    // this.logout = function() {
    //   return $http.post('/logout');
    // };
  }]);