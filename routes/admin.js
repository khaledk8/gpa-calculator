const express = require('express')
const path = require('path')

const adminController = require('../controllers/adminController')

const router = express.Router()

const user = []

router.get('/admin', adminController.getAddUser)

router.post('/add', adminController.postAddUser)

module.exports = router