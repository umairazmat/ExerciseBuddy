require('dotenv').config();
const express = require('express');

const workoutRoutes = require('./routes/workouts')


// express app
const app = express();


// add middleware

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path ,req.method);
    next()
})

// routes

app.use('/api/workouts/', workoutRoutes)






// listen at port 4500'
app.listen(process.env.PORT,() => {
         console.log("Listening at port",process.env.PORT)
})
