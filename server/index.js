import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors"
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'
import ChatRoute from './Routes/ChatRoute.js'
import MessageRoute from './Routes/MessageRoute.js'



const app = express();

app.use(express.static('public'))
app.use('/images',express.static("images"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors())

dotenv.config();

mongoose
.connect(process.env.MONGO_DB)
.then(() => app.listen(process.env.PORT, () => console.log("Yup, Server is ruuning on port 5000")))
.catch((error) => console.log(error));


//routes

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/posts',PostRoute)
app.use('/upload',UploadRoute)
app.use('/chat',ChatRoute)
app.use('/message',MessageRoute)


