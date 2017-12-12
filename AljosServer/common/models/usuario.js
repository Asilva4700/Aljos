'use strict';

module.exports = function(Usuario) {
  var app = require('../../server/server');
  Usuario.cargar = function(correo,cb){
    Usuario.findOne({where:{correo:correo}}, function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        var data=obj;
        var Empresa=app.models.Empresa;
        Empresa.findOne({where:{idusuario:data.id}},function(error,obj){
          if(error){cb(null,{ok:false,data:error});}
          else{
            data.Empresa=obj;
            cb(null, {ok:true,data:data});
          }
        });
      }
    });
  };
  Usuario.remoteMethod('cargar',{
    accepts:[{arg: 'correo', type: 'string', required: true}],
    returns: {arg: 'data', type: 'object'}
  });
  Usuario.login = function(correo, pass, cb){
    var fields={
      id:false
    };
    Usuario.findOne({where:{correo:correo},include:[
      {
        relation:'empresa',
        scope:{}
      }]}, function(error,obj){
        if(error){cb(null,{ok:false,data:error});}
        else{
          if(obj!=null){
            if(obj.correo==correo && obj.contrasena==pass){
              cb(null,{ok:true,logeado:true,data:obj});
            }else{
              cb(null,{ok:true,logeado:false,data:"usuario o contraseña incorreto"});
            }
          }else{
            cb(null,{ok:true,logeado:false,data:"usuario o contraseña incorreto"});
          }
        }
    });
  };
  Usuario.remoteMethod('login',{
    accepts:[
      {arg: 'usuario', type: 'string', required: true},
      {arg: 'password', type: 'string', required: true}],
    returns: {arg: 'data', type: 'object'}
  });
  Usuario.registrar = function(correoUsuario, contraseñaUsuario, rutUsuario, numeroTelefonoUsuario, direccionUsuario, nombreUsuario, tipoUsuario, nombreEmpresa, rutEmpresa, paginaWebEmpresa, correoEmpresa, cb){
    Usuario.findOne({where:{or:[{correo:correoUsuario},{rut:rutUsuario}]}},function(error,obj){
      if(error){cb(null,{ok:false,registrado:false,data:error});}
      else{
        if(obj==null){
          var fecha = new Date();
          var user={
            correo: correoUsuario,
            contrasena: contraseñaUsuario,
            rut: rutUsuario,
            numerotelefono: numeroTelefonoUsuario,
            direccion: direccionUsuario,
            fecha: fecha,
            baneado: 0,
            nombre: nombreUsuario,
            idtipousuario: tipoUsuario
          };
          Usuario.create(user,function(error,obj){
            var data=obj;
            if(error){cb(null,{ok:false,registrado:false,data:error});}
            else{
              if(tipoUsuario==2){
                cb(null,{ok:true,data});
              }else{
                var Empresa=app.models.Empresa;
                var empresa={
                  idusuario:data.id,
                  nombre:nombreEmpresa,
                  rut:rutEmpresa,
                  paginaweb:paginaWebEmpresa,
                  fecha: fecha,
                  advertencias: 0,
                  correo:correoEmpresa
                }
                Empresa.create(empresa,function(error,obj){
                  if(error){cb(null,{ok:false,registrado:false,data:error});}
                  else{
                    cb(null,{ok:true,registrado:true,data:{obj,data}});
                  }
                });
              }
            }
          });
        }else{
          cb(null,{ok:true,registrado:false,data:"Usuario ya existe"});
        }
      }
    });
  };
  Usuario.remoteMethod('registrar',{
    accepts:[
      {arg: 'correo', type: 'string', required: true},
      {arg: 'contraseña', type: 'string', required: true},
      {arg: 'rut', type: 'string', required: true},
      {arg: 'numerotelefono', type: 'number', required: true},
      {arg: 'direccion', type: 'string', required: true},
      {arg: 'nombre', type: 'string', required: true},
      {arg: 'tipo', type: 'number', required: true},
      {arg: 'nombreEmpresa', type: 'string', required: false},
      {arg: 'rutEmpresa', type: 'string', required: false},
      {arg: 'paginaWeb', type: 'string', required: false},
      {arg: 'correoEmpresa', type: 'string', required: false}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Usuario.editar=function(id,correo,contraseñaUsuario, numeroTelefonoUsuario, direccionUsuario, nombreUsuario, tipoUsuario, paginaWebEmpresa, correoEmpresa, cb){
    var usuario={
      contrasena:contraseñaUsuario,
      nombre:nombreUsuario,
      numerotelefono:numeroTelefonoUsuario,
      direccion:direccionUsuario,
      tipo:tipoUsuario
    };
    var empresa={
      paginaweb:paginaWebEmpresa,
      correo:correoEmpresa
    };
    var Empresa=app.models.Empresa;
    Usuario.updateAll({correo:correo},usuario,function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        var datausuario=obj;
        Empresa.updateAll({idusuario:id},empresa,function(error,obj){
          if(error){cb(null,{ok:false,data:error});}
          else{
            cb(null,{ok:true,data:obj,datausuario});
          }
        });
      }
    });
  }
  Usuario.remoteMethod('editar',{
    accepts:[
      {arg: 'id', type: 'number', required: true},
      {arg: 'correo', type: 'string', required: true},
      {arg: 'contraseña', type: 'string', required: true},
      {arg: 'numerotelefono', type: 'number', required: true},
      {arg: 'direccion', type: 'string', required: true},
      {arg: 'nombre', type: 'string', required: true},
      {arg: 'tipo', type: 'number', required: true},
      {arg: 'paginaWeb', type: 'string', required: false},
      {arg: 'correoEmpresa', type: 'string', required: false}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Usuario.estadisticas=function(cb){
    cb(null,{ok:true,data:falta});
  }
  Usuario.remoteMethod('estadisticas',{
    accepts:[],
    returns: {arg: 'data', type: 'object'}
  });
  Usuario.disableRemoteMethodByName("count");
  Usuario.disableRemoteMethodByName("patchOrCreate");
  Usuario.disableRemoteMethodByName("replaceById");
  Usuario.disableRemoteMethodByName("findOne");
  Usuario.disableRemoteMethodByName("find");
  Usuario.disableRemoteMethodByName("replaceOrCreate");
  Usuario.disableRemoteMethodByName("create");
  Usuario.disableRemoteMethodByName("findById");
  Usuario.disableRemoteMethodByName("deleteById");
  Usuario.disableRemoteMethodByName("createChangeStream");
  Usuario.disableRemoteMethodByName("updateAll");
  Usuario.disableRemoteMethodByName("exists");
  Usuario.disableRemoteMethodByName("updateAttributes");
  Usuario.disableRemoteMethodByName("patchAttributes");
  Usuario.disableRemoteMethodByName("upsertWithWhere");
  Usuario.disableRemoteMethodByName("updateAttributes");
  Usuario.disableRemoteMethod("upsert", true);
  Usuario.disableRemoteMethod("updateAll", true);
  Usuario.disableRemoteMethod("updateAttributes", false);
  Usuario.disableRemoteMethod('__get__accessTokens', false);
  Usuario.disableRemoteMethodByName("__get__relatedModelName");
  Usuario.disableRemoteMethod('__get__referrals', false);
  Usuario.disableRemoteMethod('__get__referral', false);
  Usuario.disableRemoteMethod('__update__referrals', false);
  Usuario.disableRemoteMethod('__destroy__referrals', false);
};
