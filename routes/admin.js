const express = require('express')
const path = require('path')

const adminController = require('../controllers/adminController')

const router = express.Router()


/* router.get('/admin', adminController.getAddUser)

router.post('/add', adminController.postAddUser)
 */
// Admin dashboard
router.get('/', adminController.dashboard);

// Handle the creation of a new user
router.post('/createUser', adminController.createUser);

// Handle the deletion of a user
router.post('/deleteUser', adminController.deleteUser);


module.exports = router