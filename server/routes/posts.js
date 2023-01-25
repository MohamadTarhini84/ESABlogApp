const router = require('express').Router()
const Post = require("../models/post")
const mongoose=require("mongoose")
const upload=require('../controllers/uploadController')

function handleErrors(error){
    let err={}

    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })
    return err
}

router.get('/:userId', (req,res)=>{
    getPosts(req.params.userId, res)
})

router.post('/new/:userId',  (req,res)=>{
    createPost(req.body, req.params.userId, res)
})

router.delete('/delete/:postId',(req,res)=>{
    deletePost(req.params.postId, res)
})

router.patch('/edit/:postId', (req, res)=>{
    editPost(req.body, req.params.postId, res)
})

router.patch('/addLike/:postId', (req, res)=>{
    addLike(req.body,req.params.postId, res)
})

router.patch('/removeLike/:postId', (req, res)=>{
    removeLike(req.body,req.params.postId, res)
})

async function getPosts(userId, res){
    try{
        const posts = await Post.find({userId: mongoose.Types.ObjectId(userId)})
        res.status(201).json(posts)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
        res.status(401)
    }
}

async function createPost(userObj, userId, res){ 
    try{
        const newPost= new Post({
            userId: mongoose.Types.ObjectId(userId.trim()),
            content: userObj.content,
            username:userObj.username,
            caption:userObj.caption
        })
        const user = await Post.create(newPost)
        res.status(201).json(user)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
        res.status(401)
    }
}

async function deletePost(userId, res){
    try{
        const data = await Post.findOneAndDelete({_id: mongoose.Types.ObjectId(userId)})
        res.status(201).send("Post deleted Successfully!")
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function addLike(userObj, postId, res){
    try{
        const data = await Post.updateOne({
                _id: mongoose.Types.ObjectId(postId.trim())
            }, 
            {
                $addToSet:{
                usersWhoLiked:{
                    username: userObj.username,
                    id: mongoose.Types.ObjectId(userObj.id)
                }}
        })
        res.status(201).json(data)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function removeLike(userObj, postId, res){
    try{
        const data = await Post.updateOne({
                _id: mongoose.Types.ObjectId(postId.trim())
            }, 
            {
                $pull:{
                usersWhoLiked:{
                    username: userObj.username,
                    id: mongoose.Types.ObjectId(userObj.id)
                }}
        })
        res.status(201).json(data)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function editPost(userObj, postId, res){
    try{
        const edit= await Post.findOneAndUpdate({_id:mongoose.Types.ObjectId(postId)}, {caption: userObj.caption})
        res.status(201).send("Caption edited successfully!")
    } catch(error){
        const errors=handleErrors(error)
        res.status(401).json({errors})
    }
}

module.exports = router