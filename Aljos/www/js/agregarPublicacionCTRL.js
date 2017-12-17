app_controllers.controller('agregarPublicacionCTRL', function($scope, $http,$stateParams,$state,$ionicHistory) {
  try{
    var tipo = $stateParams.tipo_publicacion;
    var publicacion = $stateParams.data_publicacion;
    var localid=null;
    $scope.titulo="Nueva";
    if(publicacion!=undefined){
      $scope.titulo="Editar";
      publicacion=JSON.parse(publicacion);
      if(publicacion.productoservicio.local!=undefined){
        if(publicacion.productoservicio.local.incluyepatio==1){
          $scope.patio=true;
        }
        if(publicacion.productoservicio.local.incluyecocina==1){
          $scope.cocina=true;
        }
        $scope.direccion=publicacion.productoservicio.local.direccion;
        $scope.numeracion=publicacion.productoservicio.local.numeracion;
        $scope.ciudad=publicacion.productoservicio.local.ciudad;
        $scope.comuna=publicacion.productoservicio.local.comuna;
        $scope.tamanorecinto=publicacion.productoservicio.local.tamanorecinto;
        $scope.tamanopatio=publicacion.productoservicio.local.tamanopatio;
        localid=publicacion.productoservicio.local.id;
      }
      $scope.nombre=publicacion.productoservicio.nombre;
      $scope.precio=publicacion.productoservicio.precio;
      $scope.descripcion=publicacion.descripcion;
      $scope.cantidad=publicacion.cantidad;
    }else{
      $scope.local=false;
      $scope.menu=false;
      $scope.patio=false;
      $scope.cocina=false;
      $scope.cantidad=1;
    }
    console.log(publicacion);
    if(tipo=="Menús"){
      $scope.menu=true;
    }else if(tipo=="Establecimientos"){
      $scope.local=true;
    }
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
  $scope.agregar=function(nombre,precio,descripcion,cantidad,direccion,numeracion,ciudad,comuna,tamanorecinto,tamanopatio){
    var menu=0;
    var local=0;
    if(tipo=="Menús"){
      menu=1;
    }else if(tipo=="Establecimientos"){
      local=1;
    }
    if(tamanopatio==undefined){
      tamanopatio=0;
    }
    server_set_publicacion($http,function(data){
      console.log(data);
      $backView = $ionicHistory.backView();
	    $backView.go();
    },function(){},datosUsuario.empresa.id,nombre,precio,descripcion,cantidad,menu,local,direccion,numeracion,ciudad,comuna,tamanorecinto,$scope.patio,tamanopatio,$scope.cocina);
  }
  $scope.editar=function(nombre,precio,descripcion,cantidad,direccion,numeracion,ciudad,comuna,tamanorecinto,tamanopatio){
    var menu=0;
    var local=0;
    if(tipo=="Menús"){
      menu=1;
    }else if(tipo=="Establecimientos"){
      local=1;
    }
    if(tamanopatio==undefined){
      tamanopatio=0;
    }
    server_set_editarPublicacion($http,function(data){
      console.log(data);
      $backView = $ionicHistory.backView();
	    $backView.go();
    },function(){},publicacion.id,publicacion.productoservicio.id,localid,nombre,precio,descripcion,cantidad,menu,local,direccion,numeracion,ciudad,comuna,tamanorecinto,$scope.patio,tamanopatio,$scope.cocina);
  }
});
