//using the express router
const express = require('express');
const {
     createPost ,
     getPosts,
     getPost,
     deletePost,
     updatePost
    } = require('../controllers/postController')

const router = express.Router();

//atach to a handler to this
//Get all posts
router.get('/', getPosts)

//GET single post
router.get('/:id',getPost)

//POST a new post
router.post('/', createPost)

//delete a post
router.delete('/:id', deletePost)

//UPDATE A post
router.patch('/:id', updatePost)


module.exports = router;