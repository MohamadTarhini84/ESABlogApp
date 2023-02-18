const express = require("express");
const router = require("./AuthRoute");
const users = require('./users');


const app = express();

// get to all users
router.get('/users', (req, res) => {
  console.log(users)
  res.json(users.splice(0,20))
});

//api search
router.get('/search', (request, response) => {
  const { q } = request.query;
  response.json(search(users, q).slice(0, 20));
});

const keys = ["first_name"];

const search = (data, q) => {
  return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(q))
  );
};

module.exports = router