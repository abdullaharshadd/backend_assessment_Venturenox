const fields = require("./fields");
const modelGenerator = require("../../../helpers/modelGenerator");
const ENTITY_NAME = require("../constants");
const EntityModel = modelGenerator(ENTITY_NAME, fields);

module.exports = EntityModel;