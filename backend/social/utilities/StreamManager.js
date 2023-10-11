const userProfileModel = require('../entities/userProfile/db/model');
const tenantProfileModel = require('../entities/tenantProfile/db/model');

const processMessage = async (kafkaMessage) => {

	//Start working here
	try {
		if (kafkaMessage.event_name==="user_created") {
			if (!kafkaMessage.properties)
			{
				return;
			}

			if (!kafkaMessage.properties.tenant_id) {
				console.log('Tenant id cannot be null.');
				return;
			}
			const existingTenant = await tenantProfileModel.findOne({
				where: { id: kafkaMessage.properties.tenant_id },
			});

			if (!existingTenant) {
				console.log('Tenant with the specified tenant_id does not exist.');
				return;
			}

			const user = await userProfileModel.create(kafkaMessage.properties);  // We could have used fetch here if we really wanted to show the microservices communication
			console.log("Sucessfully inserted the user data");
		}
		else if (kafkaMessage.event_name==="tenant_created") {

			if (!kafkaMessage.properties)
			{
				return;
			}

			if (!kafkaMessage.properties.id) {
				console.log('Tenant id cannot be null.');
				return;
			}

			const existingTenant = await tenantProfileModel.findOne({
				where: { id: kafkaMessage.properties.id },
			});
			if (existingTenant) {
				console.log('Tenant with the same ID already exists.');
				return;
			}

			const user = await tenantProfileModel.create(kafkaMessage.properties);
			console.log("Sucessfully inserted the tenant data");
		}
	}
	catch (error) {
		console.log(error);
	}


};

module.exports = { processMessage };

