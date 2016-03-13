angular.module('starter.controllers', ['ionic'])

.controller('modalViewController', function($scope, $ionicModal) {

// START MODAL VIEW
  $ionicModal.fromTemplateUrl('adminView.html', {
      id       : '1',
      scope    : $scope,
      animation: 'jelly'
    }).then(function(modal) {
      $scope.modal1 = modal;
    });

$ionicModal.fromTemplateUrl('guestView.html', {
    id       : '2',
    scope    : $scope,
    animation: 'jelly'
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  $scope.openModal = function(index) {
    switch (index) {
      case 1 : $scope.modal1.show();
                break;
      case 2 : $scope.modal2.show();
    }
  };

  $scope.closeModal = function(index) {
    switch (index) {
      case 1 : $scope.modal1.hide();
                break;
      case 2 : $scope.modal2.hide();
    }
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('DashCtrl', function($scope, $rootScope, EventService) {
  $scope.Events = [];
  $scope.event = {
    createdBy : $rootScope.creator_user
  };
  $scope.EventService = EventService;

  $scope.getAllEvents = function(){
    EventService.getEvents().success(function(data){
      $scope.Events = data;
    });
  };

  $scope.newEvent = function(event){
    console.log(event);
    EventService.createEvent(event)
      .then(function(event){
        $location.url('/event/'+event.data.id);
    });
  };
})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});