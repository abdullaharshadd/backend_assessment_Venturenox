const tenantProfileModel = require('../db/model');

// Function to create a new tenant
const createTenant = async (req, res) => {
    try {

        if (!req.body.id) {
            return res.status(400).json({ error: 'Please Provide tenant id' });
        }
        const existingTenant = await tenantProfileModel.findOne({
            where: { id: req.body.id },
        });
        if (existingTenant) {
            return res.status(409).json({ error: 'Tenant with the same ID already exists.' });
        }
        const tenant = await tenantProfileModel.create(req.body);
        res.status(201).json(tenant);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Could not create tenant.' });
    }
};

// Function to get all tenants
const getAllTenants = async (req, res) => {
    const tenants = await tenantProfileModel.findAll();
    res.json(tenants);
};

// Function to get a specific tenant by ID
const getTenantById = async (req, res) => {
    const { id } = req.params;
    const tenant = await tenantProfileModel.findByPk(id);
    if (tenant) {
        res.json(tenant);
    } else {
        res.status(404).json({ error: 'Tenant not found.' });
    }
};

// Function to update a specific tenant by ID
const updateTenant = async (req, res) => {
    const { id } = req.params;
    const updatedTenant = req.body;

    const [affectedRows] = await tenantProfileModel.update(updatedTenant, {
        where: { tenant_id: id },
    });

    if (affectedRows > 0) {
        res.json({ message: 'Tenant updated successfully.' });
    } else {
        res.status(404).json({ error: 'Tenant not found or could not be updated.' });
    }
};

// Function to delete a specific tenant by ID
const deleteTenant = async (req, res) => {
    const { id } = req.params;
    const affectedRows = await tenantProfileModel.destroy({ where: { tenant_id: id } });

    if (affectedRows > 0) {
        res.json({ message: 'Tenant deleted successfully.' });
    } else {
        res.status(404).json({ error: 'Tenant not found or could not be deleted.' });
    }
};

module.exports = {
    createTenant,
    getAllTenants,
    getTenantById,
    updateTenant,
    deleteTenant,
  };