const express = require('express');
const router = express.Router();
const tenantProfileController = require('./controller');

// Routes
router.post('/', tenantProfileController.createTenant);
router.get('/', tenantProfileController.getAllTenants);
router.get('/:id', tenantProfileController.getTenantById);
router.patch('/:id', tenantProfileController.updateTenant);
router.delete('/:id', tenantProfileController.deleteTenant);

module.exports = router;