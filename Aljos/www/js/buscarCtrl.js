app_controllers.controller('buscarCtrl', function($scope, $ionicPopup, $http, $state, $ionicSlideBoxDelegate) {
  $scope.$on("$ionicView.beforeEnter", function(event, data){
    server_get_publicaciones($http,function(data){
      //console.log(data.data.data.length);
      //console.log(data.data.data);
      $scope.publicacionesList = data.data.data;
    },function(){});
  });
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  $scope.filtro=undefined;
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

  //ir a la pantalla de la publicacion
  $scope.ir_a = function(publicacion){
    $state.go('tab.verpublicacionhome',{data_publicacion:JSON.stringify(publicacion)});
  };
  $scope.crearFiltro=function(filtro){
    for(var i=0;i<$scope.publicacionesList.length;i++){
      if($scope.publicacionesList[i].productoservicio.nombre.toLowerCase().includes(filtro.toLowerCase())){
        $scope.publicacionesList[i].filtro=true;
      }else{
        $scope.publicacionesList[i].filtro=false;
      }
    }
  };
  $scope.filtrar=function(publicacion){
    if(publicacion.filtro==true || publicacion.filtro==undefined){
      return true;
    }else{
      return false;
    }
  }
});
