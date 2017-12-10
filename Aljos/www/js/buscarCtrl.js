app_controllers.controller('buscarCtrl', function($scope, $ionicPopup, $http, $state) {
  $scope.login = function() {
    $scope.data = {}
    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: 'Correo:<br><input type="text" ng-model="data.user"><br>Clave:<br><input type="password" ng-model="data.pass"><br>¿Aun no tienes cuenta?, registrate <a href="templates/registrarse.html">aqui.</a>',
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
        {
          text: '<b>Registrarse</b>',
          type: 'button-positive',
          onTap: function (e) {
            var algo={
              algomas:"asd"
            };
            // El equivalente al href, este indica 2 paramtros, el primero indica donde
            // el segundo indica que se quiere pasar
            //el JSON.stringify se usa para forsar el parametro a ser un JSON
            // las paginas involucradas son para que esto funcione son:
            // index.html, app.js, buscarCtrl y registrarseCtrl
            //anda a cada pagina para ver cambios
            //notar el nombre data_registro que indica el nombre de la variable
            $state.go('tab.registrarse', {data_registro:JSON.stringify(algo)});
          }
        },
      ]
    });
    myPopup.then(function(res) {
      if(res!=null){
        server_get_login($http,function(data){
          console.log(data.data);
          $scope.resultado=data.data;
        },function(){},res.user,res.pass);
        console.log('Tapped!', res.user, 'y ', res.pass);
      }
    });
 };
});
