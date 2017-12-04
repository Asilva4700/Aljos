'use strict';

module.exports = function(Visita) {
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
