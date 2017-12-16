var server_get_lista = function($http,exito,error){
  var request={};
  make_post($http,request,exito,error,"Usuarios/listar");
}
var server_get_login = function($http,exito,error,user,pass){
  var request={
    usuario:user,
    password:pass
  };
  make_post($http,request,exito,error,"Usuarios/login");
}
var server_get_publicaciones = function($http,exito,error){
  var request = {};
  make_post($http,request,exito,error,"Publicacions/listar");
};
var server_get_registrar = function($http,exito,error,correo,pass,rutUsu,numTel,direccion,nom,tipUsu,nomEmp,rutEmp,pagWeb,correoEmp){
  var request = {
    correo: correo,
    contraseña: pass,
    rut: rutUsu,
    numerotelefono: numTel,
    direccion: direccion,
    nombre: nom,
    tipo: tipUsu,
    nombreEmpresa: nomEmp,
    rutEmpresa: rutEmp,
    paginaWeb: pagWeb,
    correoEmpresa: correoEmp
  };
  make_post($http,request,exito,error,"Usuarios/registrar");
}
