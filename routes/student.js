const express = require('express')
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/viewRecord', studentController.viewRecord)

module.exports = router