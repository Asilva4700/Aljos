app_controllers.controller('estadisticasCtrl', function($scope, $http) {
  server_get_publicaciones($http,function(data){
    console.log(data.data.data);
    var publicaciones=data.data.data;
    $scope.publicaciones=publicaciones;
    var nombres=[];
    var cantidad=[];
    var color=[];
    for(var i=0; i<publicaciones.length;i++){
      nombres[i]=publicaciones[i].productoservicio.nombre;
      cantidad[i]=publicaciones[i].favorito.length;
      color[i]='#2a01fe';
    }
    var asd = document.getElementById("fav").getContext('2d');
    var asd = new Chart(asd, {
        type: 'horizontalBar',
        data: {
            labels: nombres,
            datasets: [{
                label: 'Favoritos',
                data: cantidad,
                backgroundColor: color,
                borderWidth: 1
            }]
        },
        options: {}
    });
  },function(){},datosUsuario.empresa.id)
  $scope.CalcularVisita=function(visita,index){
    var nombres=[];
    var visitas=[];
    for(var i=0;i<visita.length;i++){
      var fecha = new Date(visita[i].fecha);
      nombres[i]=fecha.getDate()+1+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
      visitas[i]=visita[i].cantidad;
    }
    var ctx = document.getElementById(index).getContext('2d');
    var asd = new Chart(ctx, {
        type: 'line',
        data: {
            labels: nombres,
            datasets: [{
                label: 'Visitas',
                data: visitas,
                borderColor: [
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  };
});
