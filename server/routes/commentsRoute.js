const router=require("express").Router()
const mongoose=require("mongoose")
const Notification = require("../models/notification")
const Post = require("../models/post")
const Comment = require("../models/comment")
const upload=require('../controllers/uploadController')

function handleErrors(error){
    let err={}
    console.log(error)
    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    return err
}

router.get('/:postId', (req,res)=>{
    getComments(req.params.postId, res)
})

router.post('/new/:postId', upload.none(), (req,res)=>{
    console.log(req.files)
    createComment(req.body, req.params.postId, res)
})

router.delete('/delete/:commentId',(req,res)=>{
    deleteComment(req.params.commentId, res)
})
    
router.patch('/update/:commentId', (req, res)=>{
    editComment(req.body, req.params.commentId, res)
})
    
router.patch('/addLike/:commentId', (req, res)=>{
    addLike(req.body, req.params.commentId, res)
})
    
router.patch('/removeLike/:commentId', (req, res)=>{
    removeLike(req.body, req.params.commentId, res)
})

async function getComments(postId, res){
    try{
        const comments = await Comment.find({postId: mongoose.Types.ObjectId(postId)})
        res.status(201).json(comments)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}


async function createComment(postObj, postId, res){ 
    try{
        const data=Post.findOne({_id:mongoose.Types.ObjectId(postId)})
        const newComment= new Comment({
            postId: mongoose.Types.ObjectId(postId.trim()),
            userId: mongoose.Types.ObjectId(postObj.userId),
            content: postObj.content,
            username:postObj.username,
            caption:postObj.caption
        })
        var validate = newComment.validateSync()
        if(validate){
            console.log("failed")
            res.status(401).json(validate.message)
        } else{
            upload.single('image')
            console.log("valid")
            const comment = await Comment.create(newComment)
            const noti=new Notification({ //retreiving info of liked post into notification object
                content:'comment',
                postId: mongoose.Types.ObjectId(postId.trim()),
                from: mongoose.Types.ObjectId(postObj.id.trim()),
                to: mongoose.Types.ObjectId(data.userId.trim())
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
            res.status(201).json("adad")
        }
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function deleteComment(postId){
    try{
        const data = await Comment.findOneAndDelete({_id: mongoose.Types.ObjectId(postId)})
        res.status(201).send("Comment deleted successfully!")
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function addLike(userObj, commentId, res){
    try{
        const data = await Comment.findOneAndUpdate({ //adding like
            _id: mongoose.Types.ObjectId(commentId.trim())
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
            postId: mongoose.Types.ObjectId(commentId.trim()),
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

async function removeLike(userObj, commentId, res){
    try{
        const data = await Comment.updateOne({
                _id: mongoose.Types.ObjectId(commentId.trim())
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

async function editComment(userObj, commentId, res){
    try{
        const edit= await Comment.findOneAndUpdate({_id:mongoose.Types.ObjectId(commentId)}, {caption: userObj.caption})
        res.status(201).send("Caption edited successfully!")
    } catch(error){
        const errors=handleErrors(error)
        res.status(401).json({errors})
    }
}

module.exports = router