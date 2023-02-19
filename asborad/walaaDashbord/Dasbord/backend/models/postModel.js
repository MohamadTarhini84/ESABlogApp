const mongoose = require('mongoose')

//create new schema
const Schema = mongoose.Schema

//we need function to create schema
const postSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
        
    },
    content: {
        type: String,
        required: true,
        enum:['text', 'image', 'video', 'voice']
    },
    username: {
        type: String,
    },
    caption:{
        type:String,
    },
    usersWhoLiked: [{
        _id: false,
        username: String,
        id: mongoose.Schema.Types.ObjectId,
    }],
  
    reports:[{
        _id:false,
        id:mongoose.Schema.Types.ObjectId,
    }, {unique:true}],
    mediaPath: {
        type: String
    },
},{timestamps:true})

module.exports = mongoose.model('Post', postSchema)