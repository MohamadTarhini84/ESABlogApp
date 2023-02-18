const express = require('express')

//controller function
const { loginAdmin ,
         getAdmins,
         getAdmin,
         postAdmin,
         deleteAdmin,
         updateAdmin

} = require('../controllers/adminController')

const router = express.Router()

//login router
router.post('/login', loginAdmin)

//get all admins
router.get('/',getAdmins)

//get one admin
router.get('/:id',getAdmin)


// add a new admin
router.post('/', postAdmin)

//delete Admin
router.delete('/:id', deleteAdmin)

//update Admin
router.patch('/:id',updateAdmin)



module.exports = router