const Sequelize = require("sequelize");
const createRelationships = require('./relationships');
const { POSTGRES_HOST, POSTGRES_USERNAME, POSTGRES_PASSWORD, POSTGRES_DATABASE} = process.env;

const sequelize = new Sequelize(POSTGRES_DATABASE, POSTGRES_USERNAME, POSTGRES_PASSWORD, {
  host: POSTGRES_HOST,
  dialect: "postgres",
  logQueryParameters: true,
  pool: {
    max: 10,
    acquire: 300000,
  }
});

const initializeDB = () => {
    createRelationships();
    try
    {
    sequelize.sync({ force: true }).then(() => {
        console.log('Models synced to the database');
    }).catch((err) => {
        console.error('Error syncing models:', err);
    });
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports = { sequelize, initializeDB };

  
