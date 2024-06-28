import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";


//----------------Routes-------------------------
import authRoutes from './routes/authroutes.js'
import messageRoutes from './routes/messageroutes.js'
import userRoutes from "./routes/userroutes.js"

//--------------------Data Base------------------------
import databaseConnectMongoDB from "./db/databaseConnectMongoDB.js";

const app=express();
dotenv.config();
//we cant directly get env variables
const PORT=process.env.PORT || 5000;

//middle ware
app.use(express.json()); //to parse the incoming request with json payloads from(req.body)
//to access the cookie
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
// app.get("/",(req,res)=>{
//     //route routr localhost:5000
//     res.send("hello world!!!")
// })


//creating multiple routing make code messy that why here we use middle ware
app.listen(PORT,()=>{
    databaseConnectMongoDB();
    console.log(`server is running on port ${PORT}`);
});