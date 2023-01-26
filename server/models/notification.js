const mongoose=require('mongoose')

const notificationSchema=mongoose.Schema({
    content: {
        type:String,
        enum:['follow', 'comment', 'like', 'chat']
    },
    postId:mongoose.Schema.Types.ObjectId,
    from: mongoose.Schema.Types.ObjectId,
    to: mongoose.Schema.Types.ObjectId,
    isRead: {
        type:Boolean,
        default: false
    }
},{timestamps: true})

module.exports = mongoose.model('notification', notificationSchema)