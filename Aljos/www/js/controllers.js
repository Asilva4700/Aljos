angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e)
  //});
  /*$scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };*/
  server_get_lista($http,function(data){
    console.log(data.data.data[0]);
    $scope.lista=data.data.data[0]; 
  },function(){});
})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
  /*$scope.chat = Chats.get($stateParams.chatId);*/
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
