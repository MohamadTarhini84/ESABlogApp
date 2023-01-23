//using the express router
const express = require('express');

const router = express.Router();

//atach to a handler to this
//Get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
});

//GET single workout
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE A new workout'})
})

//UPDATE A workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})



module.exports = router;