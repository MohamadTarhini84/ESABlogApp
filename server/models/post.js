const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true
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
    media: [{
        id: String
    }],
},{timestamps:true})

module.exports = mongoose.model('post', postSchema)