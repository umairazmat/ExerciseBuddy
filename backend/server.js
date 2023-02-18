require('dotenv').config();
const express = require('express');


// express app
const app = express();


// add middelwear
app.use((req,res,next) => {
    console.log(req.path ,req.method);
    next()
})

// routes
app.get('/', (req,res) => {
    res.json({WelcomeMsg : "Welcome to Exercise Buddy App"})
})



// listen at port 4500'
app.listen(process.env.PORT,() => {
         console.log("Listening at port",process.env.PORT)
})
