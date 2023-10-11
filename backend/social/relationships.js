const createRelationships = () => {
  const tenantProfileModel = require("./entities/tenantProfile/db/model");
  const userProfileModel = require("./entities/userProfile/db/model");
 
  userProfileModel.belongsTo(tenantProfileModel, { foreignKey: 'tenant_id' });

};

module.exports = createRelationships;