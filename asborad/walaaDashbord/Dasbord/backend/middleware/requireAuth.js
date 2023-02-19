const jwt = require('jsonwebtoken')
const Admin = require('../models/adminModel')

const requireAuth = async(req, res, next ) => {

    //verify authentication
    const { authorization } = req.headers

    //check the json web tokenn make sure has a value
    if(!authorization) {
        return res.status(401).json({error: 'Authorizaion token required'})
    }

    const token = authorization.split(' ')[1]
    
    //try and verif the token
    try{
       const {_id} =  jwt.verify(token)

        req.admin = await Admin.findOne({ _id }).select('_id')
        next()

    }catch(error){
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports= requireAuth