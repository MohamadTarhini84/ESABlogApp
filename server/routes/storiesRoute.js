const router = require('express').Router()
const mongoose=require("mongoose")
const upload=require('../controllers/uploadController')
const Story=require('../models/story')
const User=require('../models/userModel')
const { route } = require('./postsRoute')

function handleErrors(error){
    let err={}
    console.log(error)
    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    return err
}

router.get('/:userId', (req,res)=>{
    getStories(req.params.userId, res)
})

router.post('/new/:userId',upload.fields([{name:'image'}]),  (req,res)=>{
    createStory(req.files.image[0].path, req.params.userId, res)
})

async function getStories(userId, res){
    try{
        const stories= await Story.find({userId:mongoose.Types.ObjectId(userId)})
        res.status(201).json(stories)
    } catch(errors){
        const error=handleErrors(errors)
        res.status(401).json(error)
    }
}

async function createStory(path, userId, res){
    try{
        const user=await User.findById(userId)
        const newStory=new Story({
            userId:userId,
            username:user.username,
            profilePic:user.profilePicture,
            storyPic:path
        })
        const story=await Story.create(newStory)
        res.status(201).json(story)
    } catch(errors){
        const error=handleErrors(errors)
        res.status(401).json(error)
    }
}

module.exports = router