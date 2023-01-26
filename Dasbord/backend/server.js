require('dotenv').config();

const express = require('express');
const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts.js')
const adminRoutes = require('./routes/admin')



//startup the express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//react to request: routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/admin', adminRoutes);

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


