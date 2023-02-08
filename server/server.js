// require('dotenv').config()

const express=require('express');
const mongoose = require('mongoose');
const authRoutes=require('./routes/AuthRoute')
const userRoutes=require('./routes/UserRoute')
const postsRoute=require('./routes/postsRoute')
const commentsRoute=require('./routes/commentsRoute')

const app=express()//creates an express app

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// app.use((req,res,next)=>{
//     console.log(req.path,req.method)
//     next()
// })

//routes
app.use(express.urlencoded({extended:true}))
app.use('/api/auth', authRoutes)
app.use('/api//user', userRoutes)
app.use('/api/posts', postsRoute)
app.use('/api/comments', commentsRoute)

// connect to db
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/testToDoApp")///it takes time so promise
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(3001, () => {
      console.log('listening for requests on port', 3001)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 