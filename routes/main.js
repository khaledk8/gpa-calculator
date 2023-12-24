const express = require('express')
const path = require('path')
const router = express.Router()
const mainController = require('../controllers/maincontroller')

router.get('/', mainController.getUser)


module.exports = router;