const mongoose=require('mongoose')
//create new schema
const Schema = mongoose.Schema

//create new schema
const userSchema = mongoose.Schema(
{
    email:{
        type:String,
        required: true,
        unique:true
    },
    username: {
        type: String,
        required: true,
        unique:true
    },
    password : {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    isAdmin : {
        type: Boolean,
        default: false,
        role:["true", "false"],
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    livesin: String,
    worksAt: String,
    relationship: String,
    followers: [{
        username:String,
        id: mongoose.Schema.Types.ObjectId
    }],
    following: [{
        username:String,
        id: mongoose.Schema.Types.ObjectId
    }],
},
{timestamps: true}
)

module.exports = new mongoose.model('User', userSchema)