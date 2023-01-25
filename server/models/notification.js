const mongoose=require('mongoose')

const notificationSchema=mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,

    content: {
        type:String,
        enum:['follow', 'comment', 'like']
    },
    
    from: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('notification', notificationSchema)