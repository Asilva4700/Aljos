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
