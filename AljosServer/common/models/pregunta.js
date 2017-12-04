'use strict';

module.exports = function(Pregunta) {
  Pregunta.disableRemoteMethodByName("count");
  Pregunta.disableRemoteMethodByName("patchOrCreate");
  Pregunta.disableRemoteMethodByName("replaceById");
  Pregunta.disableRemoteMethodByName("findOne");
  Pregunta.disableRemoteMethodByName("find");
  Pregunta.disableRemoteMethodByName("replaceOrCreate");
  Pregunta.disableRemoteMethodByName("create");
  Pregunta.disableRemoteMethodByName("findById");
  Pregunta.disableRemoteMethodByName("deleteById");
  Pregunta.disableRemoteMethodByName("createChangeStream");
  Pregunta.disableRemoteMethodByName("updateAll");
  Pregunta.disableRemoteMethodByName("exists");
  Pregunta.disableRemoteMethodByName("updateAttributes");
  Pregunta.disableRemoteMethodByName("patchAttributes");
  Pregunta.disableRemoteMethodByName("upsertWithWhere");
  Pregunta.disableRemoteMethodByName("updateAttributes");
  Pregunta.disableRemoteMethod("upsert", true);
  Pregunta.disableRemoteMethod("updateAll", true);
  Pregunta.disableRemoteMethod("updateAttributes", false);
  Pregunta.disableRemoteMethod('__get__accessTokens', false);
  Pregunta.disableRemoteMethodByName("__get__relatedModelName");
  Pregunta.disableRemoteMethod('__get__referrals', false);
  Pregunta.disableRemoteMethod('__get__referral', false);
  Pregunta.disableRemoteMethod('__update__referrals', false);
  Pregunta.disableRemoteMethod('__destroy__referrals', false); 
};
