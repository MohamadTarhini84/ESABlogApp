const mongoose = require('mongoose')
const bcrypt = require('bcrypt')//hashing function
const validator = require('validator')

const UserSchema = mongoose.Schema(
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

UserSchema.statics.signup = async function(email,username,firstname,lastname, password) {//needs to be a regular function to use this.
//UserSchema.statics.signup = async function(email, password) {
    // validation
    if (!email || !password || !username|| !firstname|| !lastname) {
     // if (!email || !password ) {
      throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) {
      throw Error('Password not strong enough')
    }
  
    const exists = await this.findOne({ email })
    const existsuser = await this.findOne({ username })
  
    if (exists) {
      throw Error('Email already in use')
    } 
    if (existsuser) {
        throw Error('Choose another username')
   }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({ email,username,firstname,lastname, password: hash })
    //const user = await this.create({ email, password: hash })
    return user
  }

  // static login method
UserSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }  

module.exports = mongoose.model("User", UserSchema);
