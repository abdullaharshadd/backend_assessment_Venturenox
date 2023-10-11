const { DataTypes } = require("sequelize");

const { STRING, INTEGER, JSON } = DataTypes;

const fields = {
  id: { type: INTEGER, allowNull: false, primaryKey: true },
  first_name: { type: STRING, allowNull: true },
  last_name: { type: STRING, allowNull: true },
  department: { type: JSON, allowNull: true, },
  designation: { type: JSON, allowNull: true, },
  tenant_id: { type: INTEGER, allowNull: true, },
  image_url: { type: STRING, allowNull: true, defaultValue: "https://cdn-icons-png.flaticon.com/512/666/666201.png" },
  city: { type: STRING, allowNull: true, defaultValue: "Lahore" },
  country: { type: STRING, allowNull: true, defaultValue: "Pakistan" },
  bio: { type: STRING, allowNull: true, defaultValue: "54000" },
  social_links: { type: JSON, allowNull: true, },
  employee_id: { type: INTEGER, allowNull: true },

};

module.exports = fields;
