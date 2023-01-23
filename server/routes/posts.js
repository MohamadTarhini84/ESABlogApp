const router = require('express').Router()
const Post = require("../models/post")
const mongoose=require("mongoose")

function handleErrors(error){
    let err={}

    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    return err
}

router.get('/posts/:userId', (req,res)=>{
    try{
        const posts=getPosts(req.params.userId) //get posts of users connected to user with id of ":userId"
        res.status(200).json(posts)
    } catch{
        res.status(400)
    }
})

router.post('/new/:userId', (req,res)=>{
    try{
        createPost(req.body, req.params.userId)
        res.status(201)
    } catch{
        res.status(401)
    }
})

router.delete('/delete/:postId',(req,res)=>{
    try{
        deletePost(req.params.postId)
        res.status(202)
    } catch{
        res.status(402)
    }
})

router.patch('/addLike/:postId', (req, res)=>{
    try{
        editPost(req.body,req.params.postId)
        res.status(203)
    } catch{
        res.status(403)
    }
})

async function createPost(userObj, res){ 
    try{
        const user = await Post.create(userObj)
        res.status(201).json(user)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function deletePost(userId){
    try{
        const data = await Post.findOneAndDelete({_id: mongoose.Types.ObjectId(userId)})
        res.status(201).json(data)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function editPost(userObj){
    try{
        const data = await Post.updateOne({
                _id: mongoose.Types.ObjectId(userObj.id)
            }, 
            {
                $push:{
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

module.exports = router