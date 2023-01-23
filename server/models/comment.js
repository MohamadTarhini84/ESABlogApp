const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    
    content: {
        type: String,
        required: true
    },

    usersWhoLiked: [{
        username: String,
        id: mongoose.Schema.Types.ObjectId
    }],
    
    media: [{
        id: String
    }]
})

module.exports = mongoose.model("comment", commentSchema)