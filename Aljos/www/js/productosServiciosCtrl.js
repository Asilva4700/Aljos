app_controllers.controller('productosServiciosCtrl', function($scope, $http, $state, $stateParams) {
  try{
    var publicacion = $stateParams.data_publicacion;
    $scope.publicacion=publicacion;
    $scope.titulo=publicacion;
  }catch(e){
    console.log(e);
  }
  $scope.empresa=datosUsuario.empresa;
  server_get_publicaciones($http,function(data){
    var menu=0;
    var local=null;
    var aux=0;
    $scope.publicaciones=[];
    for(var i=0;i<data.data.data.length;i++){
      if(publicacion=="Productos y servicios"){
        if(data.data.data[i].productoservicio.menu==0 && data.data.data[i].productoservicio.idlocal==null){
          $scope.publicaciones[aux]=data.data.data[i];
          aux++;
        }
      }else if(publicacion=="Menús"){
        if(data.data.data[i].productoservicio.menu==1 && data.data.data[i].productoservicio.idlocal==null){
          $scope.publicaciones[aux]=data.data.data[i];
          aux++;
        }
      }else if(publicacion=="Establecimientos"){
        if(data.data.data[i].productoservicio.menu==0 && data.data.data[i].productoservicio.idlocal!=null){
          $scope.publicaciones[aux]=data.data.data[i];
          aux++;
        }
      }
    }
    console.log(data.data.data);
  },function(){},datosUsuario.empresa.id);
  $scope.ir_a = function(publicacion){
    $state.go('tab.verpublicacion',{data_publicacion:JSON.stringify(publicacion)});
  };
  $scope.agregar=function(){
    $state.go('tab.agregarpublicacion',{data_publicacion:publicacion});
  }
});
