const express = require('express')

const router = express.Router()

// Get All Workouts
router.get('/',(req,res) => {
    res.json({msg : "Get All Workouts"})
})

// Get Single Workouts
router.get('/:id',(req,res) => {
    res.json({msg : "Get single Workouts"})
})

// Post new Workouts
router.post('/',(req,res) => {
    res.json({msg : "Post new Workouts"})
})


// Delete Single Workouts
router.delete('/:id',(req,res) => {
    res.json({msg : "Delete Single  Workouts"})
})


// Update Single Workouts
router.patch('/:id',(req,res) => {
    res.json({msg : "Update Single  Workouts"})
})

module.exports = router