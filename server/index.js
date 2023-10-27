const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.listen(4000,(req,res)=>{
    console.log("app listening to port 4000")
})