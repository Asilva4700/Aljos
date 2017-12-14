app_controllers.controller('registrarseCtrl', function($scope, $http,$stateParams) {
  //Este try nos permite resibir la variable
  // notese el nombre de la variable data_registro
  //es el mismo nombre en buscarCtrl y app.js
  $scope.empresa = false;
  try{
    var algo = JSON.parse($stateParams.data_registro);
    //console.log(algo);
    $scope.algo=algo;
  }catch(e){
    console.log(e);
  }
  $scope.divEmpresa = function(){
    if(!$scope.empresa){
      $scope.empresa = true;
    }else{
      $scope.empresa = false;
    }
  };
});
