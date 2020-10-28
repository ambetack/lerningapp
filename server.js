import express from 'express' ;
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();


const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodnUrl, {mongodb+srv:mongodbuser:<adyaankur>@cluster0.tpkr7.mongodb.net/<learning>?retryWrites=true&w=majority
    useNewUrlParser: true

}) .catch(error => console.log(error.reason));


const app= express();

app.use("/api/users",userRoute);
app.get("/api/course",(req,res) => {
    res.send(data.course);
})


app.listen(5000,() => {console.log("server started at http://localhost:3000")})