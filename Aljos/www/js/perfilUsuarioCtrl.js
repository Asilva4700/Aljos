app_controllers.controller('perfilUsuarioCtrl', function($scope, $http, $state) {
  $scope.user = datosUsuario;
  $scope.logOut = function(){
    datosUsuario = '';
    logeado = false;
    location.reload();
    $state.go('tab.home',{});
  };
  //ir a Estadisticas
  $scope.irEstadisticas = function(){
    $state.go('tab.estadisticas',{});
  };
  //ir a menu
  $scope.irMenu = function(){
    $state.go('tab.productosServicios',{data_publicacion:"Menús"});
  };
  //ir a productosServicios
  $scope.irProductosServicios = function(){
    $state.go('tab.productosServicios',{data_publicacion:"Productos y servicios"});
  };
  //ir a local
  $scope.irLocal = function(){
    $state.go('tab.productosServicios',{data_publicacion:"Establecimientos"});
  };
  //ir a preguntasGenerales
  $scope.irPreguntasGenerales = function(){
    $state.go('tab.preguntasGenerales',{});
  };
});
