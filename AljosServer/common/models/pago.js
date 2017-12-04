'use strict';

module.exports = function(Pago) {
  Pago.disableRemoteMethodByName("count");
  Pago.disableRemoteMethodByName("patchOrCreate");
  Pago.disableRemoteMethodByName("replaceById");
  Pago.disableRemoteMethodByName("findOne");
  Pago.disableRemoteMethodByName("find");
  Pago.disableRemoteMethodByName("replaceOrCreate");
  Pago.disableRemoteMethodByName("create");
  Pago.disableRemoteMethodByName("findById");
  Pago.disableRemoteMethodByName("deleteById");
  Pago.disableRemoteMethodByName("createChangeStream");
  Pago.disableRemoteMethodByName("updateAll");
  Pago.disableRemoteMethodByName("exists");
  Pago.disableRemoteMethodByName("updateAttributes");
  Pago.disableRemoteMethodByName("patchAttributes");
  Pago.disableRemoteMethodByName("upsertWithWhere");
  Pago.disableRemoteMethodByName("updateAttributes");
  Pago.disableRemoteMethod("upsert", true);
  Pago.disableRemoteMethod("updateAll", true);
  Pago.disableRemoteMethod("updateAttributes", false);
  Pago.disableRemoteMethod('__get__accessTokens', false);
  Pago.disableRemoteMethodByName("__get__relatedModelName");
  Pago.disableRemoteMethod('__get__referrals', false);
  Pago.disableRemoteMethod('__get__referral', false);
  Pago.disableRemoteMethod('__update__referrals', false);
  Pago.disableRemoteMethod('__destroy__referrals', false); 
};
