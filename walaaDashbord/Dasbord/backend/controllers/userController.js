const User = require('../models/userModel')
const mongoose = require('mongoose')

// get all users
const getUsers = async(req, res) => {
    const users = await User.find({}).sort({createdAt:-1})

    res.status(200).json(users)
}

//get single user
const getUser = async(req, res)=>{
    const { id } =req.params
    const user = await User.findById(id)

    //we chech if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No user'})
    }
    if(!user){
        return res.status(404).json({error : 'No user'})
    }
    res.status(200).json(user)
}

//Delete a user
const deleteUser = async(req, res)=> {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No user'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user){
        return res.status(404).json({error : 'No such Posts'})
    }
    res.status(200).json(user)
}
const updateStatus = async(req, res) => {
    const {role} = req.body
    await User.findByIdAndUpdate(req.params.userId, { role})
    res.status(200).json({success: true, result:{_id:req.params.userId}});
}

module.exports = {
    getUsers,
    getUser,
    deleteUser,
    updateStatus
}