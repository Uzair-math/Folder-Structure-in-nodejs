const express = require('express')
const app = express()
app.use(express.json())
const PORT = 4000

const dotenv = require('dotenv')
const myroute = require('../router/route')
// const PORT = process.env.PORT;
app.use('/route', myroute)

app.listen(PORT, (error)=>{
    if (!error) {
        console.log("Server is running on port", PORT);
    }
    else{
        console.log("error");
    }
})




















