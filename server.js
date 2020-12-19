import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import dotenv from  'dotenv';
import postRoutes from './routes/posts.js';

//app config
const app = express();
dotenv.config();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json())
app.use(Cors());
app.use('/videos',postRoutes);

//db config
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true,
})

//api endpoints
app.get('/',(req,res)=>res.status(200).send('This is the main endpoint'));


//listen
app.listen(port,()=>console.log(`listeneing on localhost:${port}`));


