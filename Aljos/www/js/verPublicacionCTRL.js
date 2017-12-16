app_controllers.controller('verPublicacionCTRL', function($scope, $http, $stateParams) {
  $scope.ratingsObject = {
    iconOn : 'ion-ios-star',
    iconOff : 'ion-ios-star-outline',
    iconOnColor: 'rgb(200, 200, 100)',
    iconOffColor:  'rgb(200, 100, 100)',
    rating:  5,
    minRating:1,
    callback: function(rating) {
      $scope.ratingsCallback(rating);
    }
  };
  $scope.calificacion=5;
  $scope.ratingsCallback = function(rating) {
    $scope.calificacion=rating;
  };
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
  $scope.listImg = [{
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
  server_get_calificaciones($http,function(data){
    console.log(data.data.data);
    $scope.calificaciones=data.data.data;
    for(var i=0;i<$scope.calificaciones.length;i++){
      var fecha = new Date($scope.calificaciones[i].fecha);
      $scope.calificaciones[i].fecha=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    }

  },function(){},publicacion.id);
  $scope.submit=function(descripcion){
    server_set_calificacion($http,function(data){

    },function(){},datosUsuario.id,publicacion.id,descripcion,$scope.calificacion);
  };
  $scope.agregar=function(){
    server_set_favoritos($http,function(data){
      console.log(data);
    },function(){},datosUsuario.id,$scope.publicacion.id)
  };
});
