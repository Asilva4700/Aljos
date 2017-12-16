app_controllers.controller('registrarseCtrl', function($scope, $http, $stateParams, $ionicPopup) {
  //Este try nos permite resibir la variable
  // notese el nombre de la variable data_registro
  //es el mismo nombre en buscarCtrl y app.js
  $scope.empresa = false;
  $scope.vip = true;
  $scope.vipvide = true;
  var tipoUsuario = 2;
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
      tipoUsuario = 3;
    }else{
      $scope.empresa = false;
      tipoUsuario = 2;
    }
  };
  //ingresar usuario
  $scope.ingresar = function(){
    var data;
    if($scope.empresa){
      data = {
        correo:document.getElementById('correo').value,
        pass:document.getElementById('pass').value,
        rutUsu:document.getElementById('rut').value,
        numTel:document.getElementById('numTel').value,
        direccion:document.getElementById('direccion').value,
        nom:document.getElementById('nombre').value,
        tipUsu:tipoUsuario,
        nomEmp:document.getElementById('nomEmp').value,
        rutEmp:document.getElementById('rutEmp').value,
        pagWeb:document.getElementById('paginaWeb').value,
        correoEmp:document.getElementById('correoEmp').value
      };
    }else{
      data = {
        correo:document.getElementById('correo').value,
        pass:document.getElementById('pass').value,
        rutUsu:document.getElementById('rut').value,
        numTel:document.getElementById('numTel').value,
        direccion:document.getElementById('direccion').value,
        nom:document.getElementById('nombre').value,
        tipUsu:tipoUsuario,
        nomEmp:"",
        rutEmp:"",
        pagWeb:"",
        correoEmp:""
      };
    }
    console.log(data);
    console.log('antes del if');
    if(data.correo != "" && data.pass != "" && data.rutUsu != "" && data.numTel != "" && data.direccion != "" && data.nom != ""){
      console.log('dentro del if');
      server_get_registrar($http,function(data){
        console.log('pase registrar');
        console.log(data.data.data);
      },function(){});
    }
  };
  //informaciones
  $scope.informacion = function(){
    var alertPopup = $ionicPopup.alert({
      template: 'El VIP aparecerá en los primeros lugares de la lista en la pantalla principal.<br>'+
                'El VIPVide a parte de tener la misma ventaja que el VIP, este podra subir videos de sus '+
                'productos o servicios a la aplicación.<br>'+
                'Nota: ser VIP o VIPVide tendra un cargo adicional.'
    });
  };
  //vip o vipvide
  $scope.tipoUsuVip = function(){
    if($scope.vipvide){
      $scope.vipvide = false;
      tipoUsuario = 4;
    }else{
      $scope.vipvide = true;
      tipoUsuario = 3;
    }
  };
  $scope.tipoUsuVipVide = function(){
    if($scope.vip){
      $scope.vip = false;
      tipoUsuario = 5;
    }else{
      $scope.vip = true;
      tipoUsuario = 3;
    }
  };
});
