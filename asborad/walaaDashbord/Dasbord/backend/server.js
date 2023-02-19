require('dotenv').config();

const express = require('express');
const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose')
const postRoutes = require('./routes/posts')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/users')
const bodyParser=require('body-parser')
const helmet=require('helmet')
const morgan=require('morgan')
const cors=require('cors')





//startup the express app
const app = express();


//middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//react to request: routes

app.use('/api/posts', postRoutes);
app.use('/api/admins', adminRoutes);//management
app.use('/api/users', userRoutes);



//connect to db
mongoose.connect(process.env.MONG_URI)
   .then(() => {
      //listen for request
      app.listen(process.env.PORT, () => {
      console.log('Connected to db && listening on port ', process.env.PORT);
        })
   })
   .catch((error) => {
      console.log(error)
   })


