app_controllers.controller('pagosCtrl', function($scope, $http) {
  $scope.tipoUsuario=false;
  if(datosUsuario.idtipousuario==1){
    $scope.tipoUsuario=true;
    server_get_pagos($http,function(data){
      console.log(data.data.data);
      $scope.pagos=data.data.data;
      var fecha, total;
      for(var i=0;i<$scope.pagos.length;i++){
        fecha = new Date($scope.pagos[i].cotizacion.fecha);
        $scope.pagos[i].cotizacion.fecha=(fecha.getDate()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
        total=$scope.pagos[i].cotizacion.total;
        if($scope.pagos[i].usuario.idtipousuario==3){
          $scope.pagos[i].cotizacion.total=Math.round(total*0.05);
        }else if($scope.pagos[i].usuario.idtipousuario==4){
          $scope.pagos[i].cotizacion.total=Math.round(total*0.07);
        }else if($scope.pagos[i].usuario.idtipousuario==5){
          $scope.pagos[i].cotizacion.total=Math.round(total*0.08);
        }else if($scope.pagos[i].usuario.idtipousuario==6){
          $scope.pagos[i].cotizacion.total=Math.round(otal*0.06);
        }
      }
    },function(){});
  }else{
    server_get_pagos($http,function(data){
      console.log(data.data.data);
      $scope.pagos=data.data.data;
      var fecha, total;
      for(var i=0;i<$scope.pagos.length;i++){
        fecha = new Date($scope.pagos[i].cotizacion.fecha);
        $scope.pagos[i].cotizacion.fecha=(fecha.getDate()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
        total=$scope.pagos[i].cotizacion.total;
        if($scope.pagos[i].usuario.idtipousuario==3){
          $scope.pagos[i].cotizacion.total=Math.round(total*0.05);
        }else if($scope.pagos[i].usuario.idtipousuario==4){
          $scope.pagos[i].cotizacion.total=Math.round(total*0.07);
        }else if($scope.pagos[i].usuario.idtipousuario==5){
          $scope.pagos[i].cotizacion.total=Math.round(total*0.08);
        }else if($scope.pagos[i].usuario.idtipousuario==6){
          $scope.pagos[i].cotizacion.total=Math.round(otal*0.06);
        }
      }
    },function(){},datosUsuario.id);
  }
  var refreshPago=function(){
    server_get_pagos($http,function(data){
      console.log(data.data.data);
      $scope.pagos=data.data.data;
      var fecha, total;
      for(var i=0;i<$scope.pagos.length;i++){
        fecha = new Date($scope.pagos[i].cotizacion.fecha);
        $scope.pagos[i].cotizacion.fecha=(fecha.getDate()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
        total=$scope.pagos[i].cotizacion.total;
        if($scope.pagos[i].usuario.idtipousuario==3){
          $scope.pagos[i].cotizacion.total=Math.round(total*0.05);
        }else if($scope.pagos[i].usuario.idtipousuario==4){
          $scope.pagos[i].cotizacion.total=Math.round(total*0.07);
        }else if($scope.pagos[i].usuario.idtipousuario==5){
          $scope.pagos[i].cotizacion.total=Math.round(total*0.08);
        }else if($scope.pagos[i].usuario.idtipousuario==6){
          $scope.pagos[i].cotizacion.total=Math.round(otal*0.06);
        }
      }
    },function(){});
  };
  $scope.cambiarEstado=function(pago){
    server_set_pagos($http,function(data){
      console.log(data);
      refreshPago();
    },function(){},pago.id);
  };
});
