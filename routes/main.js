const express = require('express')
const path = require('path')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.getUser)
router.get('/logout', mainController.logoutUser);

module.exports = router;