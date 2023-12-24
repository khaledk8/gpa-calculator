// routes/staff.js

const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

// Staff dashboard and view records
router.get('/', staffController.viewRecords);

// Handle the updating of a student record
router.post('/editRecord', staffController.editRecord);

module.exports = router;