
const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');


router.get('/', staffController.viewRecords);


router.post('/editRecord', staffController.editRecord);

router.post('/updateDESKey', staffController.updateDESKey);
router.post('/updateRSAKey', staffController.updateRSAKey);

module.exports = router;