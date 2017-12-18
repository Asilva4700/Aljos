app_controllers.controller('buscarCtrl', function($scope, $ionicPopup, $http, $state, $ionicSlideBoxDelegate) {
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  var listImg = [{
    ruta:"../img/tortas.jpg"
  },
  {
    ruta:"../img/noticia_normal.jpg"
  },
  {
    ruta:"../img/eventos-gastronomicos.jpg"
  },
  {
    ruta:"../img/carrito-de-cabritas.jpg"
  },
  {
    ruta:"../img/carpas-teran-slider-01.jpg"
  },
  {
    ruta:"../img/377904_4606680724559_35582165_n.jpg"
  }];
  $scope.listImg = listImg;
  //lista de publicaciones
  server_get_publicaciones($http,function(data){
    //console.log(data.data.data.length);
    //console.log(data.data.data);
    $scope.publicacionesList = data.data.data;
  },function(){});
  //ir a la pantalla de la publicacion
  $scope.ir_a = function(publicacion){
    $state.go('tab.verpublicacionhome',{data_publicacion:JSON.stringify(publicacion)});
  };
});
