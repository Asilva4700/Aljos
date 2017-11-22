var server_var_url = "http://0.0.0.0:3000/api/"
var make_get = function ($http,request,exito,error,url) {

    $http({
        url: server_var_url+url, // No need of IP address
        method: 'GET',
        data: request,
        headers: {'Content-Type': 'application/json'}
    }).success(function(data){
        exito(data);
    }).error(function(){
        error();
    });

};

var make_post = function ($http,request,exito,error,url) {

    $http({
        url: server_var_url+url, // No need of IP address
        method: 'POST',
        data: request,
        headers: {'Content-Type': 'application/json'}
    }).success(function(data){
        exito(data);
    }).error(function(){
        error();
    });

};
