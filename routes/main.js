const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.getUser)
router.post('/login', mainController.loginUser)
router.get('/logout', mainController.logoutUser);

module.exports = router;