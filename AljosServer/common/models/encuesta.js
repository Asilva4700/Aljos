'use strict';

module.exports = function(Encuesta) {
  Encuesta.crear = function(pregunta, respuesta, numeroencuesta, cb){
    var encuesta={
      pregunta:pregunta,
      respuesta:respuesta,
      numeroencuesta:numeroencuesta
    };
    Encuesta.create(encuesta,function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
         cb(null,{ok:true,data:obj});
      }
    });
  }
  Encuesta.remoteMethod('crear',{
    accepts:[
      {arg: 'pregunta', type: 'string', required: true},
      {arg: 'respuesta', type: 'string', required: false},
      {arg: 'numeroencuesta', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Encuesta.Resultados=function(id,pregunta,respuesta,cb){

  }
  Encuesta.remoteMethod('Resultados',{
    accepts:[
      {arg: 'pregunta', type: 'string', required: true},
      {arg: 'respuesta', type: 'string', required: false},
      {arg: 'numeroencuesta', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Encuesta.Llenar=function(id,respuesta,cb){

  }
  Encuesta.remoteMethod('Llenar',{
    accepts:[
      {arg: 'pregunta', type: 'string', required: true},
      {arg: 'respuesta', type: 'string', required: false},
      {arg: 'numeroencuesta', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Encuesta.disableRemoteMethodByName("count");
  Encuesta.disableRemoteMethodByName("patchOrCreate");
  Encuesta.disableRemoteMethodByName("replaceById");
  Encuesta.disableRemoteMethodByName("findOne");
  Encuesta.disableRemoteMethodByName("find");
  Encuesta.disableRemoteMethodByName("replaceOrCreate");
  Encuesta.disableRemoteMethodByName("create");
  Encuesta.disableRemoteMethodByName("findById");
  Encuesta.disableRemoteMethodByName("deleteById");
  Encuesta.disableRemoteMethodByName("createChangeStream");
  Encuesta.disableRemoteMethodByName("updateAll");
  Encuesta.disableRemoteMethodByName("exists");
  Encuesta.disableRemoteMethodByName("updateAttributes");
  Encuesta.disableRemoteMethodByName("patchAttributes");
  Encuesta.disableRemoteMethodByName("upsertWithWhere");
  Encuesta.disableRemoteMethodByName("updateAttributes");
  Encuesta.disableRemoteMethod("upsert", true);
  Encuesta.disableRemoteMethod("updateAll", true);
  Encuesta.disableRemoteMethod("updateAttributes", false);
  Encuesta.disableRemoteMethod('__get__accessTokens', false);
  Encuesta.disableRemoteMethodByName("__get__relatedModelName");
  Encuesta.disableRemoteMethod('__get__referrals', false);
  Encuesta.disableRemoteMethod('__get__referral', false);
  Encuesta.disableRemoteMethod('__update__referrals', false);
  Encuesta.disableRemoteMethod('__destroy__referrals', false);
};
