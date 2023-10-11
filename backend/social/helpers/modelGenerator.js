const sequelize = require("../database").sequelize;

const modelGenerator = (ENTITY_NAME, fields, options) => {
  const EntityModel = sequelize.define(ENTITY_NAME, fields, { paranoid: true, ...options });
  return EntityModel;
};

module.exports = modelGenerator;