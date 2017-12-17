'use strict';

module.exports = function(Publicacion) {
  var app = require('../../server/server');
  Publicacion.crear = function(idEmpresa, descripcion, cantidad, nombre, precio, menu, local, direccion,
    numeracion, ciudad, comuna, tamanorecinto, incluyepatio, tamanopatio, incluyecocina, cb){
    var ProductoServicio = app.models.Productoservicio;
    var fecha = new Date();
    if(local==1){
      var local={
        direccion:direccion,
        numeracion:numeracion,
        ciudad:ciudad,
        comuna:comuna,
        tamanorecinto:tamanorecinto,
        incluyepatio:incluyepatio,
        tamanopatio:tamanopatio,
        incluyecocina:incluyecocina,
        fecha:fecha
      }
      var Local = app.models.Local;
      Local.create(local,function(error,obj){
        if(error){cb(null,{ok:false,data:error});}
        else{
          var datalocal=obj;
          var productoservicio={
            nombre:nombre,
            precio:precio,
            menu:menu,
            idlocal:datalocal.id
          };
          ProductoServicio.create(productoservicio,function(error,obj){
            if(error){cb(null,{ok:false,data:error});}
            else{
              var data=obj;
              var publicacion={
                idempresa:idEmpresa,
                idproducto:data.id,
                descripcion:descripcion,
                fecha:fecha,
                cantidad:cantidad
              };
              Publicacion.create(publicacion,function(error,obj){
                if(error){cb(null,{ok:false,data:error});}
                else{
                  var datapubli=obj;
                  var Imagen=app.models.Imagen;
                  var imagen={
                    idpublicacion:datapubli.id,
                    ruta:"",
                    fecha:fecha
                  }
                  Imagen.create(imagen,function(error,obj){
                    var dataimg=obj;
                    if(error){cb(null,{ok:false,data:error});}
                    else{
                      cb(null,{ok:true,datapubli,data,datalocal,dataimg});
                    }
                  });
                }
              });
            }
          });
        }
      });
    }else{
      var productoservicio={
        nombre:nombre,
        precio:precio,
        menu:menu
      };
      ProductoServicio.create(productoservicio,function(error,obj){
        if(error){cb(null,{ok:false,data:error});}
        else{
          var data=obj;
          var publicacion={
            idempresa:idEmpresa,
            idproducto:data.id,
            descripcion:descripcion,
            fecha:fecha,
            cantidad:cantidad
          };
          Publicacion.create(publicacion,function(error,obj){
            if(error){cb(null,{ok:false,data:error});}
            else{
              var datapubli=obj;
              var Imagen=app.models.Imagen;
              var imagen={
                idpublicacion:datapubli.id,
                ruta:"prueba",
                fecha:fecha
              }
              Imagen.create(imagen,function(error,obj){
                var dataimg=obj;
                if(error){cb(null,{ok:false,data:error});}
                else{
                  cb(null,{ok:true,datapubli,data,dataimg});
                }
              });
            }
          });
        }
      });
    }
  };
  Publicacion.remoteMethod('crear',{
    accepts:[
      {arg: 'idEmpresa', type: 'number', required: true},
      {arg: 'descripcion', type: 'string', required: true},
      {arg: 'cantidad', type: 'number', required: true},
      {arg: 'nombre', type: 'string', required: true},
      {arg: 'precio', type: 'number', required: true},
      {arg: 'menu', type: 'number', required: true},
      {arg: 'local', type: 'number', required: true},
      {arg: 'direccion', type: 'string', required: false},
      {arg: 'numeracion', type: 'number', required: false},
      {arg: 'ciudad', type: 'string', required: false},
      {arg: 'comuna', type: 'string', required: false},
      {arg: 'tamanorecinto', type: 'number', required: false},
      {arg: 'incluyepatio', type: 'number', required: false},
      {arg: 'tamanopatio', type: 'number', required: false},
      {arg: 'incluyecocina', type: 'number', required: false}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Publicacion.listar = function(id,cb){
    Publicacion.find({where:{idempresa:id},include:[
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
    ]},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        cb(null,{ok:true,data:obj});
      }
    });
  };
  Publicacion.remoteMethod('listar',{
    accepts:[
    {arg: 'idEmpresa', type: 'number', required: false}
  ],
    returns: {arg: 'data', type: 'object'}
  });
  Publicacion.eliminar = function(id,idproducto,idlocal,idimagen,cb){
    var Imagen=app.models.Imagen;
    Imagen.destroyAll({id:idimagen},function(error,obj){
      if(error){cb(null,{ok:false,data:error});}
      else{
        Publicacion.destroyAll({id:id},function(error,obj){
          if(error){cb(null,{ok:false,data:error});}
          else{
            var Productoservicio = app.models.Productoservicio;
            Productoservicio.destroyAll({id:idproducto},function(error,obj){
              if(error){cb(null,{ok:false,data:error});}
              else{
                if(idlocal==null){
                  cb(null,{ok:true,data:obj});
                }else{
                  var Local = app.models.Local;
                  Local.destroyAll({id:idlocal},function(error,obj){
                    if(error){cb(null,{ok:false,data:error});}
                    else{
                      cb(null,{ok:true,data:obj});
                    }
                  });
                }
              }
            });
          }
        });
      }
    });
  };
  Publicacion.remoteMethod('eliminar',{
    accepts:[
      {arg: 'id', type: 'number', required: true},
      {arg: 'idproducto', type: 'number', required: true},
      {arg: 'idlocal', type: 'number', required: false},
      {arg: 'idimagen', type: 'number', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Publicacion.editar = function (idPublicacion, idProducto, idLocal, idImagen, descripcion, cantidad, nombre, precio, direccion,
    numeracion, ciudad, comuna, tamanorecinto, incluyepatio, tamanopatio, incluyecocina,ruta,cb){
      if(idLocal!=0){
        var Local = app.models.Local;
        var local={
          direccion:direccion,
          numeracion:numeracion,
          ciudad:ciudad,
          comuna:comuna,
          tamanorecinto:tamanorecinto,
          incluyepatio:incluyepatio,
          tamanopatio:tamanopatio,
          incluyecocina:incluyecocina
        };
        Local.updateAll({id:idLocal},local,function(error,obj){
          if(error){cb(null,{ok:false,data:error});}
          else{
            var dataLocal=obj;
            var publicacion={
              descripcion:descripcion,
              cantidad:cantidad
            };
            Publicacion.updateAll({id:idPublicacion},publicacion,function(error,obj){
              if(error){cb(null,{ok:false,data:error});}
              else{false
                var Productoservicio = app.models.Productoservicio;
                var producto={
                  nombre:nombre,
                  precio:precio
                };
                var dataPublicacion=obj;
                Productoservicio.updateAll({id:idProducto},producto,function(error,obj){
                  if(error){cb(null,{ok:false,data:error});}
                  else{
                    var dataProducto=obj;
                    var Imagen=app.models.Imagen;
                    var imagen ={
                      ruta:ruta
                    };
                    Imagen.updateAll({id:idImagen},imagen,function(error,obj){
                      if(error){cb(null,{ok:false,data:error});}
                      else{
                        var dataImg=obj;
                        cb(null,{ok:true,dataProducto,dataPublicacion,dataLocal,dataImg});
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }else{
        var publicacion={
          descripcion:descripcion,
          cantidad:cantidad
        };
        Publicacion.updateAll({id:idPublicacion},publicacion,function(error,obj){
          if(error){cb(null,{ok:false,data:error});}
          else{
            var Productoservicio = app.models.Productoservicio;
            var producto={
              nombre:nombre,
              precio:precio
            };
            var dataPublicacion=obj;
            Productoservicio.updateAll({id:idProducto},producto,function(error,obj){
              if(error){cb(null,{ok:false,data:error});}
              else{
                var dataProducto=obj;
                var Imagen=app.models.Imagen;
                var imagen ={
                  ruta:ruta
                };
                Imagen.updateAll({id:idImagen},imagen,function(error,obj){

                  if(error){cb(null,{ok:false,data:error});}
                  else{
                    var dataImg=obj;
                    cb(null,{ok:true,dataProducto,dataPublicacion,dataImg});
                  }
                });
              }
            });
          }
        });
      }
  };
  Publicacion.remoteMethod('editar',{
    accepts:[
      {arg: 'idPublicacion', type: 'number', required: true},
      {arg: 'idProducto', type: 'number', required: true},
      {arg: 'idLocal', type: 'number', required: false},
      {arg: 'idImagen', type: 'number', required: true},
      {arg: 'descripcion', type: 'string', required: true},
      {arg: 'cantidad', type: 'number', required: true},
      {arg: 'nombre', type: 'string', required: true},
      {arg: 'precio', type: 'number', required: true},
      {arg: 'direccion', type: 'string', required: false},
      {arg: 'numeracion', type: 'number', required: false},
      {arg: 'ciudad', type: 'string', required: false},
      {arg: 'comuna', type: 'string', required: false},
      {arg: 'tamanorecinto', type: 'number', required: false},
      {arg: 'incluyepatio', type: 'number', required: false},
      {arg: 'tamanopatio', type: 'number', required: false},
      {arg: 'incluyecocina', type: 'number', required: false},
      {arg: 'rutaImagen', type: 'string', required: true}
    ],
    returns: {arg: 'data', type: 'object'}
  });
  Publicacion.disableRemoteMethodByName("count");
  Publicacion.disableRemoteMethodByName("patchOrCreate");
  Publicacion.disableRemoteMethodByName("replaceById");
  Publicacion.disableRemoteMethodByName("findOne");
  Publicacion.disableRemoteMethodByName("find");
  Publicacion.disableRemoteMethodByName("replaceOrCreate");
  Publicacion.disableRemoteMethodByName("create");
  Publicacion.disableRemoteMethodByName("findById");
  Publicacion.disableRemoteMethodByName("deleteById");
  Publicacion.disableRemoteMethodByName("createChangeStream");
  Publicacion.disableRemoteMethodByName("updateAll");
  Publicacion.disableRemoteMethodByName("exists");
  Publicacion.disableRemoteMethodByName("updateAttributes");
  Publicacion.disableRemoteMethodByName("patchAttributes");
  Publicacion.disableRemoteMethodByName("upsertWithWhere");
  Publicacion.disableRemoteMethodByName("updateAttributes");
  Publicacion.disableRemoteMethod("upsert", true);
  Publicacion.disableRemoteMethod("updateAll", true);
  Publicacion.disableRemoteMethod("updateAttributes", false);
  Publicacion.disableRemoteMethod('__get__accessTokens', false);
  Publicacion.disableRemoteMethodByName("__get__relatedModelName");
  Publicacion.disableRemoteMethod('__get__referrals', false);
  Publicacion.disableRemoteMethod('__get__referral', false);
  Publicacion.disableRemoteMethod('__update__referrals', false);
  Publicacion.disableRemoteMethod('__destroy__referrals', false);
};
