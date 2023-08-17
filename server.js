import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import noteRoute from './routes/noteRoute.js'
import path from 'path';
import { fileURLToPath } from "url";

//rest object
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


//configuring environment variable
dotenv.config();

//database config
connectDB();

//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/note', noteRoute);



//rest api
app.use('*', function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})


//port
const PORT = process.env.PORT || 9090;


//run
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})