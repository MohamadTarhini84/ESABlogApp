const router=require("express").Router()
const Comment = require("../models/comment")
const mongoose=require("mongoose")

function handleErrors(error){
    let err={}

    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    return err
}

router.get('/comments/:postId', (req,res)=>{
    try{
        const comments=getComments(req.params.postId) //get comments of post with id of ":postId"
        res.status(200).json(comments)
    } catch{
        res.status(400)
    }
})

router.post('/new/:userId/:postId', (req,res)=>{
    try{
        const body=req.body
        body['userId']=req.params.userId
        body['commentId']=req.params.postId

        createComment(body)
        res.status(201)
    } catch{
        res.status(401)
    }
})

router.delete('/delete/:commentId',(req,res)=>{
    try{
        deleteComment(req.params.commentId)
        res.status(202)
    } catch{
        res.status(402)
    }
})
    
router.patch('/update/:commentId', (req, res)=>{
    try{
        editComment(req.body,req.params.commentId)
        res.status(204)
    } catch{
        res.status(403)
    }
})



async function createComment(userObj, res){ 
    try{
        const user = await Comment.create(userObj)
        res.status(201).json(user)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function deleteComment(userId){
    try{
        const data = await Comment.findOneAndDelete({_id: mongoose.Types.ObjectId(userId)})
        res.status(201).json(data)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
}

async function editComment(){
    try{
        const data = await Commentt.updateOne({
                _id: mongoose.Types.ObjectId(commentId)
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