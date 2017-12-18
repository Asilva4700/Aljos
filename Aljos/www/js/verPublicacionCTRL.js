app_controllers.controller('verPublicacionCTRL', function($scope, $http,$ionicHistory, $stateParams, $state) {
  $scope.$on("$ionicView.beforeEnter", function(event, data){
    try{
      var publicacion = JSON.parse($stateParams.data_publicacion);
      $scope.publicacion=publicacion;
      console.log(publicacion);
      $scope.empresa=publicacion.idempresa;
      if(datosUsuario.empresa==undefined){
        $scope.usuario=0;
      }else{
        $scope.usuario=datosUsuario.empresa.id;
      }
    }catch(e){
      console.log(e);
    }
    server_get_calificaciones($http,function(data){
      console.log(data.data.data);
      $scope.calificaciones=data.data.data;
      for(var i=0;i<$scope.calificaciones.length;i++){
        var fecha = new Date($scope.calificaciones[i].fecha);
        $scope.calificaciones[i].fecha=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
      }
    },function(){},publicacion.id);
  });
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
  refresh=function(){
    if(datosUsuario.empresa!=undefined){
      $scope.usuario=datosUsuario.empresa.id;
    }
  };
  refreshCalificacion=function(publicacion){
    server_get_calificaciones($http,function(data){
      console.log(data.data.data);
      $scope.calificaciones=data.data.data;
      for(var i=0;i<$scope.calificaciones.length;i++){
        var fecha = new Date($scope.calificaciones[i].fecha);
        $scope.calificaciones[i].fecha=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
      }
    },function(){},publicacion.id);
  };
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
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  $scope.submit=function(descripcion,publicacion){
    if(datosUsuario!=undefined){
      server_set_calificacion($http,function(data){
        console.log(data);
        refreshCalificacion(publicacion);
      },function(){},datosUsuario.id,publicacion.id,descripcion,$scope.calificacion);
    }else{
      $scope.login();
    }
  };
  eliminarFavorito=function(id){
    server_set_eliminarFavoritos($http,function(data){
      console.log(data);
    },function(){},id);
  }
  $scope.agregar=function(publicacion){
    if(datosUsuario!=undefined){
      server_get_favoritos($http,function(data){
        console.log(data.data.data);
        var favoritos=data.data.data;
        for(var i=0;i<favoritos.length;i++){
          if(favoritos[i].idusuario==datosUsuario.id && favoritos[i].idpublicacion==publicacion.id){
            eliminarFavorito(favoritos[i].id);
            i=favoritos.length;
          }else if(favoritos[i].idpublicacion==publicacion.id && (i+1)==favoritos.length){
            server_set_favoritos($http,function(data){
              console.log(data);
            },function(){},datosUsuario.id,$scope.publicacion.id);
          }else if((i+1)==favoritos.length){
            server_set_favoritos($http,function(data){
              console.log(data);
            },function(){},datosUsuario.id,$scope.publicacion.id);
          }
        }
        if(favoritos.length==0){
          server_set_favoritos($http,function(data){
            console.log(data);
          },function(){},datosUsuario.id,$scope.publicacion.id);
        }
      },function(){},datosUsuario.id);
    }else{
      $scope.login();
    }
  };
  $scope.cotizar=function(publicacion){
    if(datosUsuario==undefined){
      $scope.login();
      console.log(publicacion);
    }else{
      server_set_cotizacion($http,function(data){
        console.log(data);
      },function(){},publicacion.empresa.id,publicacion.id,datosUsuario.id,publicacion.productoservicio.precio);
    }
  };
  $scope.ir_a=function(publicacion){
    if(publicacion.productoservicio.menu==1){
      $state.go('tab.agregarpublicacion',{tipo_publicacion:"Menús",data_publicacion:JSON.stringify(publicacion)});
    }else if(publicacion.productoservicio.idlocal>0){
      $state.go('tab.agregarpublicacion',{tipo_publicacion:"Establecimientos",data_publicacion:JSON.stringify(publicacion)});
    }else{
      $state.go('tab.agregarpublicacion',{tipo_publicacion:"Productos y servicios",data_publicacion:JSON.stringify(publicacion)});
    }
  };
  $scope.eliminar=function(publicacion){
    for(var i=0;i<publicacion.calificacion.length;i++){
      server_set_eliminarCalificacion($http,function(data){
        console.log(data);
      },function(){},publicacion.calificacion[i].idcalificacion)
    }
    server_set_eliminarPublicacion($http,function(data){
      console.log(data);
      $backView = $ionicHistory.backView();
	    $backView.go();
    },function(){},publicacion.id,publicacion.idproducto,publicacion.productoservicio.idlocal);
  };
});
