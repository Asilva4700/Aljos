'use strict';

module.exports = function(Publicacion) {
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
