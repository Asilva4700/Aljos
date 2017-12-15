'use strict';

module.exports = function(Cotizacion) {
  var app = require('../../server/server');
  Cotizacion.solicitar = function(idEmpresa, idPublicacion, idUsuario, total, cb){
    var fecha = new Date();
    var cotizacion={
      idempresa:idEmpresa,
      idpublicacion:idPublicacion,
      idusuario:idUsuario,
      total:total,
      fecha:fecha,
      estado:"Pendiente"
    };
    Cotizacion.create(cotizacion,function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        var dataCotizacion=obj;
        var Pago = app.models.Pago;
        var pago={
          idcotizacion:dataCotizacion.id,
          estado:"pendiente",
          idusuario:idUsuario
        };
        Pago.create(pago,function(error,obj){
          if(error){cb(null,{ok:false,data:error});}
          else{
            cb(null,{ok:true,dataCotizacion,data:obj});
          }
        });
    }
    });
  }
  Cotizacion.remoteMethod('solicitar',{
    accepts:[
      {arg: 'idEmpresa', type: 'number', required: true},
      {arg: 'idPublicacion', type: 'number', required: true},
      {arg: 'idUsuario', type: 'number', required: true},
      {arg: 'total', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Cotizacion.listar=function(idusuario, idempresa, tipo, cb){
    if(idusuario==null && idempresa==null){
      cb(null,{ok:false,data:"Al menos 1 campo debe tener un valor"});
    }else{
      if(tipo==="usuario"){
        Cotizacion.find({where:{idusuario:idusuario}},function(error,obj){
          if(error){cb(null,{ok:false,data:error});}
          else{
            cb(null,{ok:true,data:obj,tipo});
          }
        });
      }else if(tipo==="empresa" || tipo==="vip" || tipo==="vipvideo"){
        Cotizacion.find({where:{idempresa:idempresa}},function(error,obj){
          if(error){cb(null,{ok:false,data:error});}
          else{
            cb(null,{ok:true,data:obj,tipo});
          }
        });
      }
    }
  }
  Cotizacion.remoteMethod('listar',{
    accepts:[
      {arg: 'idUsuario', type: 'number', required: false},
      {arg: 'idEmpresa', type: 'number', required: false},
      {arg: 'tipo', type: 'string', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Cotizacion.disableRemoteMethodByName("count");
  Cotizacion.disableRemoteMethodByName("patchOrCreate");
  Cotizacion.disableRemoteMethodByName("replaceById");
  Cotizacion.disableRemoteMethodByName("findOne");
  Cotizacion.disableRemoteMethodByName("find");
  Cotizacion.disableRemoteMethodByName("replaceOrCreate");
  Cotizacion.disableRemoteMethodByName("create");
  Cotizacion.disableRemoteMethodByName("findById");
  Cotizacion.disableRemoteMethodByName("deleteById");
  Cotizacion.disableRemoteMethodByName("createChangeStream");
  Cotizacion.disableRemoteMethodByName("updateAll");
  Cotizacion.disableRemoteMethodByName("exists");
  Cotizacion.disableRemoteMethodByName("updateAttributes");
  Cotizacion.disableRemoteMethodByName("patchAttributes");
  Cotizacion.disableRemoteMethodByName("upsertWithWhere");
  Cotizacion.disableRemoteMethodByName("updateAttributes");
  Cotizacion.disableRemoteMethod("upsert", true);
  Cotizacion.disableRemoteMethod("updateAll", true);
  Cotizacion.disableRemoteMethod("updateAttributes", false);
  Cotizacion.disableRemoteMethod('__get__accessTokens', false);
  Cotizacion.disableRemoteMethodByName("__get__relatedModelName");
  Cotizacion.disableRemoteMethod('__get__referrals', false);
  Cotizacion.disableRemoteMethod('__get__referral', false);
  Cotizacion.disableRemoteMethod('__update__referrals', false);
  Cotizacion.disableRemoteMethod('__destroy__referrals', false);
};
