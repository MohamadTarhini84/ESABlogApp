const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    content: {
        type: String,
        required: true,
        enum:['text', 'image', 'video', 'voice']
    },
    username: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    usersWhoLiked: [{
        username: String,
        id: mongoose.Schema.Types.ObjectId
    }],
    mediaPath: [{
        type: String
    }]
},{timestamps:true})

module.exports = mongoose.model("comment", commentSchema)