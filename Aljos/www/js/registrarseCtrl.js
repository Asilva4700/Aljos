app_controllers.controller('registrarseCtrl', function($scope, $http, $stateParams, $ionicPopup, $state) {
  //Este try nos permite resibir la variable
  // notese el nombre de la variable data_registro
  //es el mismo nombre en buscarCtrl y app.js
  $scope.empresa = false;
  $scope.vip = true;
  $scope.vipvide = true;
  $scope.video = true;
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
    if(data.correo != "" && data.pass != "" && data.rutUsu != "" && data.numTel != "" && data.direccion != "" && data.nom != ""){
      server_set_registrar($http,function(data){
        console.log(data.data);
        if(data.data.ok){
          var alertPopup = $ionicPopup.alert({
            template: 'Ahora podras iniciar sesion con tu correo personal y tu clave.'
          });
          $state.go('tab.home',{});
        }
        //despues de error le pasamos los datos para que la variable request se la lleve al servicio
      },function(){},data.correo,data.pass,data.rutUsu,data.numTel,data.direccion,data.nom,data.tipUsu,data.nomEmp,data.rutEmp,data.pagWeb,data.correoEmp);
    }
  };
  //informaciones
  $scope.informacion = function(){
    var alertPopup = $ionicPopup.alert({
      title: 'Infomación',
      template: 'El Video podra subir videos a la aplicación.<br>'+
                'El VIP aparecerá en los primeros lugares de la lista en la pantalla principal.<br>'+
                'El VIPVide tendra la misma cosas que los 2 anteriores.<br>'+
                'Nota: ser usuario tipo Video, VIP o VIPVide tendra un cargo adicional.'
    });
  };
  //vip o vipvide
  $scope.tipoUsuVip = function(){
    if($scope.vipvide || $scope.video){
      $scope.vipvide = false;
      $scope.video = false;
      tipoUsuario = 4;
    }else{
      $scope.vipvide = true;
      $scope.video = true;
      tipoUsuario = 3;
    }
  };
  $scope.tipoUsuVipVide = function(){
    if($scope.vip || $scope.video){
      $scope.vip = false;
      $scope.video = false;
      tipoUsuario = 5;
    }else{
      $scope.vip = true;
      $scope.video = true;
      tipoUsuario = 3;
    }
  };
  $scope.tipoUsuVideo = function(){
    if($scope.vip || $scope.vipvide){
      $scope.vip = false;
      $scope.vipvide = false;
      tipoUsuario = 6;
    }else{
      $scope.vip = true;
      $scope.vipvide = true;
      tipoUsuario = 3;
    }
  };
});
