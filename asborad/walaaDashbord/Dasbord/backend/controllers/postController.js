const Post = require('../models/postModel')
const mongoose = require('mongoose')


//get all posts
const getPosts = async(req, res) => {
    const posts = await Post.find({}).sort({createdAt: -1})//fina n7ot b2lb lacoladdre condition 

    res.status(200).json(posts)

}

//get a single post
const getPost = async(req,res) => {
    const { id } =req.params
    const post = await Post.findById(id)

    //we chech if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such post'})
    }
    if(!post){
        return res.status(404).json({error : 'No such Posts'})
    }
    res.status(200).json(post)
}

//create new posts
const createPost = async(req, res) => {
    const {content, username,caption, usersWhoLiked, media} = req.body
      //add doc to db
    try {
        const post = await Post.create({content,username,caption,usersWhoLiked, media})
        res.status(200).json(post)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a post
const deletePost = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such post'})
    }

    const post = await Post.findOneAndDelete({_id: id})

    if(!post){
        return res.status(404).json({error : 'No such Posts'})
    }
    res.status(200).json(post)
}
//update a 
const updatePost = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such post'})
    }
    const post = await Post.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!post){
        return res.status(404).json({error : 'No such Posts'})
    }
    res.status(200).json(post)
}


module.exports ={
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost
}