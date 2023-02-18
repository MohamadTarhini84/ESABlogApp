const express = require('express')
const {
    getUsers,
    getUser,
    deleteUser,
    updateStatus
} = require('../controllers/userController')

const router = express.Router()

//post a static user
// router.post('/',)
 

//Get All users
router.get('/', getUsers)

//get  a single users
router.get('/:id', getUser)

//Delette a user
router.delete('/:id', deleteUser)

//updateStaus
router.patch('/:id', updateStatus)

module.exports = router