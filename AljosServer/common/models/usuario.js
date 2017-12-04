'use strict';

module.exports = function(Usuario) {
  Usuario.listar = function(cb){
    Usuario.find({}, function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null, {ok:true,data:obj});
      }
    });
  };
  Usuario.remoteMethod('listar',{
    accepts:[],
    returns: {arg: 'data', type: 'object'}
  });
  Usuario.login = function(user, pass, cb){
    var fields={
      id:false
    };
    Usuario.findOne({where:{nombre:user},fields:fields}, function(error,obj){
        if(error){cb(null,{ok:false,data:error});}
        else{
          if(obj!=null){
            if(obj.nombre==user && obj.password==pass){
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
