const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
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

module.exports = mongoose.model('post', postSchema)