'use strict';

module.exports = function(Empresa) {
  var app = require('../../server/server');
  Empresa.advertir = function(id,cero,cb){
    Empresa.findOne({id:id},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        var data=obj;
        if(data==null){cb(null,{ok:true,data:"empresa no encontrada"});}
        else{
          var Usuario = app.models.Usuario;
          if(cero==1){
            Empresa.updateAll({id:id},{advertencias:0},function(error,obj){
                if(error){cb(null,{ok:false,data:error});}
                else{
                  Usuario.updateAll({id:data.idusuario},{baneado:0},function(error,obj){
                    if(error){cb(null,{ok:false,data:error});}
                    else{
                      cb(null,{ok:true,data:obj});
                    }
                  });
                }
            });
          }else{
            data.advertencias++;
            if(data.advertencias>=3){
              Usuario.updateAll({id:data.idusuario},{baneado:1},function(error,obj){
                if(error){cb(null,{ok:false,data:error});}
                else{
                  var datausu=obj;
                  Empresa.updateAll({id:id},{advertencias:data.advertencias},function(error,obj){
                      if(error){cb(null,{ok:false,data:error});}
                      else{
                        cb(null,{ok:true,data:obj,datausu});
                      }
                  });
                }
              });
            }else{
              Empresa.updateAll({id:id},{advertencias:data.advertencias},function(error,obj){
                  if(error){cb(null,{ok:false,data:error});}
                  else{
                    cb(null,{ok:true,data:obj});
                  }
              });
            }
          }
        }
      }
    });
  };
  Empresa.remoteMethod('advertir',{
    accepts:[
      {arg: 'id', type: 'number', required: true},
      {arg: 'cero', type: 'number', required: false}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Empresa.disableRemoteMethodByName("count");
  Empresa.disableRemoteMethodByName("patchOrCreate");
  Empresa.disableRemoteMethodByName("replaceById");
  Empresa.disableRemoteMethodByName("findOne");
  Empresa.disableRemoteMethodByName("find");
  Empresa.disableRemoteMethodByName("replaceOrCreate");
  Empresa.disableRemoteMethodByName("create");
  Empresa.disableRemoteMethodByName("findById");
  Empresa.disableRemoteMethodByName("deleteById");
  Empresa.disableRemoteMethodByName("createChangeStream");
  Empresa.disableRemoteMethodByName("updateAll");
  Empresa.disableRemoteMethodByName("exists");
  Empresa.disableRemoteMethodByName("updateAttributes");
  Empresa.disableRemoteMethodByName("patchAttributes");
  Empresa.disableRemoteMethodByName("upsertWithWhere");
  Empresa.disableRemoteMethodByName("updateAttributes");
  Empresa.disableRemoteMethod("upsert", true);
  Empresa.disableRemoteMethod("updateAll", true);
  Empresa.disableRemoteMethod("updateAttributes", false);
  Empresa.disableRemoteMethod('__get__accessTokens', false);
  Empresa.disableRemoteMethodByName("__get__relatedModelName");
  Empresa.disableRemoteMethod('__get__referrals', false);
  Empresa.disableRemoteMethod('__get__referral', false);
  Empresa.disableRemoteMethod('__update__referrals', false);
  Empresa.disableRemoteMethod('__destroy__referrals', false);
};
