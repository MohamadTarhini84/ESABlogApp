const mongoose=require('mongoose')

const storySchema=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        required:true
    },
    storyPic:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    expireAt: {
        type: Date,
        /* Defaults 1 day from creation */
        default: new Date(new Date().valueOf() + 86400000),
        /* Remove doc 60 seconds after specified date */
        expires: 60
    }
})

module.exports = mongoose.model('story', storySchema)