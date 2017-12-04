'use strict';

module.exports = function(Productoservicio) {
  Productoservicio.disableRemoteMethodByName("count");
  Productoservicio.disableRemoteMethodByName("patchOrCreate");
  Productoservicio.disableRemoteMethodByName("replaceById");
  Productoservicio.disableRemoteMethodByName("findOne");
  Productoservicio.disableRemoteMethodByName("find");
  Productoservicio.disableRemoteMethodByName("replaceOrCreate");
  Productoservicio.disableRemoteMethodByName("create");
  Productoservicio.disableRemoteMethodByName("findById");
  Productoservicio.disableRemoteMethodByName("deleteById");
  Productoservicio.disableRemoteMethodByName("createChangeStream");
  Productoservicio.disableRemoteMethodByName("updateAll");
  Productoservicio.disableRemoteMethodByName("exists");
  Productoservicio.disableRemoteMethodByName("updateAttributes");
  Productoservicio.disableRemoteMethodByName("patchAttributes");
  Productoservicio.disableRemoteMethodByName("upsertWithWhere");
  Productoservicio.disableRemoteMethodByName("updateAttributes");
  Productoservicio.disableRemoteMethod("upsert", true);
  Productoservicio.disableRemoteMethod("updateAll", true);
  Productoservicio.disableRemoteMethod("updateAttributes", false);
  Productoservicio.disableRemoteMethod('__get__accessTokens', false);
  Productoservicio.disableRemoteMethodByName("__get__relatedModelName");
  Productoservicio.disableRemoteMethod('__get__referrals', false);
  Productoservicio.disableRemoteMethod('__get__referral', false);
  Productoservicio.disableRemoteMethod('__update__referrals', false);
  Productoservicio.disableRemoteMethod('__destroy__referrals', false); 
};
