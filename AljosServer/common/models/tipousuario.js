'use strict';

module.exports = function(Tipousuario) {
  Tipousuario.disableRemoteMethodByName("count");
  Tipousuario.disableRemoteMethodByName("patchOrCreate");
  Tipousuario.disableRemoteMethodByName("replaceById");
  Tipousuario.disableRemoteMethodByName("findOne");
  Tipousuario.disableRemoteMethodByName("find");
  Tipousuario.disableRemoteMethodByName("replaceOrCreate");
  Tipousuario.disableRemoteMethodByName("create");
  Tipousuario.disableRemoteMethodByName("findById");
  Tipousuario.disableRemoteMethodByName("deleteById");
  Tipousuario.disableRemoteMethodByName("createChangeStream");
  Tipousuario.disableRemoteMethodByName("updateAll");
  Tipousuario.disableRemoteMethodByName("exists");
  Tipousuario.disableRemoteMethodByName("updateAttributes");
  Tipousuario.disableRemoteMethodByName("patchAttributes");
  Tipousuario.disableRemoteMethodByName("upsertWithWhere");
  Tipousuario.disableRemoteMethodByName("updateAttributes");
  Tipousuario.disableRemoteMethod("upsert", true);
  Tipousuario.disableRemoteMethod("updateAll", true);
  Tipousuario.disableRemoteMethod("updateAttributes", false);
  Tipousuario.disableRemoteMethod('__get__accessTokens', false);
  Tipousuario.disableRemoteMethodByName("__get__relatedModelName");
  Tipousuario.disableRemoteMethod('__get__referrals', false);
  Tipousuario.disableRemoteMethod('__get__referral', false);
  Tipousuario.disableRemoteMethod('__update__referrals', false);
  Tipousuario.disableRemoteMethod('__destroy__referrals', false);
};
