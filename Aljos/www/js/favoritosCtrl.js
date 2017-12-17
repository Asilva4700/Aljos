app_controllers.controller('favoritosCtrl', function($scope, $http) {
  var idUsu = datosUsuario.id;
  server_get_favoritos($http,function(data){
    //console.log(data.data.data.length);
    console.log(data.data.data);
    $scope.publicacionesList = data.data.data;
  },function(){},idUsu);
});
