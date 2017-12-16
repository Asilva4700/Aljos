app_controllers.controller('verPublicacionCTRL', function($scope, $http, $stateParams) {
  try{
    var publicacion = JSON.parse($stateParams.data_publicacion);
    console.log(publicacion);
    $scope.publicacion=publicacion;
  }catch(e){
    console.log(e);
  }
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
  server_get_calificaciones($http,function(data){
    console.log(data.data.data);
    $scope.calificaciones=data.data.data;
  },function(){},publicacion.id);
  $scope.submit=function(asd){
    console.log(asd);
  };
});
