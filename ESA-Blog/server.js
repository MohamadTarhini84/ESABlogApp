require('dotenv').config()

const express=require('express');
const mongoose = require('mongoose');
const userRoutes=require('./routes/UserRoute')
const authRoutes=require('./routes/AuthRoute')

const app=express()//creates an express app

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

// connect to db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)///it takes time so promise
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 