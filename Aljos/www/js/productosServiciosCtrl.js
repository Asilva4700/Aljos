app_controllers.controller('productosServiciosCtrl', function($scope, $http, $state) {
  console.log(datosUsuario);
  $scope.empresa=datosUsuario.empresa;
  server_get_publicaciones($http,function(data){
    $scope.publicaciones=data.data.data;
    console.log(data.data.data);
  },function(){});
  $scope.ir_a = function(publicacion){
    $state.go('tab.verpublicacion',{data_publicacion:JSON.stringify(publicacion)});
  };
});
