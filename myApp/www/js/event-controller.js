angular.module('myApp')
.controller('EventController', ['$scope', 'EventService', '$rootScope', '$location', '$localStorage', function($scope, EventService, $rootScope, $location, $localStorage){
  $scope.Events = [];
  $scope.event = {
    createdBy : $rootScope.creator_user
  };
  $scope.EventService = EventService;

  $scope.newEvent = function(event){
    EventService.createEvent(event)
      .then(function(event){
        $location.url('/event/'+event.data.id);
    });
  };


}]);