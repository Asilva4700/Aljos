'use strict';

module.exports = function(Local) {
  Local.disableRemoteMethodByName("count");
  Local.disableRemoteMethodByName("patchOrCreate");
  Local.disableRemoteMethodByName("replaceById");
  Local.disableRemoteMethodByName("findOne");
  Local.disableRemoteMethodByName("find");
  Local.disableRemoteMethodByName("replaceOrCreate");
  Local.disableRemoteMethodByName("create");
  Local.disableRemoteMethodByName("findById");
  Local.disableRemoteMethodByName("deleteById");
  Local.disableRemoteMethodByName("createChangeStream");
  Local.disableRemoteMethodByName("updateAll");
  Local.disableRemoteMethodByName("exists");
  Local.disableRemoteMethodByName("updateAttributes");
  Local.disableRemoteMethodByName("patchAttributes");
  Local.disableRemoteMethodByName("upsertWithWhere");
  Local.disableRemoteMethodByName("updateAttributes");
  Local.disableRemoteMethod("upsert", true);
  Local.disableRemoteMethod("updateAll", true);
  Local.disableRemoteMethod("updateAttributes", false);
  Local.disableRemoteMethod('__get__accessTokens', false);
  Local.disableRemoteMethodByName("__get__relatedModelName");
  Local.disableRemoteMethod('__get__referrals', false);
  Local.disableRemoteMethod('__get__referral', false);
  Local.disableRemoteMethod('__update__referrals', false);
  Local.disableRemoteMethod('__destroy__referrals', false);
};
