import express from "express";

//rest object
const app = express();



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