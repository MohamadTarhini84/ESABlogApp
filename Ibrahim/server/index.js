const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const users =require('./users');


const app = express();
const PORT = 5000;
dotenv.config();
app.use(express.json());
app.use(cors());

//connect database
mongoose.set('strictQuery', true),
  mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

//server response
app.get('/', (req, res) => {
    res.send('Hello from server!')
  });

//get to all users
app.get('/users', (req, res) => {
  console.log(users)
  res.json(users.splice(0,20))
});

//api search
app.get('/users/search', (request, response) => {
  const { q } = request.query;
  response.json(search(users , q).slice(0,20));
});

const keys = ["first_name", "last_name", "email"];

const search = (data , q) => {
  return data.filter((item) =>
  keys.some((key) => item[key].toLowerCase().includes(q))
  );
};

  
//server runing and port
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
 