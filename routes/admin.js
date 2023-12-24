const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const router = express.Router()

const user = []

router.get('/admin', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'))
})

router.post('/add', (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router