import connectDB from "./db/index.js";

// require('dotenv').config()
import 'dotenv/config';


connectDB();

/*

import mongoose from 'mongoose';
import {DB_NAME} from './constants';



import express from 'express';

const app = express();

(async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log(error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(err){
        console.log(err);
        throw err;
    }
} )()

*/