const mongoose = require('mongoose')
//for hash our pasword in secure 
const bcrypt = require('bcrypt')

//for validation
const validator = require('validator')


const Schema = mongoose.Schema

const adminSchema= new Schema({
    email: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    username:{
        type: String,
    }

})


//static login method
adminSchema.statics.login = async function (email, password) {

    //validation
    if (!email || !password){
       throw Error('all fields must be filled') 
   }
   const admin = await this.findOne({ email, password})

   if(!admin) {
       throw Error('Incorrect email')
   }

   const match = await (password, admin.password)


   if(!match) {
       throw Error('Incorrect password')
   }
  return admin
}
module.exports = mongoose.model('Admin',adminSchema)