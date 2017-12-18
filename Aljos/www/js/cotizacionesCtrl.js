app_controllers.controller('cotizacionesCtrl', function($scope, $http, $state) {
  if(datosUsuario.idtipousuario != 2 && datosUsuario.idtipousuario != 1){
    server_get_cotizaciones($http,function(data){
      //console.log(data.data.data);
      $scope.cotizaciones = data.data.data;
    },function(){},null,datosUsuario.empresa.id,datosUsuario.idtipousuario);
  }else{
    server_get_cotizaciones($http,function(data){
      //console.log(data.data.data);
      $scope.cotizaciones = data.data.data;
    },function(){},datosUsuario.id,null,datosUsuario.idtipousuario);
  }
  //ir a la pantalla de la publicacion
  $scope.irDetalle = function(cotizacion){
    $state.go('tab.detalleCotizacion',{data_cotizacion:JSON.stringify(cotizacion)});
  };
});
