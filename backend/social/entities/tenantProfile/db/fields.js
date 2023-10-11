const DataTypes = require("sequelize");
const { INTEGER, STRING, JSON } = DataTypes;

const fields = {
  id: { type: INTEGER, allowNull: false, primaryKey: true },
  tenant_name: { type: STRING, allowNull: true },
  address: { type: JSON, allowNull: true },
  city: { type: STRING, allowNull: true, defaultValue: "Lahore" },
  state: { type: STRING, allowNull: true, defaultValue: "Lahore" },
  country: { type: STRING, allowNull: true, defaultValue: "Pakistan" },
  zip_code: { type: STRING, allowNull: true, defaultValue: "54000" },
  phone: { type: STRING, allowNull: true, defaultValue: "+923111111111" },
  web_url: { type: STRING, allowNull: true, defaultValue: "https://cdn-icons-png.flaticon.com/512/666/666201.png" },
};

module.exports = fields;