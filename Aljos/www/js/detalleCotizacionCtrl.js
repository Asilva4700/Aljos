app_controllers.controller('detalleCotizacionCtrl', function($scope, $http, $stateParams) {
  //console.log(datosUsuario);
  $scope.usuario = datosUsuario;
  try{
    var cotizacion = JSON.parse($stateParams.data_cotizacion);
    var fecha = new Date(cotizacion.fecha);
    cotizacion.fecha=(fecha.getDate()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    $scope.cotizacion = cotizacion;
    //console.log(cotizacion);
  }catch(e){
    console.log(e);
  }
});
