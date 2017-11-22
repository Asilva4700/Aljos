angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopup, $http) {
  $scope.login = function() {
    $scope.data = {}
    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="data.user"><br><input type="password" ng-model="data.pass">',
      title: 'Login',
      subTitle: '',
      scope: $scope,
      buttons: [
        { text: 'Cancelar' },
        {
          text: '<b>Ingresar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.pass || !$scope.data.user) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data;
            }
          }
        },
      ]
    });
    myPopup.then(function(res) {
      server_get_login($http,function(data){
        console.log(data.data);
      },function(){},res.user,res.pass);
      console.log('Tapped!', res.user, 'y ', res.pass);
    });
 };
})

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
