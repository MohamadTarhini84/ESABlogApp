//insert function for logging a user
const Admin = require('../models/adminModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const createToken =(_id) => {
     return jwt.sign({_id},process.env.SECRET, { expiresIn: '3d'})
}

//get all admin
const getAdmins = async(req, res) => {
    const admin = await Admin.find({}).sort({createdAt:-1})

    res.status(200).json(admin)
}
//get single admin
const getAdmin = async(req, res)=>{
    const { id } =req.params
    const admin = await Admin.findById(id)

    //we chech if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No admin'})
    }
    if(!admin){
        return res.status(404).json({error : 'No admin'})
    }
    res.status(200).json(admin)
}
//create new admin
const postAdmin = async(req, res) => {
    const {email,password,username} = req.body
    
    let emptyFields =[]
    if(!email) {
        emptyFields.push('email')
    }
    if(!password) {
        emptyFields.push('password')
    }
    if(!username) {
        emptyFields.push('username')
    }
    if(emptyFields.length>0){
        return res.status(400).json({ error: 'Please fill in all fields',emptyFields})
    }


      //add doc to db
    try {
        const admin = await Admin.create({email,password,username})
        res.status(200).json(admin)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}
//Delete a admin
const deleteAdmin = async(req, res)=> {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No admin'})
    }

    const admin = await Admin.findOneAndDelete({_id: id})

    if(!admin){
        return res.status(404).json({error : 'No such Posts'})
    }
    res.status(200).json(admin)}

//update a min
const updateAdmin = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such post'})
    }
    const admin = await Admin.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!admin){
        return res.status(404).json({error : 'No such Posts'})
    }
    res.status(200).json(admin)
}

//login user// inside this function we communicate to data base
const loginAdmin = async (req, res) => {
    const {email, password} = req.body

    try {
        const admin = await Admin.login(email, password)
 
        //create a token
        const token = createToken(admin._id)
 
 
        res.status(200).json({email, token})
     } catch (error){
        res.status(400).json({error: error.message})
     }
    
    res.json({mssg: 'login admin'})
}


module.exports = { 
    loginAdmin ,
    getAdmins,
    getAdmin,
    postAdmin,
    deleteAdmin,
    updateAdmin

}