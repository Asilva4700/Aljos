app_controllers.controller('top10Ctrl', function($scope, $http) {
  server_get_lista($http,function(data){
    console.log(data.data.data);
    $scope.lista=data.data.data;
  },function(){});
});
