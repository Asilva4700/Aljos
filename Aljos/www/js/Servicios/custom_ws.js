var server_get_lista = function($http,exito,error){
  var request={};
  make_post($http,request,exito,error,"Usuarios/listar");
};
var server_get_login = function($http,exito,error,user,pass){
  var request={
    usuario:user,
    password:pass
  };
  make_post($http,request,exito,error,"Usuarios/login");
};
var server_get_publicaciones = function($http,exito,error){
  var request = {};
  make_post($http,request,exito,error,"Publicacions/listar");
};
var server_get_calificaciones = function($http,exito,error,id){
  var request={
    idPublicacion:id
  };
  make_post($http,request,exito,error,"Calificacions/listar");
};
