angular.module('starter')
.controller('EventController', ['$scope', 'EventService', '$rootScope', '$location', '$localStorage', function($scope, EventService, $rootScope, $location, $localStorage, socket){
  $scope.Events = [];
  $scope.event = {
    createdBy : $rootScope.creator_user
  };
  $scope.EventService = EventService;

  $scope.newEvent = function(event){
      socket.emit('create', 'room64');
    EventService.createEvent(event)
      .then(function(event){socket.emit('create', 'room1264');
        $location.url('/event/'+event.data.id);
    });
  };
}]);