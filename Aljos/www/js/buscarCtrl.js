app_controllers.controller('buscarCtrl', function($scope, $ionicPopup, $http) {
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
