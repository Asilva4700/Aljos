app_controllers.controller('buscarCtrl', function($scope, $ionicPopup, $http, $state, $ionicSlideBoxDelegate) {
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  var listImg = [{
    ruta:"../img/adam.jpg"
  },
  {
    ruta:"../img/ben.png"
  },
  {
    ruta:"../img/ionic.png"
  },
  {
    ruta:"../img/max.png"
  },
  {
    ruta:"../img/mike.png"
  },
  {
    ruta:"../img/perry.png"
  }];
  $scope.listImg = listImg;

  //lista de publicaciones
  server_get_publicaciones($http,function(data){
    //console.log(data.data.data.length);
    //console.log(data.data.data);
    $scope.publicacionesList = data.data.data;
  },function(){});
});
