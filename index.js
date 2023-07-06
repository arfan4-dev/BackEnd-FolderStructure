const express=require('express');

const app=express();
// load config from .env file
require('dotenv').config()

const PORT=process.env.PORT || 5000;

//middleware to parse json request body
app.use(express.json());

//Mapping with routes
const todoRoutes=require('./routes/todoRoute');
app.use('/api/v1',todoRoutes)

//start server 

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

//connect to db
const dbConnect=require('./config/database');
dbConnect();

//default Route
app.get('/',(req,res)=>{console.log("<h1>Hello from default page</h1>")})


