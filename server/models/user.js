const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username: String,
    password: String,
    posts: [{
        id: mongoose.Schema.Types.ObjectId
    }],
    comments: [{
        id: mongoose.Schema.Types.ObjectId
    }],
    followers: [{
        username:String,
        id: mongoose.Schema.Types.ObjectId
    }],
    following: [{
        username:String,
        id: mongoose.Schema.Types.ObjectId
    }],
})

module.exports = new mongoose.model('user', userSchema)