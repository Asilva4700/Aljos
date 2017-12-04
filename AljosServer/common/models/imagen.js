'use strict';

module.exports = function(Imagen) {
  Imagen.disableRemoteMethodByName("count");
  Imagen.disableRemoteMethodByName("patchOrCreate");
  Imagen.disableRemoteMethodByName("replaceById");
  Imagen.disableRemoteMethodByName("findOne");
  Imagen.disableRemoteMethodByName("find");
  Imagen.disableRemoteMethodByName("replaceOrCreate");
  Imagen.disableRemoteMethodByName("create");
  Imagen.disableRemoteMethodByName("findById");
  Imagen.disableRemoteMethodByName("deleteById");
  Imagen.disableRemoteMethodByName("createChangeStream");
  Imagen.disableRemoteMethodByName("updateAll");
  Imagen.disableRemoteMethodByName("exists");
  Imagen.disableRemoteMethodByName("updateAttributes");
  Imagen.disableRemoteMethodByName("patchAttributes");
  Imagen.disableRemoteMethodByName("upsertWithWhere");
  Imagen.disableRemoteMethodByName("updateAttributes");
  Imagen.disableRemoteMethod("upsert", true);
  Imagen.disableRemoteMethod("updateAll", true);
  Imagen.disableRemoteMethod("updateAttributes", false);
  Imagen.disableRemoteMethod('__get__accessTokens', false);
  Imagen.disableRemoteMethodByName("__get__relatedModelName");
  Imagen.disableRemoteMethod('__get__referrals', false);
  Imagen.disableRemoteMethod('__get__referral', false);
  Imagen.disableRemoteMethod('__update__referrals', false);
  Imagen.disableRemoteMethod('__destroy__referrals', false); 
};
