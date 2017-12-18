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
var server_get_publicaciones = function($http,exito,error,idempresa){
  var request = {idEmpresa:idempresa};
  make_post($http,request,exito,error,"Publicacions/listar");
};
var server_set_publicacion = function($http,exito,error,idempresa,nombre,precio,descripcion,cantidad,menu,local,direccion,numeracion,ciudad,comuna,tamanorecinto,incluyepatio,tamanopatio,incluyecocina){
  var request={
    idEmpresa:idempresa,
    descripcion:descripcion,
    cantidad:cantidad,
    nombre:nombre,
    precio:precio,
    menu:menu,
    local:local,
    direccion:direccion,
    numeracion:numeracion,
    ciudad:ciudad,
    comuna:comuna,
    tamanorecinto:tamanorecinto,
    incluyepatio:incluyepatio,
    tamanopatio:tamanopatio,
    incluyecocina:incluyecocina
  };
  make_post($http,request,exito,error,"Publicacions/crear");
};
var server_set_editarPublicacion = function($http,exito,error,idpublicacion,idproducto,idlocal,nombre,precio,descripcion,cantidad,menu,local,direccion,numeracion,ciudad,comuna,tamanorecinto,incluyepatio,tamanopatio,incluyecocina){
  var request={
    idPublicacion:idpublicacion,
    idProducto:idproducto,
    idLocal:idlocal,
    descripcion:descripcion,
    cantidad:cantidad,
    nombre:nombre,
    precio:precio,
    menu:menu,
    local:local,
    direccion:direccion,
    numeracion:numeracion,
    ciudad:ciudad,
    comuna:comuna,
    tamanorecinto:tamanorecinto,
    incluyepatio:incluyepatio,
    tamanopatio:tamanopatio,
    incluyecocina:incluyecocina,
    idImagen:1,
    rutaImagen:"prueba"
  };
  make_post($http,request,exito,error,"Publicacions/editar");
};
var server_set_eliminarPublicacion = function($http,exito,error,idpublicacion,idproducto,idlocal){
  var request={
    id:idpublicacion,
    idproducto:idproducto,
    idlocal:idlocal
  };
  make_post($http,request,exito,error,"Publicacions/eliminar");
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
    nombreEmpresIngresara: nomEmp,
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
};
var server_set_eliminarCalificacion = function($http,exito,error,id){
  var request={
    id:id
  };
  make_post($http,request,exito,error,"Calificacions/Eliminar");
};
var server_set_favoritos=function($http,exito,error,idusuario,idpublicacion,idempresa){
  var request={
    idusuario:idusuario,
    idpublicacion:idpublicacion,
    idempresa:idempresa
  };
  make_post($http,request,exito,error,"Favoritos/Agregar");
};
var server_set_eliminarFavoritos=function($http,exito,error,id){
  var request={
    id:id
  };
  make_post($http,request,exito,error,"Favoritos/Quitar");
};
var server_get_favoritos = function($http,exito,error,idUsu){
  var request = {
    idusuario:idUsu
  };
  make_post($http,request,exito,error,"Favoritos/Listar");
};
var server_set_cotizacion = function($http,exito,error,idEmp,idPub,idUsu,total){
  var request = {
    idEmpresa:idEmp,
    idPublicacion:idPub,
    idUsuario:idUsu,
    total:total
  };
  make_post($http,request,exito,error,"Cotizacions/solicitar");
};
