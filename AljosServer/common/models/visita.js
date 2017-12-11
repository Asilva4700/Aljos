'use strict';

module.exports = function(Visita) {
  Visita.ingreso=function(idPublicacion, idUsuario,cb){
    var fecha = new Date();
    fecha=fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate();
    console.log(fecha);
    Visita.findOne({where:{and:[{fecha:fecha},{idusuario:idUsuario},{idpublicacion:idPublicacion}]}},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        var data=obj;
        if(data==null){
          var visita={
            idpublicacion:idPublicacion,
            idusuario:idUsuario,
            cantidad:1,
            fecha:fecha
          };
          Visita.create(visita,function(error,obj){
            if(error){cb(null,{ok:false,data:error});}
            else{
              cb(null,{ok:true,data:obj});
            }
          });
        }else{
          var cantidad=data.cantidad+1;
          Visita.updateAll({id:data.id},{cantidad:cantidad},function(error,obj){
            if(error){cb(null,{ok:false,data:error});}
            else{
              cb(null,{ok:true,data:obj});
            }
          });
        }
      }
    });
  }
  Visita.remoteMethod('ingreso',{
    accepts:[
      {arg: 'idPublicacion', type: 'number', required: true},
      {arg: 'IdUsuario', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Visita.disableRemoteMethodByName("count");
  Visita.disableRemoteMethodByName("patchOrCreate");
  Visita.disableRemoteMethodByName("replaceById");
  Visita.disableRemoteMethodByName("findOne");
  Visita.disableRemoteMethodByName("find");
  Visita.disableRemoteMethodByName("replaceOrCreate");
  Visita.disableRemoteMethodByName("create");
  Visita.disableRemoteMethodByName("findById");
  Visita.disableRemoteMethodByName("deleteById");
  Visita.disableRemoteMethodByName("createChangeStream");
  Visita.disableRemoteMethodByName("updateAll");
  Visita.disableRemoteMethodByName("exists");
  Visita.disableRemoteMethodByName("updateAttributes");
  Visita.disableRemoteMethodByName("patchAttributes");
  Visita.disableRemoteMethodByName("upsertWithWhere");
  Visita.disableRemoteMethodByName("updateAttributes");
  Visita.disableRemoteMethod("upsert", true);
  Visita.disableRemoteMethod("updateAll", true);
  Visita.disableRemoteMethod("updateAttributes", false);
  Visita.disableRemoteMethod('__get__accessTokens', false);
  Visita.disableRemoteMethodByName("__get__relatedModelName");
  Visita.disableRemoteMethod('__get__referrals', false);
  Visita.disableRemoteMethod('__get__referral', false);
  Visita.disableRemoteMethod('__update__referrals', false);
  Visita.disableRemoteMethod('__destroy__referrals', false);
};
