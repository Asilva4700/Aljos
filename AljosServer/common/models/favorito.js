'use strict';

module.exports = function(Favorito) {
  Favorito.Agregar = function(idusuario,idpublicacion,idempresa,cb){
    var fecha = new Date();
    var favorito={
      idusuario:idusuario,
      idpublicacion:idpublicacion,
      idempresa:idempresa,
      fecha:fecha
    };
    Favorito.create(favorito,function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null,{ok:true,data:obj});
      }
    });
  };
  Favorito.remoteMethod('Agregar',{
    accepts:[
      {arg: 'idusuario', type: 'number', required: true},
      {arg: 'idpublicacion', type: 'number', required: false},
      {arg: 'idempresa', type: 'number', required: false}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Favorito.Quitar = function(id,cb){
    Favorito.destroyAll({id:id},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null,{ok:true,data:obj});
      }
    });
  };
  Favorito.remoteMethod('Quitar',{
    accepts:[
      {arg: 'id', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Favorito.Listar = function(idusuario,cb){
    Favorito.find({where:{idusuario:idusuario},include:{
      relation:"publicacion",
      scope:{
        include:[
          {
            relation:'productoservicio',
            scope:{
              include:['local']
            }
          },{
            relation:'empresa',
            scope:{}
          },{
            relation:'imagen',
            scope:{}
          },{
            relation:'calificacion',
            scope:{}
          }
        ]
      }
    }},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null,{ok:true,data:obj});
      }
    });
  };
  Favorito.remoteMethod('Listar',{
    accepts:[
      {arg: 'idusuario', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Favorito.disableRemoteMethodByName("count");
  Favorito.disableRemoteMethodByName("patchOrCreate");
  Favorito.disableRemoteMethodByName("replaceById");
  Favorito.disableRemoteMethodByName("findOne");
  Favorito.disableRemoteMethodByName("find");
  Favorito.disableRemoteMethodByName("replaceOrCreate");
  Favorito.disableRemoteMethodByName("create");
  Favorito.disableRemoteMethodByName("findById");
  Favorito.disableRemoteMethodByName("deleteById");
  Favorito.disableRemoteMethodByName("createChangeStream");
  Favorito.disableRemoteMethodByName("updateAll");
  Favorito.disableRemoteMethodByName("exists");
  Favorito.disableRemoteMethodByName("updateAttributes");
  Favorito.disableRemoteMethodByName("patchAttributes");
  Favorito.disableRemoteMethodByName("upsertWithWhere");
  Favorito.disableRemoteMethodByName("updateAttributes");
  Favorito.disableRemoteMethod("upsert", true);
  Favorito.disableRemoteMethod("updateAll", true);
  Favorito.disableRemoteMethod("updateAttributes", false);
  Favorito.disableRemoteMethod('__get__accessTokens', false);
  Favorito.disableRemoteMethodByName("__get__relatedModelName");
  Favorito.disableRemoteMethod('__get__referrals', false);
  Favorito.disableRemoteMethod('__get__referral', false);
  Favorito.disableRemoteMethod('__update__referrals', false);
  Favorito.disableRemoteMethod('__destroy__referrals', false);
};
