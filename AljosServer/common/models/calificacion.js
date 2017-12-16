'use strict';

module.exports = function(Calificacion) {
  var app = require('../../server/server');
  Calificacion.Ingresar = function(idusuario, idpublicacion, descripcion, calificacion, cb){
    var fecha = new Date();
    var calificacion={
      idusuario:idusuario,
      idpublicacion:idpublicacion,
      descripcion:descripcion,
      calificacion:calificacion,
      tipo:"Publicacion",
      fecha:fecha
    };
    Calificacion.create(calificacion,function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{

        cb(null,{ok:true,data:obj});
      }
    });
  }
  Calificacion.remoteMethod('Ingresar',{
    accepts:[
      {arg: 'idUsuario', type: 'number', required: true},
      {arg: 'idPublicacion', type: 'number', required: true},
      {arg: 'descripcion', type: 'string', required: true},
      {arg: 'calificacion', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Calificacion.Eliminar = function(id, cb){
    Calificacion.destroyAll({id:id},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null,{ok:true,data:obj});
      }
    });
  }
  Calificacion.remoteMethod('Eliminar',{
    accepts:[
      {arg: 'id', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Calificacion.Listar = function(idpublicacion, cb){
    Calificacion.find({where:{idpublicacion:idpublicacion}},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null,{ok:true,data:obj});
      }
    });
  }
  Calificacion.remoteMethod('Listar',{
    accepts:[
      {arg: 'idPublicacion', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Calificacion.disableRemoteMethodByName("count");
  Calificacion.disableRemoteMethodByName("patchOrCreate");
  Calificacion.disableRemoteMethodByName("replaceById");
  Calificacion.disableRemoteMethodByName("findOne");
  Calificacion.disableRemoteMethodByName("find");
  Calificacion.disableRemoteMethodByName("replaceOrCreate");
  Calificacion.disableRemoteMethodByName("create");
  Calificacion.disableRemoteMethodByName("findById");
  Calificacion.disableRemoteMethodByName("deleteById");
  Calificacion.disableRemoteMethodByName("createChangeStream");
  Calificacion.disableRemoteMethodByName("updateAll");
  Calificacion.disableRemoteMethodByName("exists");
  Calificacion.disableRemoteMethodByName("updateAttributes");
  Calificacion.disableRemoteMethodByName("patchAttributes");
  Calificacion.disableRemoteMethodByName("upsertWithWhere");
  Calificacion.disableRemoteMethodByName("updateAttributes");
  Calificacion.disableRemoteMethod("upsert", true);
  Calificacion.disableRemoteMethod("updateAll", true);
  Calificacion.disableRemoteMethod("updateAttributes", false);
  Calificacion.disableRemoteMethod('__get__accessTokens', false);
  Calificacion.disableRemoteMethodByName("__get__relatedModelName");
  Calificacion.disableRemoteMethod('__get__referrals', false);
  Calificacion.disableRemoteMethod('__get__referral', false);
  Calificacion.disableRemoteMethod('__update__referrals', false);
  Calificacion.disableRemoteMethod('__destroy__referrals', false);
};
