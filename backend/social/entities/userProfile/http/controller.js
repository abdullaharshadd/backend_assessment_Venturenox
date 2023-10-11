const userProfileModel = require('../db/model');
const tenantProfileModel = require('../../tenantProfile/db/model');
// Function to create a new user
const createUser = async (req, res) => {
    try {
        
        if (!req.body.tenant_id) {
            return res.status(400).json({ error: 'Tenant id cannot be null.' });
        }
        const existingTenant = await tenantProfileModel.findOne({
            where: { id: req.body.tenant_id },
        });

        if (!existingTenant) {
            return res.status(400).json({ error: 'Tenant with the specified tenant_id does not exist.' });
        }
        const user = await userProfileModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Could not create user.' });
    }
};

// Function to get all users
const getAllUsers = async (req, res) => {
    const users = await userProfileModel.findAll();
    res.json(users);
};

// Function to get a specific user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userProfileModel.findByPk(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'user not found.' });
    }
};

// Function to update a specific user by ID
const updateUser = async (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    const [affectedRows] = await userProfileModel.update(updatedUser, {
        where: { user_id: id },
    });

    if (affectedRows > 0) {
        res.json({ message: 'user updated successfully.' });
    } else {
        res.status(404).json({ error: 'user not found or could not be updated.' });
    }
};

// Function to delete a specific user by ID
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const affectedRows = await userProfileModel.destroy({ where: { user_id: id } });

    if (affectedRows > 0) {
        res.json({ message: 'user deleted successfully.' });
    } else {
        res.status(404).json({ error: 'user not found or could not be deleted.' });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  };  