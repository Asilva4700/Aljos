'use strict';

module.exports = function(Empresa) {
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
