app_controllers.controller('tabsCtrl', function($scope, $ionicPopup, $http, $state) {
  var myPopup;
  $scope.login = function() {
    /*$scope.data = {}
    // An elaborate, custom popup
    myPopup = $ionicPopup.show({
      template: 'Correo:<br><input type="text" ng-model="data.user"><br>Clave:<br>'+
                '<input type="password" ng-model="data.pass"><br>¿Aun no tienes cuenta?'+
                ', registrate <a href="" ng-click="registroUsu()">aqui.</a>',
      title: 'Login',
      subTitle: '',
      scope: $scope,
      buttons: [
        { text: 'Cancelar' },
        {
          text: '<b>Ingresar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.pass || !$scope.data.user) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data;
            }
          }
        },
      ]
    });
    myPopup.then(function(res) {
      if(res!=null){
        server_get_login($http,function(data){
          console.log(data.data.data);
          $scope.resultado=data.data;
          datosUsuario = data.data.data;
          logeado = data.data.logeado;
          $scope.logeado=logeado;
          if(!data.data.logeado){
            var alertPopup = $ionicPopup.alert({
              template: data.data.data
            });
          }
        },function(){},res.user,res.pass);
        console.log('Tapped!', res.user, 'y ', res.pass);
      }
    });*/
    server_get_login($http,function(data){
      console.log(data.data.data);
      $scope.resultado=data.data;
      datosUsuario = data.data.data;
      logeado = data.data.logeado;
      $scope.logeado=logeado;
      if(!data.data.logeado){
        var alertPopup = $ionicPopup.alert({
          template: data.data.data
        });
      }
    },function(){},"homero@gmail.com","homero");
 };
 $scope.registroUsu = function() {
   myPopup.close();
   // El equivalente al href, este indica 2 paramtros, el primero indica donde
   // el segundo indica que se quiere pasar
   //el JSON.stringify se usa para forsar el parametro a ser un JSON
   // las paginas involucradas son para que esto funcione son:
   // index.html, app.js, buscarCtrl y registrarseCtrl
   //anda a cada pagina para ver cambios
   //notar el nombre data_registro que indica el nombre de la variable
   var algo = { algomas:"" };
   $state.go('tab.registrarse', {data_registro:JSON.stringify(algo)});
 };
 $scope.perfil = function(){
   $state.go('tab.perfilUsuario',{});
 };
});
