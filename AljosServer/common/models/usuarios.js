'use strict';

module.exports = function(Usuarios) {
  Usuarios.listar = function(cb){
    Usuarios.find({}, function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null, {ok:true,data:obj});
      }
    });
  }
  Usuarios.remoteMethod('listar',{
    accepts:[],
    returns: {arg: 'data', type: 'object'},
    ttp: {path: '/#!/Usuario/listar', verb: 'post'}
  })
  Usuarios.disableRemoteMethodByName("count");
  Usuarios.disableRemoteMethodByName("patchOrCreate");
  Usuarios.disableRemoteMethodByName("replaceById");
  Usuarios.disableRemoteMethodByName("findOne");
  Usuarios.disableRemoteMethodByName("find");
  Usuarios.disableRemoteMethodByName("replaceOrCreate");
  Usuarios.disableRemoteMethodByName("create");
  Usuarios.disableRemoteMethodByName("findById");
  Usuarios.disableRemoteMethodByName("deleteById");
  Usuarios.disableRemoteMethodByName("createChangeStream");
  Usuarios.disableRemoteMethodByName("updateAll");
  Usuarios.disableRemoteMethodByName("exists");
  Usuarios.disableRemoteMethodByName("updateAttributes");
  Usuarios.disableRemoteMethodByName("patchAttributes");
  Usuarios.disableRemoteMethodByName("upsertWithWhere");
  Usuarios.disableRemoteMethodByName("updateAttributes");
  Usuarios.disableRemoteMethod("upsert", true);
  Usuarios.disableRemoteMethod("updateAll", true);
  Usuarios.disableRemoteMethod("updateAttributes", false);
  Usuarios.disableRemoteMethod('__get__accessTokens', false);
  Usuarios.disableRemoteMethodByName("__get__relatedModelName");
  Usuarios.disableRemoteMethod('__get__referrals', false);
  Usuarios.disableRemoteMethod('__get__referral', false);
  Usuarios.disableRemoteMethod('__update__referrals', false);
  Usuarios.disableRemoteMethod('__destroy__referrals', false);
};
