const express = require('express');
const router = express.Router();
const userProfileController = require('./controller');

// Routes
router.post('/', userProfileController.createUser);
router.get('/', userProfileController.getAllUsers);
router.get('/:id', userProfileController.getUserById);
router.patch('/:id', userProfileController.updateUser);
router.delete('/:id', userProfileController.deleteUser);

module.exports = router;