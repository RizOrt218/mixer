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

    $scope.openModal = function(index) {
      console.log("consoleLogging ARE YOU THERE");
      switch (index) {
        case 1 : $scope.modal1.show();
      }
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
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

.controller('DashCtrl', function($scope) {

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
