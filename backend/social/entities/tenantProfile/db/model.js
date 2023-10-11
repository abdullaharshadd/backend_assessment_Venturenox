const fields = require("./fields");
const ENTITY_NAME = require("../constants");
const modelGenerator = require("../../../helpers/modelGenerator");
const EntityModel = modelGenerator(ENTITY_NAME, fields);

module.exports = EntityModel;