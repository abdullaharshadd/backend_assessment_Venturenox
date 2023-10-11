const express = require('express');
const initializeDB = require('./database').initializeDB;
const router = require('./entities/index');

require('dotenv').config(); // Loads the environment variables from .env
//const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
//const { connectConsumer } = require('./utilities/consumer');
//const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.use('/health', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});

app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initializeDB();
	await initProducer();

});