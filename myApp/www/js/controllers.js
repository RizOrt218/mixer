angular.module('starter.controllers', ['ionic'])

.controller('landingPage', function($scope, $ionicModal) {

// START MODAL VIEW
$ionicModal.fromTemplateUrl('adminView.html', {
    id       : '1',
    scope    : $scope,
    animation: 'jelly'
  }).then(function(modal) {
    $scope.modal1 = modal;
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
