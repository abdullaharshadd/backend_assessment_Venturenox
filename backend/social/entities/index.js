const express = require('express');
const router = express.Router();

const userProfileRouter = require('./userProfile/http/routes');
const tenantProfileRouter = require('./tenantProfile/http/routes');

router.use("/userProfile", userProfileRouter);
router.use("/tenantProfile", tenantProfileRouter);

module.exports = router;