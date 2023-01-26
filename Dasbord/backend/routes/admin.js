const express = require('express')

//controller function
const { loginAdmin } = require('../controllers/adminController')

const router = express.Router()

//login router
router.post('/login', loginAdmin)

module.exports = router