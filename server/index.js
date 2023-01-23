const express=require('express')
const app=express()
const postsRoute=require('./routes/posts')
const commentsRoute=require('./routes/comments')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/posts', postsRoute)
app.use('/comments', commentsRoute)

app.listen(3001)