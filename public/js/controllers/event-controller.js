angular.module('myApp')
.controller('EventController', ['$scope', 'EventService', '$rootScope', '$location', '$localStorage', function($scope, EventService, $rootScope, $location, $localStorage){
  $scope.Events = [];
  $scope.event = {
    createdBy : $rootScope.creator_user
  };
}]);