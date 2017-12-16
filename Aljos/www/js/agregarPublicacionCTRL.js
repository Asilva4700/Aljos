app_controllers.controller('agregarPublicacionCTRL', function($scope, $http,$stateParams,$state,$ionicHistory) {
  try{
    var publicacion = $stateParams.data_publicacion;
    $scope.local=false;
    $scope.menu=false;
    $scope.patio=false;
    $scope.cocina=false;
    if(publicacion=="Menús"){
      $scope.menu=true;
    }else if(publicacion=="Establecimientos"){
      $scope.local=true;
    }
    $scope.cantidad=1;
  }catch(e){
    console.log(e);
  }
  $scope.cambiar=function(tipo){
    if(tipo=="patio"){
      if($scope.patio){
        $scope.patio=false;
      }else if(!$scope.patio){
        $scope.patio=true;
      }
    }else if(tipo=="cocina"){
      if($scope.cocina){
        $scope.cocina=false;
      }else if(!$scope.cocina){
        $scope.cocina=true;
      }
    }
  };
  $scope.submit=function(nombre,precio,descripcion,cantidad,direccion,numeracion,ciudad,comuna,tamanorecinto,incluyepatio,tamanopatio,incluyecocina){
    var menu=0;
    var local=0;
    if(publicacion=="Menús"){
      menu=1;
    }else if(publicacion=="Establecimientos"){
      local=1;
    }
    server_set_publicacion($http,function(data){
      console.log(data);
      $backView = $ionicHistory.backView();
	    $backView.go();
    },function(){},datosUsuario.empresa.id,nombre,precio,descripcion,cantidad,menu,local,direccion,numeracion,ciudad,comuna,tamanorecinto,incluyepatio,tamanopatio,incluyecocina);
  }
});
