app_controllers.controller('pagosCtrl', function($scope, $http) {
  server_get_pagos($http,function(data){
    console.log(data.data.data);
    $scope.pagos=data.data.data;
    var fecha, total;
    for(var i=0;i<$scope.pagos.length;i++){
      fecha = new Date($scope.pagos[i].cotizacion.fecha);
      $scope.pagos[i].cotizacion.fecha=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
      total=$scope.pagos[i].cotizacion.total;
      if(datosUsuario.idtipousuario==3){
        $scope.pagos[i].cotizacion.total=Math.round(total*0.05);
      }else if(datosUsuario.idtipousuario==4){
        $scope.pagos[i].cotizacion.total=Math.round(total*0.07);
      }else if(datosUsuario.idtipousuario==5){
        $scope.pagos[i].cotizacion.total=Math.round(total*0.08);
      }else if(datosUsuario.idtipousuario==6){
        $scope.pagos[i].cotizacion.total=Math.round(otal*0.06);
      }
    }
  },function(){},datosUsuario.id);
});
