'use strict';

module.exports = function(Calificacion) {
  Calificacion.disableRemoteMethodByName("count");
  Calificacion.disableRemoteMethodByName("patchOrCreate");
  Calificacion.disableRemoteMethodByName("replaceById");
  Calificacion.disableRemoteMethodByName("findOne");
  Calificacion.disableRemoteMethodByName("find");
  Calificacion.disableRemoteMethodByName("replaceOrCreate");
  Calificacion.disableRemoteMethodByName("create");
  Calificacion.disableRemoteMethodByName("findById");
  Calificacion.disableRemoteMethodByName("deleteById");
  Calificacion.disableRemoteMethodByName("createChangeStream");
  Calificacion.disableRemoteMethodByName("updateAll");
  Calificacion.disableRemoteMethodByName("exists");
  Calificacion.disableRemoteMethodByName("updateAttributes");
  Calificacion.disableRemoteMethodByName("patchAttributes");
  Calificacion.disableRemoteMethodByName("upsertWithWhere");
  Calificacion.disableRemoteMethodByName("updateAttributes");
  Calificacion.disableRemoteMethod("upsert", true);
  Calificacion.disableRemoteMethod("updateAll", true);
  Calificacion.disableRemoteMethod("updateAttributes", false);
  Calificacion.disableRemoteMethod('__get__accessTokens', false);
  Calificacion.disableRemoteMethodByName("__get__relatedModelName");
  Calificacion.disableRemoteMethod('__get__referrals', false);
  Calificacion.disableRemoteMethod('__get__referral', false);
  Calificacion.disableRemoteMethod('__update__referrals', false);
  Calificacion.disableRemoteMethod('__destroy__referrals', false); 
};
