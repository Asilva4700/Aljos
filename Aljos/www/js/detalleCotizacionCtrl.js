app_controllers.controller('detalleCotizacionCtrl', function($scope, $http, $stateParams) {
  try{
    var cotizacion = JSON.parse($stateParams.data_cotizacion);
    var fecha = new Date(cotizacion.fecha);
    cotizacion.fecha=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    $scope.cotizacion = cotizacion;
    console.log(cotizacion);
  }catch(e){
    console.log(e);
  }
});
