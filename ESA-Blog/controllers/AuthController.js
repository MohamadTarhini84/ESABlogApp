const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt');

//Create static method instead of the ones already present

const createToken = (_id) => {//make it as a function since we need to generate a token for signup and login and _id since mangodb uses it 
  //but we can name it whatever we re passing the id as an argument because it will be part of the payload
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })//first arg is part of the payload we can send multiple things but
  // never anything sensitive like a password the user will stay logged in for 3 days and then it will expire
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

//json web tokens is a way to manage authentication between back and frontend

// signup a user
const signupUser = async (req, res) => {
  const {email,username,firstname,lastname, password} = req.body
  //const {email, password} = req.body

  try {
    const user = await User.signup(email,username,firstname,lastname, password)
    //const user = await User.signup(email, password)
    // create a token
    const token = createToken(user._id)

    res.status(200).json({email,username,firstname,lastname, token})
    //res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }


