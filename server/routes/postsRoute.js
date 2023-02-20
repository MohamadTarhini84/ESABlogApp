const router = require('express').Router()
const Post = require("../models/post")
const Notification = require("../models/notification")
const mongoose=require("mongoose")
const upload=require('../controllers/uploadController')
const User=require('../models/userModel')

function handleErrors(error){
    let err={}
    console.log(error)
    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    return err
}

router.get('/:userId', (req,res)=>{
    getPosts(req.params.userId, res)
})

router.get('/post/:postId', (req, res)=>{
    getOnePost(req.params.postId, res)
})

router.post('/new/:userId',upload.fields([{name:'image'}]),  (req,res)=>{
    let path=""
    if(req.files.image){
        path = req.files.image[0].path
    }
    createPost(req.body, path, req.params.userId, res)
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

router.patch('/report/:postId', (req, res)=>{
    addReport(req.body,req.params.postId,res)
})

async function getPosts(userId, res){
    try{
        const user=await User.find({_id:mongoose.Types.ObjectId(userId)}, 'following')
        let following=user.map((e)=>e.following)[0]
        console.log(following)
        const posts = await Post.find({$or:[{userId: mongoose.Types.ObjectId(userId)}, {userId:{$in:following}}]})
        res.status(201).json(posts)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function getOnePost(postId, res){
    try{
        const post=await Post.findOne({_id:mongoose.Types.ObjectId(postId.trim())})
        res.status(201).json(post)
    } catch(error){
        const errors=handleErrors(error)
        res.status(401).json({errors})
    }
}

async function createPost(userObj, path, userId, res){ 
    try{
        const newPost= new Post({
            userId: mongoose.Types.ObjectId(userId.trim()),
            content: userObj.content,
            username:userObj.username,
            caption:userObj.caption,
            mediaPath:path
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
        const data = await Post.findOneAndUpdate({ //adding like
                _id: mongoose.Types.ObjectId(postId.trim())
            }, 
            {
                $addToSet:{
                usersWhoLiked:{
                    username: userObj.username,
                    id: mongoose.Types.ObjectId(userObj.id.trim())
                }}
        })
        const noti=new Notification({ //retreiving info of liked post into notification object
            content:'like',
            postId: mongoose.Types.ObjectId(postId.trim()),
            from: mongoose.Types.ObjectId(userObj.id.trim()),
            to: mongoose.Types.ObjectId(data.userId)
        })
        const isNoti=await Notification.find({ //checking if retreived info already has notification entry
            content:noti.content,
            postId:noti.postId,
            from: noti.from,
            to:noti.to
        })
        if(isNoti.length==0){ //if not add entry
            const sendNoti= await Notification.create(noti)
        }
        res.status(201).json(data) //response
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

async function addReport(userObj, postId, res){
    try{
        const data = await Post.updateOne({
                _id: mongoose.Types.ObjectId(postId.trim())
            }, 
            {
                $addToSet:{
                reports:{
                    username: userObj.username,
                    id: mongoose.Types.ObjectId(userObj.id)
                }}
        })
        res.status(201).send("Post reported successfuly!")
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

module.exports = router