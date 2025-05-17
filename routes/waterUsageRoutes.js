const express = require('express');
const router = express.Router();
const waterUsageController = require('../controllers/waterUsageController');

router.get('/', waterUsageController.getAllWaterUsages);
router.get('/average-consumption', waterUsageController.getAverageConsumption);
router.get('/monthly', waterUsageController.getUsageByMonth);
router.get('/top-consumers', waterUsageController.getTopConsumers);
router.get('/low-consumers', waterUsageController.getLowConsumers);

module.exports = router;