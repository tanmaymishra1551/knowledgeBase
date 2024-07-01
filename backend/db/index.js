
import mongoose from "mongoose";
import {DB_NAME, PASSWORD} from "../constant.js"


const connectDB = async ()=>{
    try{
       await mongoose.connect(`mongodb+srv://tanmaymishra1551:${PASSWORD}@cluster0.osomdpq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0/`);
       console.log(`MongoDB connected`);
    }
    catch(error){
        console.log("ERROR: ", error);
        throw err
    }
}

export default connectDB;