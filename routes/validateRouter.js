const express = require('express');
const router = express.Router();
const { validationResponse } = require('../controllers/userControllers');
const { validateKeys, isAdult, isPart } = require('../midleware/validation');

router.route('/').post(validateKeys, isAdult, isPart, validationResponse);

module.exports = router;
