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
    $state.go('tab.menu',{});
  };
  //ir a productosServicios
  $scope.irProductosServicios = function(){
    $state.go('tab.productosServicios',{});
  };
  //ir a local
  $scope.irLocal = function(){
    $state.go('tab.local',{});
  };
  //ir a preguntasGenerales
  $scope.irPreguntasGenerales = function(){
    $state.go('tab.preguntasGenerales',{});
  };
  //ir a favoritos
  $scope.irFavoritos = function() {
    $state.go('tab.favoritos',{});
  };
});
