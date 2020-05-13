const express  = require('express');
var bodyParser = require('body-parser');
require('dotenv').config()
 
var app = express()
 
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

app.get('/',(req,res,next)=>{
    res.send("fdfd");
})

app.get('/a',(req,res,next)=>{
    console.log(process.env.DB_USER)
    res.send('fdfda');
})

app.post('/login', (req,res,next)=>{
    console.log(req.body);
    next();
}
)
 
 
app.listen(port,()=>{
    console.log("Listen at "+port);
})