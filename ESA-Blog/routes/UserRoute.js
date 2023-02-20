const express = require('express')
const {
    getUsers, 
    getUser, 
    UpdateUser, 
    DeleteUser,
    followUser,
    UnFollowUser
} = require('../controllers/UserController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//router.use(requireAuth)

router.get('/:id', getUser)
router.get('/',getUsers)
router.patch('/:id', UpdateUser)
router.delete('/:id', DeleteUser)
router.patch('/follow/:id', followUser)
router.patch('/unfollow/:id', UnFollowUser)

module.exports = router