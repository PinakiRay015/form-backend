require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const myRouter = require('./router/router');
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(myRouter)

app.get('/' , (req , res) =>
{
    res.send(`Hey developers!! This is pinaki sankar ray`)
})

mongoose.connect(process.env.MONGO_URI).then(()=>
{
    try {
        app.listen(port , () =>
        {
            console.log(`This server is running on port ${port}`);
        })
    } catch (error) {
        
    }
})