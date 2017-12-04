'use strict';

module.exports = function(Favorito) {
  Favorito.disableRemoteMethodByName("count");
  Favorito.disableRemoteMethodByName("patchOrCreate");
  Favorito.disableRemoteMethodByName("replaceById");
  Favorito.disableRemoteMethodByName("findOne");
  Favorito.disableRemoteMethodByName("find");
  Favorito.disableRemoteMethodByName("replaceOrCreate");
  Favorito.disableRemoteMethodByName("create");
  Favorito.disableRemoteMethodByName("findById");
  Favorito.disableRemoteMethodByName("deleteById");
  Favorito.disableRemoteMethodByName("createChangeStream");
  Favorito.disableRemoteMethodByName("updateAll");
  Favorito.disableRemoteMethodByName("exists");
  Favorito.disableRemoteMethodByName("updateAttributes");
  Favorito.disableRemoteMethodByName("patchAttributes");
  Favorito.disableRemoteMethodByName("upsertWithWhere");
  Favorito.disableRemoteMethodByName("updateAttributes");
  Favorito.disableRemoteMethod("upsert", true);
  Favorito.disableRemoteMethod("updateAll", true);
  Favorito.disableRemoteMethod("updateAttributes", false);
  Favorito.disableRemoteMethod('__get__accessTokens', false);
  Favorito.disableRemoteMethodByName("__get__relatedModelName");
  Favorito.disableRemoteMethod('__get__referrals', false);
  Favorito.disableRemoteMethod('__get__referral', false);
  Favorito.disableRemoteMethod('__update__referrals', false);
  Favorito.disableRemoteMethod('__destroy__referrals', false); 
};
