const express =require("express")
const mongoose= require("mongoose")

require("dotenv").config()
const route=require("./Routes/taskRoutes")

const cors=require("cors")
const app=express()
const PORT=process.env.PORT | 5000

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.URI).then(()=>
console.log("DATABASE CONNECTED.....")
).catch((err)=>console.log("error happend......."))

app.use("/api",route)

app.listen(PORT, ()=> console.log(`Listening to the ${PORT}`));

