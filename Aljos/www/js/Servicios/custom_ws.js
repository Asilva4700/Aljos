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
var server_set_registrar = function($http,exito,error,correo,pass,rutUsu,numTel,direccion,nom,tipUsu,nomEmp,rutEmp,pagWeb,correoEmp){
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
};
var server_get_calificaciones = function($http,exito,error,id){
  var request={
    idPublicacion:id
  };
  make_post($http,request,exito,error,"Calificacions/listar");
};
var server_set_calificacion = function($http,exito,error,idusuario,idpublicacion,descripcion,calificacion){
  var request={
    idUsuario:idusuario,
    idPublicacion:idpublicacion,
    descripcion:descripcion,
    calificacion:calificacion
  };
  make_post($http,request,exito,error,"Calificacions/Ingresar");
}
