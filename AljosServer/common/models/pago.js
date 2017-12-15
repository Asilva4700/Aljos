'use strict';

module.exports = function(Pago) {
  Pago.Listar = function(idusuario,cb){
    Pago.find({where:{idusuario:idusuario},include:[
      {
        relation:"usuario",
        scope:{}
      },{
        relation:"cotizacion",
        scope:{}
      }
    ]},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null,{ok:true,data:obj});
      }
    });
  };
  Pago.remoteMethod('Listar',{
    accepts:[
      {arg: 'idusuario', type: 'number', required: false}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Pago.CambiarEstado = function(id,cb){
    Pago.updateAll({id:id},{estado:"Pagado"},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null,{ok:true,data:obj});
      }
    });
  };
  Pago.remoteMethod('CambiarEstado',{
    accepts:[
      {arg: 'id', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Pago.Notificar = function(id,cb){
    Pago.updateAll({id:id},{estado:"Aceptado"},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null,{ok:true,data:obj});
      }
    });
  };
  Pago.remoteMethod('Notificar',{
    accepts:[
      {arg: 'id', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Pago.disableRemoteMethodByName("count");
  Pago.disableRemoteMethodByName("patchOrCreate");
  Pago.disableRemoteMethodByName("replaceById");
  Pago.disableRemoteMethodByName("findOne");
  Pago.disableRemoteMethodByName("find");
  Pago.disableRemoteMethodByName("replaceOrCreate");
  Pago.disableRemoteMethodByName("create");
  Pago.disableRemoteMethodByName("findById");
  Pago.disableRemoteMethodByName("deleteById");
  Pago.disableRemoteMethodByName("createChangeStream");
  Pago.disableRemoteMethodByName("updateAll");
  Pago.disableRemoteMethodByName("exists");
  Pago.disableRemoteMethodByName("updateAttributes");
  Pago.disableRemoteMethodByName("patchAttributes");
  Pago.disableRemoteMethodByName("upsertWithWhere");
  Pago.disableRemoteMethodByName("updateAttributes");
  Pago.disableRemoteMethod("upsert", true);
  Pago.disableRemoteMethod("updateAll", true);
  Pago.disableRemoteMethod("updateAttributes", false);
  Pago.disableRemoteMethod('__get__accessTokens', false);
  Pago.disableRemoteMethodByName("__get__relatedModelName");
  Pago.disableRemoteMethod('__get__referrals', false);
  Pago.disableRemoteMethod('__get__referral', false);
  Pago.disableRemoteMethod('__update__referrals', false);
  Pago.disableRemoteMethod('__destroy__referrals', false);
};
