const express = require("express").Router();
const users =require('./users');

//api search
router.get('/', (request, response) => {
    const { q } = request.query;
    response.json(search(users , q).slice(0,20));
  });
  
  const keys = ["first_name", "last_name", "email"];
  
  const search = (data , q) => {
    return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };
  