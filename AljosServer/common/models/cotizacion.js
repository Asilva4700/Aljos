'use strict';

module.exports = function(Cotizacion) {
  Cotizacion.disableRemoteMethodByName("count");
  Cotizacion.disableRemoteMethodByName("patchOrCreate");
  Cotizacion.disableRemoteMethodByName("replaceById");
  Cotizacion.disableRemoteMethodByName("findOne");
  Cotizacion.disableRemoteMethodByName("find");
  Cotizacion.disableRemoteMethodByName("replaceOrCreate");
  Cotizacion.disableRemoteMethodByName("create");
  Cotizacion.disableRemoteMethodByName("findById");
  Cotizacion.disableRemoteMethodByName("deleteById");
  Cotizacion.disableRemoteMethodByName("createChangeStream");
  Cotizacion.disableRemoteMethodByName("updateAll");
  Cotizacion.disableRemoteMethodByName("exists");
  Cotizacion.disableRemoteMethodByName("updateAttributes");
  Cotizacion.disableRemoteMethodByName("patchAttributes");
  Cotizacion.disableRemoteMethodByName("upsertWithWhere");
  Cotizacion.disableRemoteMethodByName("updateAttributes");
  Cotizacion.disableRemoteMethod("upsert", true);
  Cotizacion.disableRemoteMethod("updateAll", true);
  Cotizacion.disableRemoteMethod("updateAttributes", false);
  Cotizacion.disableRemoteMethod('__get__accessTokens', false);
  Cotizacion.disableRemoteMethodByName("__get__relatedModelName");
  Cotizacion.disableRemoteMethod('__get__referrals', false);
  Cotizacion.disableRemoteMethod('__get__referral', false);
  Cotizacion.disableRemoteMethod('__update__referrals', false);
  Cotizacion.disableRemoteMethod('__destroy__referrals', false);
};
