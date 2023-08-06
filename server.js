import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from 'cors'

//rest object
const app = express();

//configuring environment variable
dotenv.config();

//database config
connectDB();

//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//rest api
app.get('/', (req, res)=>{
    res.send({
        message:'Hello fine world'
    })
})

//port
const PORT = process.env.PORT || 9090 ;


//run
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})