import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'

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

//routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoute);



//rest api
app.get('/', (req, res) => {
    res.send({
        message: 'Hello fine world'
    })
})

//port
const PORT = process.env.PORT || 9090;


//run
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})